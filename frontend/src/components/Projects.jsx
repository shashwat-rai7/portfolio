import { SectionHeading } from './About'

const PROJECTS = [
  {
    title: 'GCP Cloud Migration (8 Environments)',
    description: 'Led end-to-end migration of 8 production environments from private cloud to GCP. Architected solutions using GCP ALB, NLB, Cloud DNS, WAF, Filestore, Cloud Storage, and Pub/Sub. Included a 500TB+ data migration with minimal downtime. Earned a Gold Award.',
    tech: ['GCP', 'Terraform', 'Ansible', 'Cloud DNS', 'WAF', 'Pub/Sub'],
    award: '🥇 Gold Award',
  },
  {
    title: 'GCP Disaster Recovery Platform',
    description: 'Designed and implemented GCP-based DR strategies across environments — automated failover, backup policies, and recovery runbooks. Reduced RTO significantly and made DR drills a routine operation rather than a fire drill. Earned a Gold Award.',
    tech: ['GCP', 'Terraform', 'Ansible', 'GitHub Actions'],
    award: '🥇 Gold Award',
  },
  {
    title: 'Infrastructure Automation & CI/CD',
    description: 'Built end-to-end infrastructure automation using Terraform + Ansible + GitHub Actions. Reduced deployment time by 70% and new resource provisioning time by 30%. Also implemented HA Redis and RabbitMQ clusters with stunnel encryption and automated failover.',
    tech: ['Terraform', 'Ansible', 'GitHub Actions', 'Redis', 'RabbitMQ'],
    award: null,
  },
  {
    title: 'Observability Stack',
    description: 'Configured a comprehensive monitoring setup combining Splunk (centralized logging), Datadog (infrastructure and APM), and Pingdom (uptime). Built custom Grafana dashboards for proactive issue detection, reducing repeat incidents through better signal-to-noise ratio.',
    tech: ['Datadog', 'Splunk', 'Grafana', 'Prometheus', 'Pingdom'],
    award: null,
  },
  {
    title: 'Kubernetes Workload Orchestration',
    description: 'Containerized and orchestrated production workloads using Docker and Kubernetes, establishing standards for scalability, HA, and fault tolerance. Integrated Kong Gateway for API authentication. Drove 15% infrastructure cost reduction via optimized monitoring.',
    tech: ['Kubernetes', 'Docker', 'Kong Gateway', 'Prometheus', 'Grafana'],
    award: '🥈 Silver Award',
  },
]

function FolderIcon() {
  return (
    <svg className="w-9 h-9 text-teal-400/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0a0f1e]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="04" title="Notable Work" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6 flex flex-col hover:border-teal-500/50 hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="flex justify-between items-start mb-4">
                <FolderIcon />
                {project.award && (
                  <span className="text-xs text-amber-400/80 font-mono">{project.award}</span>
                )}
              </div>

              <h3 className="text-white font-bold text-base mb-2 group-hover:text-teal-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-5 flex-grow leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-xs text-teal-400/60 font-mono">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
