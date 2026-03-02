export function Schedule() {
  return (
    <section aria-labelledby="schedule-heading">
      <h2 id="schedule-heading" className="section-label">Розклад богослужінь</h2>
      <div className="space-y-6 text-sm sm:text-base tracking-tight leading-relaxed">
        <div>
          <p className="opacity-40 uppercase text-[10px] font-bold tracking-widest mb-1">Неділя</p>
          <p className="font-medium text-lg">10:00 — Основне богослужіння</p>
        </div>

        <div>
          <p className="opacity-40 uppercase text-[10px] font-bold tracking-widest mb-1">П'ятниця</p>
          <p className="font-medium text-lg">18:00 — Біблійна година та молитва</p>
        </div>

        <p className="pt-4 text-xs opacity-50 italic">
          Розклад може змінюватися під час святкових днів. Слідкуйте за оголошеннями.
        </p>
      </div>
    </section>
  )
}
