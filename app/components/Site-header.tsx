'use client'

import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import type React from 'react'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

export function SiteHeader() {
    const [isScrolled, setIsScrolled] = useState(false)

    const pathname = usePathname()
    const router = useRouter()

    // Navigation links data
    const generateNavLinks = (pathname: string) => [
        { href: pathname === '/' ? '/#start' : '/', label: 'Inicio' },
        // { href: pathname === '/' ? "/#services" : "/Services", label: "Servicios" }, since the page itself isn't ready, we going to deny access to it.
        { href: '/#services', label: 'Servicios' },
        { href: pathname === '/' ? '/#projects' : '/Projects', label: 'Proyectos' },
        // { href: "/#about", label: "Sobre Nosotros" },
        // { href: "/#testimonials", label: "Testimonials" }, This section is still pending a discussion with client.
        { href: '/Panel-Calculator', label: 'Calculadora Solar' },
        { href: '/Contact', label: 'Contáctanos' },
    ]

    const navLinks = generateNavLinks(pathname)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Conditional renderer
    if (pathname === '/WIP') return null

    // Conditional transparency
    const TransparentWhiteList = pathname === '/' || pathname === '/Projects' // Make it transparent in the project route.
    const shouldBeTransparent = TransparentWhiteList && !isScrolled

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        if (href.startsWith('#')) {
            const element = document.querySelector(href)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
                // optional: update URL hash without reload
                window.history.pushState(null, '', href)
            }
        } else {
            router.push(href)
        }
    }

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                shouldBeTransparent
                    ? 'bg-transparent text-white'
                    : 'bg-white shadow-md text-gray-900'
            }`}
        >
            <div className="container flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="/Logo-main.png" alt="logo-placeholder" height={64} width={64} />
                    <span className="font-bold">Voltagene SRL</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className={`hover:text-green-700 transition-colors ${
                                shouldBeTransparent ? 'text-white' : 'text-gray-700'
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Link href={'/Quotes'}>
                        <Button
                            className={`hidden sm:inline-flex ${
                                shouldBeTransparent
                                    ? 'bg-white text-green-800 hover:bg-gray-100'
                                    : 'bg-green-800 hover:bg-green-900 text-white'
                            }`}
                        >
                            Obtener cotización
                        </Button>
                    </Link>

                    {/* Mobile Navigation */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between pb-4 border-b">
                                    <Link href="/" className="flex items-center space-x-2">
                                        <Image
                                            src="/Logo-main.png"
                                            alt="logo-placeholder"
                                            height={64}
                                            width={64}
                                        />
                                        <span className="font-bold">Voltagene SRL</span>
                                    </Link>
                                </div>
                                <nav className="flex flex-col gap-4 mt-8">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            onClick={(e) => scrollToSection(e, link.href)}
                                            className="text-lg font-medium py-2 px-20 hover:text-green-700 transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                    <Link href={'/Quotes'}>
                                        <Button className="mt-3.5 mx-14 bg-green-800 hover:bg-green-900 text-white">
                                            Obtener Cotización
                                        </Button>
                                    </Link>
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
