// We need to make a database that manage this, also a CMS to manage the content
// This is a static data, we can use a database to manage this, but for now
// we will use a static data

// this also going to be updated for a more automated way.

export const Projects = [
   {
      id: 1,
      slug: "Instalacion-residencial",
      title: "Instalación fotovoltaica residencial",
      description:
         "Sistema solar eficiente y discreto, perfectamente integrado en un techo de aluzinc con inclinación natural óptima. Ideal para hogares que buscan reducir su factura eléctrica sin comprometer la estética.",
      power: 11.00,
      metrics: "Sistema de 11.00 kWp",
      imageUrl: "/Instalacion-proyecto-residencial.png?height=600&width=800",
   },
      {
      id: 2,
      slug: "Instalacion-laboratorio-patologia",
      title: "Instalación fotovoltaica de Alta Eficiencia",
      description: "En un edificio clínico de tres niveles, diseñamos e instalamos un sistema fotovoltaico con inyección a la red, cuidadosamente adaptado a los estándares energéticos y arquitectónicos de un laboratorio de alto perfil. Gracias a la amplitud del techo, fue posible integrar todos los componentes del sistema —módulos solares, inversores, estructuras y canalización de forma estratégica y sin comprometer el espacio útil ni la estética del entorno. El sistema se implementó con un enfoque de máxima eficiencia, permitiendo aprovechar al 100% la captación solar disponible. Integración estética y tecnológica: Desde la vía pública, el sistema se mantiene visualmente discreto, respetando la imagen institucional del edificio sin renunciar a una solución energética moderna y sostenible. Este proyecto combina rendimiento técnico, diseño inteligente y compromiso ambiental, ofreciendo al cliente un retorno energético visible con una presencia arquitectónica invisible",
      power: 58,
      metrics: "Sistema de 58 kWp",
      imageUrl: "/laboratorio-patologia.jpeg?height=600&width=800",
   },
   {
      id: 3,
      slug: "Instalacion-residencial-rural",
      title: "Instalación fotovoltaica residencial rural",
      description:
         "Solución energética eficiente para zonas rurales. Instalación sobre techo de concreto con inyección a la red, perfecta para garantizar autonomía eléctrica en hogares alejados del centro urbano.",
      power: 5.5,
      metrics: "Sistema de 5.5 kWp",
      imageUrl: "/whiteHome.png?height=600&width=800",
   },
   {
      id: 4,
      slug: "residencial-tejas",
      title: "Instalación fotovoltaica residencial",
      description:
         "Sistema solar conectado a la red sobre techo de tejas, ideal para viviendas tradicionales que buscan modernizarse con energía renovable y elegante integración arquitectónica.",
      power: 9.12,
      metrics: "Sistema de 9.12 kWp",
      imageUrl: "/FamHome.png?height=600&width=800",
   },
   {
      id: 5,
      slug: "sistema-hibrido-residencial",
      title: "Sistema híbrido residencial",
      description:
         "Innovador sistema híbrido con baterías y conexión a la red. Ofrece respaldo eléctrico constante y mayor autonomía, instalado con estructura de alto perfil para máxima captación solar.",
      power: 8.25,
      metrics: "Sistema de 8.25 kWp",
      imageUrl: "/Residential-Installation.png?height=600&width=800",
   },
   {
      id: 6,
      slug: "instalacion-15kwp",
      title: "Proyecto con 15.4 kWp",
      description:
         "Instalación de gran capacidad energética en techo de aluzinc, diseñada para optimizar el rendimiento con una estructura discreta de perfil bajo. Ideal para hogares o empresas con alta demanda eléctrica.",
      power: 15.40,
      metrics: "Sistema de 15.40 kWp",
      imageUrl: "/Project15KwP.png?height=600&width=800",
   },
   {
      id: 7,
      slug: "instalacion-rural-aluzinc",
      title: "Instalación rural en aluzinc",
      description:
         "Solución energética confiable para entornos rurales. Sistema conectado a la red montado sobre techo de aluzinc, diseñado para garantizar eficiencia energética con bajo mantenimiento.",
      power: 5.8,
      metrics: "Sistema de 5.8 kWp",
      imageUrl: "/BlueHouse.jpg?height=600&width=800",
   },
   {
      id: 8,
      slug: "sistema-fotovoltaico-doble-viviendas-independientes",
      title: "Sistema Fotovoltaico Doble para Viviendas Independientes",
      description: "Instalación de generación fotovoltaica en edificio residencial, compuesta por dos sistemas completamente independientes, diseñados para abastecer energéticamente a dos hogares distintos. Cada uno cuenta con una capacidad instalada de 8.12 kWp, permitiendo una operación autónoma y eficiente en cada residencia. La estructura empleada incluye perfil estructural de tipo alto y tornillería de acero inoxidable, seleccionados por su resistencia mecánica y durabilidad ante condiciones ambientales adversas. El diseño del conjunto favorece la integración arquitectónica mediante una configuración discreta y de bajo impacto visual. Este enfoque técnico garantiza robustez estructural, eficiencia en la captación solar y una solución estética que armoniza con el entorno residencial.",
      power: 16.24,
      metrics: "2 Sistema de 8.12 kWp (16.24 kWp total)",
      imageUrl: '/sistema-fotovoltaico-doble.jpeg?height=600&width=800',
   },
   {
      id: 9,
      slug: "incremento-estrategico-inyeccion-red",
      title: "Incremento Estratégico de Inyección a la Red – 29.5 kWp para Empresa Comercial de Alto Prestigio",
      description: 
         "En el marco de su compromiso continuo con la sostenibilidad y la eficiencia operativa, se implementó una ampliación de 29.5 kWp al sistema fotovoltaico de una reconocida empresa comercial con décadas de liderazgo en su sector. La instalación se realizó con una configuración técnica discreta que preserva la estética de sus infraestructuras. Gracias a un diseño meticulioso y a una ubicación estratégica en cubierta, el sistema se integra de forma prácticamente imperceptible, sin alterar la imagen corporativa ni el entorno visual de las instalaciones. Esta expansión permite una mayor inyección de energía limpia a la red, optimizando el autoconsumo y generando excedentes que refuerzan el compromiso ambiental de la empresa ante sus clientes, socios y la comunidad",
      power: 29.5,
      metrics: "Sistema de 29.5 kWp",
      imageUrl: '/Industrial-solar-installation.JPG?height=600&width=800',
   },
   {
      id: 10,
      slug: "Instalacion-comercial",
      title: "Instalación comercial",
      description:
         "Instalación fotovoltaica con paneles de última generación en una estación de combustible con lavadero. Ideal para negocios que desean optimizar su consumo energético y reducir costos operativos.",
      power: 17.05,
      metrics: "Sistema de 17.05 kWp",
      imageUrl: "/GasStation.png?height=600&width=800",
   },
   {
      id: 11,
      slug: 'instalacion-residencial-premium',
      title: 'Instalación en un edificio residencial con un sistema fotovoltaico de inyección de lujo de 8.25 kWp',
      description: "Sistema fotovoltaico de inyección a la red sobre edificio residencial de lujo de 8.25 kWp, estructura de aluminio anodizado y tornillería inoxidable en bajo perfil, instalación muy discreta y eficiente",
      power: 8.25,
      metrics: 'Sistema de 8.25 kWp',
      imageUrl: '/ResidentialMares.JPEG?height=600&width=800'
   },
   {
      id: 12,
      slug: 'instalacion-residencial',
      title: 'Instalación residencial con un sistema de inyección a la red de 9.35 kWp',
      description: 'Sistema fotovoltaico inyección a la red de 9.35 kWp, estructura de aluminio anodizado y tornillería inoxidable en bajo perfil, sobre techo de concreto en zona residencial',
      power: 9.35,
      metrics: 'Sistema de 9.35 kWp',
      imageUrl: '/RedInjection9.35.JPG?height=600&width=800'
   }
]

    // Services data
    export const ServicesProps = [
        {
            id: 1,
            title: 'Instalación Solar',
            description:
                'Instalación profesional de paneles solares de alta eficiencia para propiedades residenciales y comerciales.',
            image: '/Modern-home.jpg?height=400&width=600',
            features: [
                'Diseño personalizado del sistema',
                'Paneles de primera calidad',
                'Instalación por expertos',
                'Cobertura de garantía',
            ],
            url: '/Panel-installation',
        },
        {
            id: 2,
            title: 'Limpieza de Paneles',
            description:
                'Servicios regulares de mantenimiento y limpieza para asegurar que tus paneles solares funcionen al máximo rendimiento.',
            image: '/Solar-Cleaning-2.jpg?height=400&width=600',
            features: [
                'Mayor eficiencia',
                'Prolonga la vida útil de los paneles',
                'Mantenimiento programado',
                'Monitoreo del rendimiento',
            ],
            // url: '/Panel-cleaning',
            url: '/WIP',
        },
        {
            id: 3,
            title: 'Remodelación del Sistema',
            description:
                'Actualización y remodelación de sistemas solares existentes para mejorar el rendimiento y la producción de energía.',
            image: '/Remodeling-system.png?height=400&width=600',
            features: [
                'Evaluación del sistema',
                'Actualización tecnológica',
                'Ampliación de capacidad',
                'Optimización del rendimiento',
            ],
            // url: '/System-remodelation',
            url: '/WIP',
        },
    ]

// We need to fix this issue, since we have been working on a fix fo the E-mail. The E-mail doesn't receive the label data selected.
export const Distributor = [
   { id: 'EDENORTE', label: 'Edenorte' },
   { id: 'EDESUR', label: 'Edesur' },
   { id: 'EDEESTE', label: 'Edeeste' },
   { id: 'LUZ_Y_FUERZA', label: 'Luz y Fuerza' },
   { id: 'CPEM', label: 'CPEM' },
   { id: 'ANOTHER', label: 'Otra' },
]

// Going to uncomment the other props when we properly design and configure the other parts.


// this going to be update soon.
export const SliderProps = [
   // {
   //    type: "image" as const,
   //    src: "/BlueHouse.jpg?height=1080&width=1920",
   //    alt: 'Main Project image'
   // },
   // {
   //    type: "video" as const,
   //    src: "/CleaningAndMaintenance.mp4?height=1080&width=1920",
   //    alt: "Maintenance video"
   // },
   {
      type: "video" as const,
      src: "/VoltagenePresentationVideo.webm?height=1080&width=1920",
      alt: "Video Presentatin of Voltagene SRL"
   }
]

