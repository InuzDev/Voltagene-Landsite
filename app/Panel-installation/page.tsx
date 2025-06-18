'use client'

import { Button } from 'app/components/ui/button'
import { Card, CardContent } from 'app/components/ui/card'
import { useScrollAnimation } from 'app/hooks/useScrollAnimation'
import { ArrowRight, CheckCircle, Shield, Wifi, Zap } from 'lucide-react'
import { useState } from 'react'

export default function PanelInstallation() {
    const [activeStep, setActiveStep] = useState(0)
    const scrollY = useScrollAnimation()

    const steps = [
        {
            title: 'Evaluación del Sitio',
            description: 'Evaluación profesional de tu ubicación',
            icon: <Shield className="w-6 h-6" />,
            details:
                'Nuestros técnicos evalúan tu propiedad para determinar la ubicación óptima del panel.',
        },
        {
            title: 'Instalación del Panel',
            description: 'Montaje de precisión de tu sistema solar',
            icon: <Zap className="w-6 h-6" />,
            details:
                'Paneles de alta calidad montados con hardware resistente diseñado para durar décadas.',
        },
        {
            title: 'Conexión del Sistema',
            description: 'Integración con tu sistema eléctrico',
            icon: <Wifi className="w-6 h-6" />,
            details: 'Inversores inteligentes conectan tus paneles con seguimiento en tiempo real.',
        },
        {
            title: 'Activación',
            description: 'Pruebas finales y puesta en marcha',
            icon: <CheckCircle className="w-6 h-6" />,
            details: 'Pruebas completas garantizan rendimiento óptimo antes de la entrega.',
        },
    ]

    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
            {/* Animated Waving Lines - Top Section Only */}
            <div className="absolute top-0 left-0 right-0 h-screen pointer-events-none overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 1000 600">
                    {/* Primary waving line - más prominente */}
                    <path
                        d="M0,150 Q250,100 500,150 T1000,150"
                        stroke="#FCD34D"
                        strokeWidth="4"
                        fill="none"
                        className="opacity-25"
                        style={{
                            transform: `translateY(${scrollY * 0.12}px)`,
                        }}
                    >
                        <animate
                            attributeName="d"
                            values="M0,150 Q250,100 500,150 T1000,150;M0,150 Q250,200 500,150 T1000,150;M0,150 Q250,100 500,150 T1000,150"
                            dur="7s"
                            repeatCount="indefinite"
                        />
                    </path>

                    {/* Segunda línea */}
                    <path
                        d="M0,200 Q250,150 500,200 T1000,200"
                        stroke="#FCD34D"
                        strokeWidth="3"
                        fill="none"
                        className="opacity-20"
                        style={{
                            transform: `translateY(${scrollY * 0.1}px)`,
                        }}
                    >
                        <animate
                            attributeName="d"
                            values="M0,200 Q250,150 500,200 T1000,200;M0,200 Q250,250 500,200 T1000,200;M0,200 Q250,150 500,200 T1000,200"
                            dur="8s"
                            repeatCount="indefinite"
                        />
                    </path>

                    {/* Tercera línea */}
                    <path
                        d="M0,250 Q250,200 500,250 T1000,250"
                        stroke="#FCD34D"
                        strokeWidth="2"
                        fill="none"
                        className="opacity-18"
                        style={{
                            transform: `translateY(${scrollY * 0.08}px)`,
                        }}
                    >
                        <animate
                            attributeName="d"
                            values="M0,250 Q250,200 500,250 T1000,250;M0,250 Q250,300 500,250 T1000,250;M0,250 Q250,200 500,250 T1000,250"
                            dur="9s"
                            repeatCount="indefinite"
                        />
                    </path>

                    {/* Cuarta línea */}
                    <path
                        d="M0,300 Q250,250 500,300 T1000,300"
                        stroke="#FCD34D"
                        strokeWidth="2"
                        fill="none"
                        className="opacity-15"
                        style={{
                            transform: `translateY(${scrollY * 0.06}px)`,
                        }}
                    >
                        <animate
                            attributeName="d"
                            values="M0,300 Q250,250 500,300 T1000,300;M0,300 Q250,350 500,300 T1000,300;M0,300 Q250,250 500,300 T1000,300"
                            dur="6s"
                            repeatCount="indefinite"
                        />
                    </path>

                    {/* Quinta línea */}
                    <path
                        d="M0,350 Q250,300 500,350 T1000,350"
                        stroke="#FCD34D"
                        strokeWidth="1.5"
                        fill="none"
                        className="opacity-12"
                        style={{
                            transform: `translateY(${scrollY * 0.04}px)`,
                        }}
                    >
                        <animate
                            attributeName="d"
                            values="M0,350 Q250,300 500,350 T1000,350;M0,350 Q250,400 500,350 T1000,350;M0,350 Q250,300 500,350 T1000,350"
                            dur="11s"
                            repeatCount="indefinite"
                        />
                    </path>

                    {/* Sexta línea */}
                    <path
                        d="M0,400 Q250,350 500,400 T1000,400"
                        stroke="#FCD34D"
                        strokeWidth="1"
                        fill="none"
                        className="opacity-10"
                        style={{
                            transform: `translateY(${scrollY * 0.03}px)`,
                        }}
                    >
                        <animate
                            attributeName="d"
                            values="M0,400 Q250,350 500,400 T1000,400;M0,400 Q250,450 500,400 T1000,400;M0,400 Q250,350 500,400 T1000,400"
                            dur="10s"
                            repeatCount="indefinite"
                        />
                    </path>

                    {/* Séptima línea - más sutil */}
                    <path
                        d="M0,450 Q250,400 500,450 T1000,450"
                        stroke="#FCD34D"
                        strokeWidth="1"
                        fill="none"
                        className="opacity-8"
                        style={{
                            transform: `translateY(${scrollY * 0.02}px)`,
                        }}
                    >
                        <animate
                            attributeName="d"
                            values="M0,450 Q250,400 500,450 T1000,450;M0,450 Q250,500 500,450 T1000,450;M0,450 Q250,400 500,450 T1000,450"
                            dur="12s"
                            repeatCount="indefinite"
                        />
                    </path>

                    {/* Líneas adicionales con diferentes patrones */}
                    <path
                        d="M0,100 Q250,50 500,100 T1000,100"
                        stroke="#FCD34D"
                        strokeWidth="2"
                        fill="none"
                        className="opacity-15"
                        style={{
                            transform: `translateY(${scrollY * 0.15}px)`,
                        }}
                    >
                        <animate
                            attributeName="d"
                            values="M0,100 Q250,50 500,100 T1000,100;M0,100 Q250,150 500,100 T1000,100;M0,100 Q250,50 500,100 T1000,100"
                            dur="5s"
                            repeatCount="indefinite"
                        />
                    </path>

                    {/* Línea con patrón inverso */}
                    <path
                        d="M0,500 Q250,450 500,500 T1000,500"
                        stroke="#FCD34D"
                        strokeWidth="1"
                        fill="none"
                        className="opacity-6"
                        style={{
                            transform: `translateY(${scrollY * 0.01}px)`,
                        }}
                    >
                        <animate
                            attributeName="d"
                            values="M0,500 Q250,550 500,500 T1000,500;M0,500 Q250,450 500,500 T1000,500;M0,500 Q250,550 500,500 T1000,500"
                            dur="13s"
                            repeatCount="indefinite"
                        />
                    </path>
                </svg>

                {/* Fading overlay más suave para acomodar más líneas */}
                <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/80"
                    style={{
                        transform: `translateY(${scrollY * 0.02}px)`,
                    }}
                />
            </div>

            {/* Hero Section */}
            <section className="relative pt-20 pb-20 lg:pb-32">
                <div className="container mx-auto px-4 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1
                            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 mb-6"
                            style={{
                                transform: `translateY(${scrollY * 0.02}px)`,
                            }}
                        >
                            Instalación Profesional de
                            <span className="block font-normal">Paneles Solares</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                            Transforma tu propiedad en una central de energía limpia
                        </p>
                        <Button
                            size="lg"
                            className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-2xl text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            Solicitar Instalación
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Installation Process */}
            <section className="py-20 relative bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                                Proceso de Instalación
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Cuatro pasos simples para tu independencia energética
                            </p>
                        </div>

                        {/* Steps Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            {steps.map((step, index) => (
                                <Card
                                    key={index}
                                    className={`cursor-pointer transition-all duration-500 hover:shadow-lg border-0 bg-gray-50 hover:bg-white ${
                                        activeStep === index
                                            ? 'ring-1 ring-green-500 shadow-lg bg-white scale-105'
                                            : ''
                                    }`}
                                    onClick={() => setActiveStep(index)}
                                >
                                    <CardContent className="p-6 text-center">
                                        <div
                                            className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                                                activeStep === index
                                                    ? 'bg-green-600 text-white'
                                                    : 'bg-white text-gray-600 shadow-sm'
                                            }`}
                                        >
                                            {step.icon}
                                        </div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">{step.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Active Step Details */}
                        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                                {steps[activeStep]?.icon}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                                {steps[activeStep]?.title}
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                                {steps[activeStep]?.details}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-green-50/30 relative">
                <div className="container mx-auto px-4 relative">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                                Ve Tu Energía. Siente Tus Ahorros.
                            </h2>
                            <p className="text-lg text-gray-600">
                                Observa tu generación de energía en tiempo real y ve exactamente
                                cuánto dinero ahorras cada día
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Zap className="w-8 h-8 text-white" />,
                                    title: 'Energía en Vivo',
                                    description: 'Ve cada kilovatio generado en tiempo real',
                                    color: 'bg-green-600',
                                },
                                {
                                    icon: <div className="text-white font-bold text-2xl">$</div>,
                                    title: 'Ahorros Diarios',
                                    description: 'Tu factura eléctrica reduciéndose cada día',
                                    color: 'bg-green-500',
                                },
                                {
                                    icon: <Wifi className="w-8 h-8 text-white" />,
                                    title: 'Control Total',
                                    description: 'Maneja todo desde tu teléfono',
                                    color: 'bg-green-600',
                                },
                            ].map((feature, index) => (
                                <div key={index} className="text-center group">
                                    <div
                                        className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                                    >
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                            ¿Listo para Comenzar?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Programa tu consulta gratuita y da el primer paso hacia la independencia
                            energética
                        </p>
                        <Button
                            size="lg"
                            className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            Obtener Cotización Gratuita
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
