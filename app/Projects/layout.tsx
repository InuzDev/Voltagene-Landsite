import type { Metadata } from 'next'
import type React from 'react'

export const metadata: Metadata = {
    title: 'Voltagene SRL - Proyectos',
    description: 'Portafolio de proyectos de energía solar de Voltagene SRL',
}

export default function ProjectsHomePageLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <>{children}</>
}
