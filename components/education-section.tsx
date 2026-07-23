const education = [
  {
    degree: "M.S. in Artificial Intelligence / Machine Learning",
    school: "University of Michigan",
    period: "2023 – 2025",
    detail: "GPA 3.5",
  },
  {
    degree: "B.S. in Computer Science",
    school: "Wayne State University",
    period: "2018 – 2022",
    detail: "GPA 3.5",
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-6 py-16 scroll-mt-14">
      <p className="text-sm font-medium tracking-widest uppercase text-primary/70 mb-2">Education</p>
      <h2 className="font-serif text-3xl font-semibold text-primary mb-10">Degrees</h2>

      <div className="space-y-6">
        {education.map((item) => (
          <div key={item.degree} className="sm:grid sm:grid-cols-[180px_1fr] sm:gap-8">
            <span className="text-sm text-muted-foreground block mb-1 sm:mb-0">{item.period}</span>
            <div>
              <h3 className="font-medium text-foreground">{item.degree}</h3>
              <p className="text-[15px] text-muted-foreground">
                {item.school} · {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
