import { projects } from "app/lib/const"
import { ArrowRight, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProyectosPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Solar panels installation"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4">Proyectos</h1>
          <p className="text-lg md:text-xl font-light max-w-2xl opacity-90">
            Instalaciones solares de alta calidad que transforman la manera en que nuestros clientes consumen energía.
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
      <section className="bg-zinc-900 py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-light mb-6">Proyecto Destacado</h2>
              <h3 className="text-4xl font-light mb-8">Residencia Privada en Valle del Sol</h3>
              <p className="text-zinc-300 mb-6">
                Una instalación residencial de alto rendimiento que combina estética y funcionalidad. Con un sistema de
                25kWp, esta instalación proporciona energía limpia para toda la propiedad, reduciendo la huella de
                carbono y los costos energéticos.
              </p>
              <ul className="space-y-4 mb-8 text-zinc-300">
                <li className="flex items-center">
                  <span className="w-40 text-zinc-500">Capacidad</span>
                  <span>25.5 kWp</span>
                </li>
                <li className="flex items-center">
                  <span className="w-40 text-zinc-500">Paneles</span>
                  <span>60 unidades</span>
                </li>
                <li className="flex items-center">
                  <span className="w-40 text-zinc-500">Ahorro anual</span>
                  <span>$4,800 USD</span>
                </li>
                <li className="flex items-center">
                  <span className="w-40 text-zinc-500">Reducción CO₂</span>
                  <span>18 toneladas/año</span>
                </li>
              </ul>
              <Link
                href="/proyectos/valle-del-sol"
                className="inline-flex items-center text-white border-b border-white pb-1 hover:text-green-400 hover:border-green-400 transition-colors"
              >
                Ver proyecto completo <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="md:w-1/2 relative h-[400px] md:h-auto">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Residencia Privada en Valle del Sol"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto px-4 py-32 text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-8">¿Listo para tu proyecto solar?</h2>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-12">
          Nuestro equipo de expertos está listo para diseñar una solución personalizada que se adapte a tus necesidades
          energéticas y estéticas.
        </p>
        <Link
          href="/contacto"
          className="inline-flex items-center bg-white text-black px-8 py-4 text-lg hover:bg-green-400 transition-colors"
        >
          Contactar ahora <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>
    </main>
  )
}

// Project Card Component
function ProjectCard({ project }: any) {
  return (
    <Link href={`/proyectos/${project.slug}`} className="group">
      <div className="relative h-[400px] overflow-hidden mb-6">
        <Image
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-light">{project.title}</h3>
        <div className="flex items-center text-sm text-zinc-500 pt-2">
          <span className="mr-6">{project.metrics}</span>
        </div>
      </div>
    </Link>
  )
}

// // Sample project data
// const projects = [
//   {
//     id: 1,
//     title: "Residencia Moderna",
//     slug: "residencia-moderna",
//     location: "San José, Costa Rica",
//     capacity: "11.00 kWp",
//     panels: "40",
//     imageUrl: "/placeholder.svg?height=600&width=800",
//     type: "Residencial",
//   },
//   {
//     id: 2,
//     title: "Estación de Servicio",
//     slug: "estacion-servicio",
//     location: "Alajuela, Costa Rica",
//     capacity: "17.05 kWp",
//     panels: "35",
//     imageUrl: "/placeholder.svg?height=600&width=800",
//     type: "Comercial",
//   },
//   {
//     id: 3,
//     title: "Residencia Rural",
//     slug: "residencia-rural",
//     location: "Guanacaste, Costa Rica",
//     capacity: "250 kWp",
//     panels: "10",
//     imageUrl: "/placeholder.svg?height=600&width=800",
//     type: "Residencial Rural",
//   },
//   {
//     id: 4,
//     title: "Centro Comercial",
//     slug: "centro-comercial",
//     location: "Heredia, Costa Rica",
//     capacity: "75.5 kWp",
//     panels: "150",
//     imageUrl: "/placeholder.svg?height=600&width=800",
//     type: "Comercial",
//   },
//   {
//     id: 5,
//     title: "Complejo Industrial",
//     slug: "complejo-industrial",
//     location: "Limón, Costa Rica",
//     capacity: "120 kWp",
//     panels: "240",
//     imageUrl: "/placeholder.svg?height=600&width=800",
//     type: "Industrial",
//   },
//   {
//     id: 6,
//     title: "Hotel Boutique",
//     slug: "hotel-boutique",
//     location: "Puntarenas, Costa Rica",
//     capacity: "45 kWp",
//     panels: "90",
//     imageUrl: "/placeholder.svg?height=600&width=800",
//     type: "Comercial",
//   },
// ]
