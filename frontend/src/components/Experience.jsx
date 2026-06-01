import { SectionHeading } from './About'

const EXPERIENCES = [
  {
    company: 'UKG',
    role: 'Lead Site Reliability Engineer',
    duration: 'Nov 2024 – Present',
    location: 'Noida, India',
    bullets: [
      'Migrated 8 environments from private cloud to GCP, architecting solutions using GCP ALB, NLB, Cloud DNS, WAF, Filestore, Cloud Storage, and Pub/Sub.',
      'Spearheaded large-scale data migration (500TB+) with minimal downtime, ensuring data consistency and security.',
      'Implemented GCP-based disaster recovery (DR) strategies with automated failover and backup policies.',
      'Automated infrastructure provisioning and configuration management using Terraform and Ansible, reducing deployment time by 70% via GitHub Actions.',
      'Deployed highly available Redis and RabbitMQ clusters with stunnel encryption, replication, and automated failover.',
      'Configured end-to-end observability using Splunk (logs), Datadog (infrastructure/APM), and Pingdom (uptime); built custom Grafana dashboards for proactive issue detection.',
      'Managed reverse proxy configurations using Nginx/HAProxy for secure routing, redirects, and upstream health checks.',
      'Conducted RCA and implemented preventive fixes to reduce repeat incidents and improve service reliability.',
    ],
    tech: ['GCP', 'Terraform', 'Ansible', 'GitHub Actions', 'Redis', 'RabbitMQ', 'Datadog', 'Splunk', 'Grafana', 'Nginx', 'HAProxy'],
    awards: ['🥇 Gold Award — End-to-end GCP migration (7 environments)', '🥇 Gold Award — Disaster Recovery on GCP'],
  },
  {
    company: 'Infosys',
    role: 'Senior DevOps Engineer',
    duration: 'Nov 2020 – Nov 2024',
    location: 'Bangalore, India',
    bullets: [
      'Designed and implemented CI/CD pipelines for applications using GitLab CI/CD, automating build, test, and deployment processes.',
      'Automated infrastructure provisioning with Terraform, reducing new resource deployment time by 30%.',
      'Containerized and orchestrated applications using Docker and Kubernetes, ensuring scalability, HA, and fault tolerance.',
      'Automated configuration management with Ansible to streamline server provisioning and deployments.',
      'Implemented monitoring and logging using Prometheus and Grafana, reducing infrastructure costs by 15%.',
      'Integrated applications with Kong Gateway for authentication via reverse-proxy.',
      'Automated repetitive operational tasks using Python and Shell scripting.',
    ],
    tech: ['Kubernetes', 'Docker', 'Terraform', 'Ansible', 'GitLab CI', 'Prometheus', 'Grafana', 'Kong', 'Python', 'Shell'],
    awards: [
      '🥈 Silver Award — GCP migration incl. largest EU environment',
      '🥈 Silver Award — DBA automation (accelerated change delivery)',
      '🥈 Silver Award — Production incident resolution & ops streamlining',
      '🥈 Silver Award — GCP migration work',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0d1526]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="03" title="Experience" />

        <div className="space-y-6">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-8 border-l-2 border-slate-700 hover:border-teal-500/60 transition-colors duration-300"
            >
              <div className="absolute -left-[9px] top-5 w-4 h-4 bg-teal-400 rounded-full shadow-[0_0_12px_rgba(20,184,166,0.5)]" />

              <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-6 hover:border-teal-500/30 transition-colors">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                  <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                  <span className="text-slate-500 text-sm font-mono whitespace-nowrap">{exp.duration}</span>
                </div>
                <p className="text-teal-400 font-medium mb-0.5">{exp.company}</p>
                <p className="text-slate-500 text-sm mb-4">{exp.location}</p>

                <ul className="space-y-2 mb-4">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="text-slate-400 text-sm flex gap-2">
                      <span className="text-teal-600 mt-0.5 flex-shrink-0">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Awards */}
                {exp.awards && (
                  <div className="mb-4 space-y-1">
                    {exp.awards.map((award, i) => (
                      <p key={i} className="text-slate-400 text-xs">{award}</p>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map(t => (
                    <span key={t} className="px-2 py-0.5 bg-teal-500/10 text-teal-400/70 text-xs font-mono rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
