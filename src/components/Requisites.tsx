export function Requisites() {
  return (
    <section aria-labelledby="requisites-heading">
      <h2 id="requisites-heading" className="section-label">Реквізити</h2>
      <div className="space-y-6 text-sm sm:text-base tracking-tight leading-relaxed">
        <div>
          <p className="opacity-40 uppercase text-[10px] font-bold tracking-widest mb-1">Отримувач</p>
          <p className="font-medium">Релігійна громада ЄХБ сел. Високий</p>
          <p className="text-[10px] opacity-40 mt-1">ЄДРПОУ: 00000000</p>
        </div>

        <div className="pt-2">
          <p className="opacity-40 uppercase text-[10px] font-bold tracking-widest mb-1">Рахунок IBAN</p>
          <p className="font-mono text-xs sm:text-sm break-all select-all">UA000000000000000000000000000</p>
          <p className="text-[10px] opacity-40 mt-1 uppercase tracking-wider">АТ КБ "ПриватБанк"</p>
        </div>

        <div className="pt-8 flex justify-center lg:justify-start">
          <button className="relative group overflow-hidden px-8 py-4 bg-black dark:bg-white text-white dark:text-black text-[11px] font-bold uppercase tracking-[0.3em] transition-all hover:scale-[1.02] active:scale-95 shadow-2xl">
            <span className="relative z-10">Підтримати служіння</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>
    </section>
  )
}
