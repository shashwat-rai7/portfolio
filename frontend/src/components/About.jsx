const QUICK_SKILLS = ['GCP', 'Kubernetes', 'Terraform', 'Ansible', 'Prometheus', 'Python']

const CERTS = [
  { name: 'AWS Certified Cloud Practitioner', short: 'AWS CCP' },
  { name: 'HashiCorp Certified: Terraform Associate', short: 'Terraform Associate' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0d1526]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="01" title="About Me" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              I'm a Lead Site Reliability Engineer with 5+ years of experience improving
              reliability, automation, and operational efficiency for production systems.
              Currently at <span className="text-teal-400 font-medium">UKG</span>, where I led
              the migration of 8 environments from private cloud to GCP — including a 500TB+
              data migration — and architected disaster recovery systems across the board.
            </p>
            <p>
              My work spans cloud migrations, Infrastructure as Code, container orchestration,
              CI/CD automation, and end-to-end observability. I care about making systems
              reliable without making operations painful — through thoughtful automation,
              monitoring that actually tells you something, and incident processes that let
              you sleep at night.
            </p>
            <p>
              I'm also actively exploring AI-assisted SRE workflows to accelerate
              troubleshooting and reduce repetitive operational work.
            </p>

            <div className="pt-4">
              <p className="text-slate-300 font-medium mb-3">Core technologies:</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 font-mono text-sm">
                {QUICK_SKILLS.map(skill => (
                  <span key={skill} className="text-teal-400 flex items-center gap-2">
                    <span className="text-teal-700">▸</span> {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="pt-4">
              <p className="text-slate-300 font-medium mb-3">Certifications:</p>
              <div className="flex flex-wrap gap-2">
                {CERTS.map(cert => (
                  <span
                    key={cert.short}
                    title={cert.name}
                    className="px-3 py-1.5 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono rounded-full"
                  >
                    {cert.short}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Profile photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 group">
              <div className="absolute inset-0 border-2 border-teal-400 rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
              <div className="relative w-64 h-64 rounded-lg overflow-hidden">
                <img
                  src="/profile.png"
                  alt="Shashwat Rai"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeading({ number, title }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-white flex items-center gap-3">
        <span className="text-teal-400 font-mono text-xl">{number}.</span>
        {title}
      </h2>
      <div className="w-24 h-0.5 bg-teal-500/50 mt-3" />
    </div>
  )
}

export { SectionHeading }
