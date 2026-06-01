export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0f1e]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b22_1px,transparent_1px),linear-gradient(to_bottom,#1e293b22_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(20,184,166,0.12),transparent)]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-teal-400 font-mono text-sm sm:text-base mb-6 tracking-[0.2em] uppercase">
          Hi, my name is
        </p>

        <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
          Shashwat Rai<span className="text-teal-400">.</span>
        </h1>

        <h2 className="text-3xl sm:text-5xl font-bold text-slate-500 mb-8">
          Lead Site Reliability Engineer
        </h2>

        <p className="text-slate-400 text-base sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          5+ years keeping production systems alive, migrating clouds, and automating
          the toil away. Currently building reliability at scale at UKG.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#experience"
            className="px-8 py-4 bg-teal-500 text-slate-900 font-semibold rounded-lg hover:bg-teal-400 transition-all duration-200 shadow-lg shadow-teal-500/20"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-teal-500 text-teal-400 font-semibold rounded-lg hover:bg-teal-500/10 transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 animate-bounce">
        <span className="text-xs font-mono">scroll</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
