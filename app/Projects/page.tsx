import ProjectCard from 'app/components/ProjectCard'
import { projects } from 'app/lib/const'
import type { Project } from 'app/lib/utils'
import { ArrowRight, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const featuredProject: Project = projects.reduce((max, project) =>
    project.power > max.power ? project : max
)
const panels = featuredProject.metrics.split('|')[1]?.trim() ?? 'N/D'

export default function ProyectosPage() {
    return (
        <main className="bg-white text-zinc-900 min-h-screen">
            <section className="relative w-full h-screen overflow-hidden">
                {/* Imagen de fondo */}
                <Image
                    src="/Industrial-muelle-installation-2.jpg"
                    alt="Solar panels installation"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Capa oscura encima de la imagen */}
                <div className="absolute inset-0 bg-black/25 z-10" />

                {/* Contenido encima de la capa oscura */}
                <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-end pb-16">
                    <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4 text-gray-200">
                        Proyectos
                    </h1>
                    <p className="text-lg md:text-xl font-light max-w-2xl text-white/90">
                        Instalaciones solares de alta calidad que transforman la manera en que
                        nuestros clientes consumen energía.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="container mx-auto px-4 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>

            {/* Featured Project */}
            <section className="bg-gray-50 py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-light mb-6">Proyecto Destacado</h2>
                            <h3 className="text-4xl font-light mb-8">{featuredProject.title}</h3>
                            <p className="text-zinc-600 mb-6">{featuredProject.description}</p>
                            <ul className="space-y-4 mb-8 text-zinc-600">
                                <li className="flex items-center">
                                    <span className="w-40 text-zinc-400">Capacidad</span>
                                    <span>{featuredProject.power} kWp</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-40 text-zinc-400">Paneles</span>
                                    <span>{panels}</span>
                                </li>
                                {/* this information is hidden */}
                                {/* <li className="flex items-center">
                        <span className="w-40 text-zinc-400">Ahorro anual</span>
                        <span>$4,800 USD</span>
                    </li>
                    <li className="flex items-center">
                        <span className="w-40 text-zinc-400">Reducción CO₂</span>
                        <span>18 toneladas/año</span>
                    </li> */}
                            </ul>
                            <Link
                                href="/Projects/Instalacion-comercial"
                                className="inline-flex items-center text-green-600 border-b border-green-600 pb-1 hover:text-green-700 hover:border-green-700 transition-colors"
                            >
                                Ver proyecto completo <ChevronRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                        <div className="md:w-1/2 relative h-[400px] md:h-auto">
                            <Image
                                src="/GasStation.png?height=800&width=600"
                                alt="Estación de Gasolina y Lavadero"
                                fill
                                className="object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="container mx-auto px-4 py-32 text-center">
                <h2 className="text-4xl md:text-5xl font-semibold mb-8">
                    ¿Listo para tu proyecto solar?
                </h2>
                <p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-12">
                    Nuestro equipo de expertos está listo para diseñar una solución personalizada
                    que se adapte a tus necesidades energéticas y estéticas.
                </p>
                <Link
                    href="/Contact"
                    className="inline-flex items-center px-8 py-4 text-lg transition-colors rounded-4xl bg-green-800 hover:bg-green-900 text-white"
                >
                    Contactar ahora <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </section>
        </main>
    )
}
