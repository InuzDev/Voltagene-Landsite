// fix this issue, since this isn't working properly

import { Projects } from 'app/lib/const'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type ProjectParams = {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    return [Projects.map((project) => ({ slug: project.slug }))]
}

export default async function ProjectDetailPage({ params }: ProjectParams) {
    // find the project from the json
    const _project = Projects.find((p) => p.slug === params.slug)

    if (!_project) return <h1>Proyecto no encontrado.</h1>

    return (
        <main className="bg-white text-zinc-900 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-10" />
                <Image
                    src={_project.imageUrl || '/placeholder.png'}
                    alt={_project.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-end pb-16">
                    <Link
                        href="/Projects"
                        className="inline-flex items-center text-white mb-8 hover:text-green-400 transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Volver a proyectos
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4 text-gray-200">
                        {_project.title}
                    </h1>
                </div>
            </section>

            {/* Project Details */}
            <section className="container mx-auto px-4 py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-light mb-8">Descripción del Proyecto</h2>
                        <p className="text-zinc-600 mb-8">{_project.description}</p>
                    </div>

                    <div>
                        {/* work with the metrics, or separate them into three informations. */}
                        <div className="bg-gray-50 p-8 shadow-sm">
                            <h3 className="text-xl font-light mb-6">Detalles Técnicos</h3>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center justify-between">
                                    <span className="text-zinc-400">Información general</span>
                                    <span>{_project.metrics}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-light mb-6">
                                ¿Interesado en un proyecto similar?
                            </h3>
                            <Link
                                href="/Contact"
                                className="inline-flex items-center text-green-600 border-b border-green-600 pb-1 hover:text-green-700 hover:border-green-700 transition-colors"
                            >
                                Contactar ahora <ChevronRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
