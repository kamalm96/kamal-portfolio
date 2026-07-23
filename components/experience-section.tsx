const roles = [
  {
    title: "Machine Learning Engineer, Agentic AI Team",
    period: "Jun 2024 – Present",
    bullets: [
      "Led discovery on Ford's Application Agent in collaboration with Google's Gemini Enterprise team, evaluating Agent Engine capabilities for autonomous employee support workflows.",
      "Deployed agents to Google Agent Engine via Apigee, using Google ADK with Cloud Datastores, tool abstractions, and multi-step reasoning to autonomously resolve internal support tickets.",
      "Built a reusable, templatized CI/CD pipeline in GitHub Actions — single-file configuration that other teams adopt by referencing the shared repository.",
      "Provisioned service accounts, coordinated VPC Service Controls exceptions with Ford's security team, and managed IAM permissions for secure GCP deployments.",
      "Delivered technical findings and POC recommendations to stakeholders, collaborating directly with a Google engineer to define next steps.",
    ],
  },
  {
    title: "Escalation Engine — Sole Owner & Developer",
    period: "2022 – Present",
    bullets: [
      "Production platform ingesting API data and triggering automated multi-level escalations across management hierarchies based on configurable patterns — originally anomaly detection, now supporting additional escalation types with other teams onboarding their own workflows.",
      "Architected end-to-end in Go with Cloud SQL (Postgres), deployed via Terraform to GCP Cloud Run + Cloud Scheduler with fully automated CI/CD and comprehensive test coverage.",
      "Drove anomaly resolution rates from ~15% to a sustained 98%, delivering over $6M/year in verified operational savings.",
    ],
  },
  {
    title: "Software Engineer — Backend Systems",
    period: "Jun 2022 – Jun 2024",
    bullets: [
      "Built a GCP observability microservice using Cloud Asset Inventory to ingest organization-wide asset snapshots into BigQuery daily, enabling teams to link internal outages to upstream GCP disruptions.",
      "Implemented caching strategies to eliminate redundant manager lookups, significantly reducing upstream API calls and improving throughput.",
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-16 scroll-mt-14">
      <p className="text-sm font-medium tracking-widest uppercase text-primary/70 mb-2">Experience</p>
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-10">
        <h2 className="font-serif text-3xl font-semibold text-primary">Ford Motor Company</h2>
        <span className="text-sm text-muted-foreground">Jun 2022 – Present</span>
      </div>

      <div className="space-y-12">
        {roles.map((role) => (
          <div key={role.title} className="sm:grid sm:grid-cols-[180px_1fr] sm:gap-8">
            <div className="mb-3 sm:mb-0">
              <span className="text-sm text-muted-foreground">{role.period}</span>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-3">{role.title}</h3>
              <ul className="space-y-2.5">
                {role.bullets.map((bullet, i) => (
                  <li key={i} className="text-[15px] leading-relaxed text-muted-foreground pl-4 relative">
                    <span className="absolute left-0 top-[0.7em] h-1 w-1 rounded-full bg-primary/50" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
