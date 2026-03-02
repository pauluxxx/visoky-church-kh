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

        <div className="pt-6">
          <button className="w-full bg-black dark:bg-white text-white dark:text-black py-4 text-xs font-bold uppercase tracking-[0.2em] shadow-xl hover:opacity-80 transition-all active:scale-[0.98]">
            Підтримати служіння
          </button>
        </div>
      </div>
    </section>
  )
}
