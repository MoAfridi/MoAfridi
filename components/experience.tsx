import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    period: "2024 - Present",
    role: "CO-Founder",
    company: "Brightyouth Academy",
    description:
      "Co-founding and building an innovative e-tech platform focused on youth education and development. Leading technology strategy and platform architecture.",
  },
  {
    period: "2024 - Present",
    role: "Founder & CEO",
    company: "Promohive Venture",
    description:
      "Founded and leading a full-service marketing agency. Driving business strategy, client relationships, and delivering comprehensive digital marketing solutions.",
  },
]

const education = [
  {
    period: "2023 - Present",
    degree: "Bachelor of Science in Computer Science",
    institution: "Green University of Bangladesh",
    description:
      "Currently pursuing degree in Computer Science, focusing on software engineering and modern web technologies.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-16">
          {/* Experience */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-l-4 border-l-foreground">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-l-4 border-l-foreground">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{edu.period}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
