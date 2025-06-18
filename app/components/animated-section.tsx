'use client'

import { useIntersectionObserver } from 'app/hooks/useScrollAnimation'
import type { ReactNode } from 'react'

interface AnimatedSectionProps {
    children: ReactNode
    className?: string
    delay?: number
    direction?: 'up' | 'down' | 'left' | 'right'
}

export default function AnimatedSection({
    children,
    className = '',
    delay = 0,
    direction = 'up',
}: AnimatedSectionProps) {
    const [ref, isVisible] = useIntersectionObserver()

    const getTransform = () => {
        switch (direction) {
            case 'up':
                return 'translate-y-8'
            case 'down':
                return '-translate-y-8'
            case 'left':
                return 'translate-x-8'
            case 'right':
                return '-translate-x-8'
            default:
                return 'translate-y-8'
        }
    }

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${
                isVisible
                    ? 'opacity-100 translate-x-0 translate-y-0'
                    : `opacity-0 ${getTransform()}`
            } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    )
}
