import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "Go", "SQL", "HTML/CSS"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Express", "Vue.js", "TailwindCSS", "Redux", "GraphQL"],
  },
  {
    category: "Databases & Technologies",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS", "Git", "CI/CD"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A comprehensive toolkit built through years of hands-on experience and continuous learning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skillsData.map((category) => (
              <Card key={category.category} className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
