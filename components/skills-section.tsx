const skills = {
  Languages: ["Go", "Python", "Java", "JavaScript", "TypeScript", "SQL"],
  "AI / ML": [
    "LLMs",
    "AI Agents",
    "Google ADK",
    "Agent Engine",
    "Google Cloud Datastores",
    "Vertex AI",
    "LangChain",
    "TensorFlow",
    "PyTorch",
  ],
  "Cloud & DevOps": [
    "GCP (Cloud Run, Cloud SQL, BigQuery, Cloud Scheduler, VPC-SC, IAM)",
    "AWS",
    "Azure",
    "Terraform",
    "Docker",
    "GitHub Actions",
    "CI/CD",
  ],
  "Tools & Frameworks": ["React", "Backstage", "Apigee", "PostgreSQL", "Linux", "WSL", "Podman"],
}

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-16 scroll-mt-14">
      <p className="text-sm font-medium tracking-widest uppercase text-primary/70 mb-2">Skills</p>
      <h2 className="font-serif text-3xl font-semibold text-primary mb-10">What I work with</h2>

      <div className="space-y-8">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category} className="sm:grid sm:grid-cols-[180px_1fr] sm:gap-8">
            <h3 className="text-sm font-medium text-foreground mb-3 sm:mb-0 sm:pt-1">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {list.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
