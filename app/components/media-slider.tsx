'use client'

import { cn } from 'app/lib/utils'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'

interface MediaItem {
    type: 'image' | 'video'
    src: string
    alt?: string
    poster?: string // For video thumbnails
}

interface MediaSliderProps {
    items: MediaItem[]
    className?: string
    autoPlay?: boolean
    showControls?: boolean
}

export function MediaSlider({
    items,
    className,
    autoPlay = false,
    showControls = true,
}: MediaSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(autoPlay)
    const [videoErrors, setVideoErrors] = useState<Set<number>>(new Set())
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

    const currentItem = items[currentIndex]
    const isCurrentVideo = currentItem?.type === 'video'
    const isCurrentImage = currentItem?.type === 'image'
    const hasError = currentItem ? videoErrors.has(currentIndex) : false

    const getCurrentItem = () => ({
        item: currentItem || null,
        index: currentIndex,
        isVideo: isCurrentVideo || false,
        isImage: isCurrentImage || false,
        hasError,
        totalItems: items.length,
    })

    useEffect(() => {
        console.log('Current item:', getCurrentItem())
    }, [currentIndex, currentItem, getCurrentItem])

    useEffect(() => {
        // Reset video refs array when items change
        videoRefs.current = videoRefs.current.slice(0, items.length)
    }, [items.length])

    useEffect(() => {
        const currentVideo = videoRefs.current[currentIndex]
        if (isCurrentVideo && currentVideo && !hasError && currentItem) {
            if (isPlaying) {
                const playPromise = currentVideo.play()
                if (playPromise !== undefined) {
                    playPromise.catch((error) => {
                        console.log('Video playback error: ', error)
                        setVideoErrors((prev) => new Set(prev).add(currentIndex))
                    })
                }
            } else {
                currentVideo.pause()
            }
        }
    }, [currentIndex, isPlaying, currentItem, videoErrors, hasError, isCurrentVideo])

    useEffect(() => {
        if (!autoPlay || items.length <= 1) return

        const interval = setInterval(() => {
            goToNext()
        }, 65000) // (ms) Change this to change the showtime of each slide.

        return () => clearInterval(interval)
    }, [autoPlay, items.length])

    const handleVideoError = (index: number) => {
        console.log('Video loading error for index:', index)
        setVideoErrors((prev) => new Set(prev).add(index))
    }

    const goToNext = () => {
        if (items.length > 0) {
            setCurrentIndex((prev) => (prev + 1) % items.length)
        }
    }

    const goToPrevious = () => {
        if (items.length > 0) {
            setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
        }
    }

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying)
    }

    if (!items.length || !currentItem) {
        return (
            <div className="flex items-center justify-center h-64 bg-muted rounded-lg">
                <p className="text-muted-foreground">No media items to display</p>
            </div>
        )
    }

    return (
        <div className={cn('relative w-full h-full', className)}>
            {/* Main media display */}
            <div className="relative w-full h-full overflow-hidden">
                {isCurrentImage ? (
                    <Image
                        src={currentItem.src || '/placeholder.svg'}
                        alt={currentItem.alt || `Slide ${currentIndex + 1}`}
                        fill
                        className="object-cover"
                        priority
                    />
                ) : hasError ? (
                    <div className="w-full h-full flex items-center justify-center bg-gray-900">
                        <Image
                            src={
                                currentItem.poster ||
                                '/placeholder.svg?height=400&width=600&query=video placeholder'
                            }
                            alt={currentItem.alt || `Video ${currentIndex + 1}`}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black/70 rounded-full p-4">
                                <Play className="h-12 w-12 text-white" />
                            </div>
                        </div>
                    </div>
                ) : (
                    <video
                        ref={(el) => {
                            videoRefs.current[currentIndex] = el
                        }}
                        src={currentItem.src}
                        poster={currentItem.poster}
                        className="absolute inset-0 w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                        onError={() => handleVideoError(currentIndex)}
                        onLoadStart={() =>
                            console.log('Video loading started for index:', currentIndex)
                        }
                    />
                )}

                {/* Navigation arrows */}
                {showControls && items.length > 1 && (
                    <>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                            onClick={goToPrevious}
                        >
                            <ChevronLeft className="h-8 w-8" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                            onClick={goToNext}
                        >
                            <ChevronRight className="h-8 w-8" />
                        </Button>
                    </>
                )}

                {/* Play/Pause button for videos */}
                {showControls && isCurrentVideo && !hasError && (
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute bottom-6 right-6 bg-black/50 hover:bg-black/70 text-white"
                        onClick={togglePlayPause}
                    >
                        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                    </Button>
                )}
            </div>
        </div>
    )
}
