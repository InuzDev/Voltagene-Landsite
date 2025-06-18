import type { Metadata } from 'next'
import type React from 'react'

export const metadata: Metadata = {
    title: 'Voltagene SRL - Cotización Solar',
    description: 'Contactenos para obtener una cotización personalizada para su instalación solar',
}

export default function QuotesLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <>{children}</>
}
