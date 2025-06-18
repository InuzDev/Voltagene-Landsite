import type { Metadata } from 'next'
import type React from 'react'

export const metadata: Metadata = {
    title: 'Voltagene SRL - Trabajo en Progreso',
    description:
        'Haz encontrado la sección de trabajo en progreso de Voltagene SRL. Aquí encontrarás nuestras próximas funcionalidades y mejoras en desarrollo.',
}

export default function WorkInProgressLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <>{children}</>
}
