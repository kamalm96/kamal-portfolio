import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Professional Experience</h2>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-l-4 border-l-blue-600 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <div>
                  <CardTitle className="text-xl md:text-2xl">Software Engineer</CardTitle>
                  <CardDescription>Ford Motor Company</CardDescription>
                </div>
                <Badge className="w-fit bg-blue-600">Jan 2025 - Present</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Led the design and development of a Golang-based backend system that monitored anomalous spending and
                  escalated issues to team leads.
                </li>
                <li>Leveraged Redis Queues to efficiently track resolution and escalation processes.</li>
                <li>Collaborated with cross-functional teams to create and implement necessary APIs.</li>
                <li>Delivered an estimated annual savings of approximately $2 million for Ford.</li>
                <li>Received recognition from upper management.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <div>
                  <CardTitle className="text-xl md:text-2xl">Junior Software Engineer</CardTitle>
                  <CardDescription>Ford Motor Company</CardDescription>
                </div>
                <Badge className="w-fit bg-blue-500">Jan 2023 - Dec 2024</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Led the development of a Solution Catalog, which centralized templates and enhanced onboarding
                  efficiency by 40%.
                </li>
                <li>
                  Engineered the automation of API publication to Apigee via Azure WIF, conserving 20% of developer
                  time.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-400 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <div>
                  <CardTitle className="text-xl md:text-2xl">Entry-Level Software Engineer</CardTitle>
                  <CardDescription>Ford Motor Company</CardDescription>
                </div>
                <Badge className="w-fit bg-blue-400">Jun 2022 - Dec 2023</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Developed and launched three scalable web applications using React, Java Spring Boot, and PostgreSQL,
                  setting new benchmarks in production standards.
                </li>
                <li>Implemented CI/CD pipelines with Jenkins, cutting deployment times by 70%.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

