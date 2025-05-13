import { projects } from "app/lib/projects"
import { ArrowLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type ProjectParams = {
   params: {
      slug: string
   }
}

export async function generateStaticParams() {
   return projects.map(project => ({slug: project.slug}))
}

export default async function ProjectDetailPage({ params }: ProjectParams) {
   // find the project from the json
   const project = projects.find(p => p.slug === params.slug)

   if (!project) return <h1>Proyecto no encontrado.</h1> 

  return (
    <main className="bg-white text-zinc-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <Image
          src={project.imageURL || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <Link
            href="/proyectos"
            className="inline-flex items-center text-white mb-8 hover:text-green-400 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver a proyectos
          </Link>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4 text-white">{project.title}</h1>
        </div>
      </section>

      {/* Project Details */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-light mb-8">Descripción del Proyecto</h2>
            <p className="text-zinc-600 mb-8">{project.description}</p>
            <p className="text-zinc-600 mb-12">
              La instalación se realizó en un techo de aluzinc con inclinación natural óptima, maximizando la captación
              solar durante todo el año. El sistema está conectado a la red eléctrica, permitiendo la inyección de
              excedentes y generando ahorros significativos en la factura eléctrica.
            </p>

            <h2 className="text-3xl font-light mb-8">Galería</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative h-[300px] shadow-sm">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Imagen ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gray-50 p-8 shadow-sm">
              <h3 className="text-xl font-light mb-6">Detalles Técnicos</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center justify-between">
                  <span className="text-zinc-400">Capacidad</span>
                  <span>{project.capacity}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-zinc-400">Paneles</span>
                  <span>{project.panels} unidades</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-zinc-400">Producción anual</span>
                  <span>{project.yearlyProduction}</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-light mb-6">¿Interesado en un proyecto similar?</h3>
              <Link
                href="/contacto"
                className="inline-flex items-center text-green-600 border-b border-green-600 pb-1 hover:text-green-700 hover:border-green-700 transition-colors"
              >
                Contactar ahora <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-12">Proyectos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((id) => (
              <Link key={id} href={`/proyectos/proyecto-${id}`} className="group">
                <div className="relative h-[300px] overflow-hidden mb-6 shadow-sm">
                  <Image
                    src={`/placeholder.svg?height=600&width=800`}
                    alt={`Proyecto relacionado ${id}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-light">Proyecto Residencial {id}</h3>
                  <p className="text-zinc-500">San José, Costa Rica</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
