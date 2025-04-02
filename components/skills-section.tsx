import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SkillsSection() {
  const skills = {
    "Programming Languages/Concepts": [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "PostgreSQL",
      "SQL",
      "Golang",
      "Data Structures and Algorithms",
    ],
    "Machine Learning": ["Predictive modeling", "Deep learning", "XGBoost", "Ensemble Methods"],
    "Frameworks and Tools": ["TensorFlow", "PyTorch", "React", "Backstage", "Docker", "Podman", "WSL", "Linux"],
    "Soft Skills": ["Communication", "Team Collaboration", "Agile Methodologies", "Github", "GCP", "Azure", "AWS"],
  }

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card key={category} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-slate-200 text-slate-800 hover:bg-slate-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

