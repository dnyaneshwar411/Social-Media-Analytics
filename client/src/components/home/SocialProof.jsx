import Image from 'next/image'

const clients = [
  { name: "TechCorp", logo: "/placeholder.svg?height=60&width=120" },
  { name: "InnovateCo", logo: "/placeholder.svg?height=60&width=120" },
  { name: "FutureTech", logo: "/placeholder.svg?height=60&width=120" },
  { name: "NextGen", logo: "/placeholder.svg?height=60&width=120" },
  { name: "SmartSolutions", logo: "/placeholder.svg?height=60&width=120" }
]

export default function SocialProof() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Team Member </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((client, index) => (
            <div key={index} className="w-40 h-20 flex items-center justify-center">
              <Image src={client.logo} alt={client.name} width={120} height={60} className="max-w-full max-h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

