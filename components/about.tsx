import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 border-t">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate software engineer with a deep love for building robust, scalable applications. My
                journey in tech began with a curiosity for how things work under the hood, and it has evolved into a
                career focused on creating meaningful digital experiences.
              </p>
              <p>
                I specialize in full-stack development with a strong emphasis on modern JavaScript frameworks, cloud
                architecture, and best practices in software engineering. I believe in writing clean, maintainable code
                and continuously improving my craft.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, exploring new technologies, or
                sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          <div className="relative h-[500px] rounded-xl overflow-hidden border shadow-lg">
            <Image
              src="/images/whatsapp-20image-202025-09-13-20at-208.jpeg"
              alt="Creative profile photo with artistic mural"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
