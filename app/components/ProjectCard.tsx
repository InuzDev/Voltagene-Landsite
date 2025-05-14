import type { Project } from "app/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project },) {
   return (
     <Link
       href={`/Projects/${project.slug}`}
       className="block border rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow duration-300 group"
     >
       <div className="relative h-64 overflow-hidden">
         <Image
           src={project.imageUrl || "/placeholder.svg"}
           alt={project.title}
           fill
           className="object-cover transition-transform duration-700 group-hover:scale-105"
         />
       </div>
       <div className="p-6">
         <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">{project.title}</h3>
         <p className="text-zinc-600 mb-6">
           {project.description}
         </p>
         <div className="bg-gray-50 p-3 rounded-md">
           <p className="text-sm text-zinc-700">
             {project.metrics}
           </p>
         </div>
       </div>
     </Link>
   )
 }