export default function Footer() {
  return (
    <footer className="py-6 bg-[#0a0f1e] border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-slate-600 text-sm font-mono">
          Designed & Built by{' '}
          <span className="text-teal-500">Shashwat Rai</span>
          {' '}· {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
