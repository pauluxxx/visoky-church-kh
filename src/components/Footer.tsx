export function Footer() {
  return (
    <footer className="footer-dark">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-thin tracking-tighter cursor-default">
          церква<span className="font-normal">:</span>єхб
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] opacity-40">
          сел. Високий © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}
