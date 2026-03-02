export function Info() {
  return (
    <section aria-labelledby="info-heading" className="pt-24 pb-12 border-t border-black/5 dark:border-white/5">
      <h2 id="info-heading" className="section-label">Про нас</h2>
      <div className="max-w-3xl">
        <p className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight leading-tight">
          Ми — спільнота <span className="italic">євангельських християн-баптистів</span> у сел. Високий.
          Наше покликання — проповідувати Євангеліє, служити ближнім та разом зростати у вірі в Ісуса Христа.
        </p>
        <p className="mt-8 text-base sm:text-lg opacity-60 leading-relaxed max-w-2xl">
          Двері нашої церкви відкриті для кожного, хто шукає духовних відповідей, розради чи підтримки.
          Ми віримо, що Боже Слово є фундаментом для повноцінного життя та джерелом істинної надії.
        </p>
      </div>
    </section>
  )
}
