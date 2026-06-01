import { SectionHeading } from './About'

const CATEGORIES = [
  {
    title: 'Cloud & Infrastructure',
    icon: '☁️',
    skills: ['GCP', 'AWS', 'On-Prem', 'Cloud DNS', 'Cloud Storage', 'Pub/Sub'],
  },
  {
    title: 'Containers & Orchestration',
    icon: '🐳',
    skills: ['Docker', 'Kubernetes'],
  },
  {
    title: 'CI/CD & Automation',
    icon: '⚙️',
    skills: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'Ansible'],
  },
  {
    title: 'IaC',
    icon: '🏗️',
    skills: ['Terraform'],
  },
  {
    title: 'Monitoring & Observability',
    icon: '📊',
    skills: ['Prometheus', 'Grafana', 'Datadog', 'Splunk', 'Pingdom'],
  },
  {
    title: 'Networking & Proxy',
    icon: '🔀',
    skills: ['Nginx', 'HAProxy', 'Kong Gateway', 'GCP ALB', 'GCP NLB', 'WAF'],
  },
  {
    title: 'Databases & Messaging',
    icon: '🗄️',
    skills: ['MySQL', 'Redis', 'RabbitMQ', 'Elasticsearch'],
  },
  {
    title: 'Languages & Scripting',
    icon: '💻',
    skills: ['Python', 'Shell / Bash'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0a0f1e]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="02" title="Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.map(cat => (
            <div
              key={cat.title}
              className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-5 hover:border-teal-500/50 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{cat.icon}</span>
                <h3 className="text-white font-semibold text-sm">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-teal-500/10 text-teal-400 text-xs font-mono rounded border border-teal-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
