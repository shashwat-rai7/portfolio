const SOCIALS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shashwat-rai-51267a1b3/',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:rai.shashwat782@gmail.com',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0d1526]">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-teal-400 font-mono text-sm tracking-widest mb-4 uppercase">05. What's Next</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          Get In Touch
        </h2>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          I'm open to new opportunities and interesting conversations.
          Whether you have a role in mind or just want to connect — my inbox is always open.
        </p>

        <a
          href="mailto:rai.shashwat782@gmail.com"
          className="inline-block px-10 py-4 border-2 border-teal-400 text-teal-400 font-semibold rounded-lg hover:bg-teal-400 hover:text-slate-900 transition-all duration-200 text-base mb-14"
        >
          Say Hello
        </a>

        <div className="flex justify-center gap-8">
          {SOCIALS.map(s => (
            <a
              key={s.name}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-teal-400 hover:-translate-y-1 transition-all duration-200"
              aria-label={s.name}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p className="mt-10 text-slate-600 text-sm font-mono">
          Noida, India · +91 82188 72871
        </p>
      </div>
    </section>
  )
}
