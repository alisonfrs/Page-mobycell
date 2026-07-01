import WhatsAppButton from './WhatsAppButton'

const badges = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="#D91F26" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    label: 'Garantia',
    sub: 'até 1 ano',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="#D91F26" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    label: 'Parcele',
    sub: 'em até 10x',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="#D91F26" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Pronto no',
    sub: 'mesmo dia*',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="#D91F26" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    label: 'Acompanhe',
    sub: 'pelo sistema',
  },
]

const StatusBar = () => (
  <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 mt-6">
    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Acompanhe o status do seu aparelho</p>
    <div className="flex items-start justify-between gap-1">
      {[
        { label: 'Recebido', time: '09:15', done: true, active: false },
        { label: 'Em análise', time: '09:45', done: true, active: false },
        { label: 'Em manutenção', time: '10:30', done: false, active: true },
        { label: 'Pronto', time: '—:—', done: false, active: false },
      ].map((step, i, arr) => (
        <div key={step.label} className="flex flex-col items-center flex-1">
          <div className="flex items-center w-full">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 transition-all ${
                step.active
                  ? 'bg-brand-red border-brand-red text-white'
                  : step.done
                  ? 'bg-white border-brand-red text-brand-red'
                  : 'bg-white border-gray-200 text-gray-300'
              }`}
              aria-label={step.label}
            >
              {step.done ? (
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
              ) : step.active ? (
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/></svg>
              ) : (
                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              )}
            </div>
            {i < arr.length - 1 && (
              <div className={`h-0.5 flex-1 mx-1 ${step.done || step.active ? 'bg-brand-red' : 'bg-gray-200'}`} aria-hidden="true" />
            )}
          </div>
          <p className={`text-center text-[10px] mt-1.5 font-semibold leading-tight ${step.active ? 'text-brand-red' : step.done ? 'text-gray-600' : 'text-gray-400'}`}>
            {step.label}
          </p>
          <p className="text-[10px] text-gray-400 mt-0.5">{step.time}</p>
        </div>
      ))}
    </div>
  </div>
)

export default function Hero() {
  return (
    <section className="bg-white px-4 pt-8 pb-10 md:pt-14 md:pb-16" aria-label="Seção principal">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center leading-tight">
          Celular quebrado?{' '}
          <span className="text-brand-red">Conserte com garantia</span>{' '}
          e parcele em até{' '}
          <span className="text-brand-red">10x.</span>
        </h1>

        <p className="mt-4 text-gray-600 text-center text-base md:text-lg leading-relaxed">
          Troca de tela, bateria, conector de carga e outros reparos com garantia de{' '}
          <strong>6 meses a 1 ano</strong>. Muitos serviços ficam prontos no{' '}
          <strong>mesmo dia</strong>.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          {badges.map((b) => (
            <div key={b.label} className="card flex items-center gap-2.5 p-3">
              <div className="shrink-0">{b.icon}</div>
              <div>
                <p className="font-semibold text-gray-800 text-sm leading-tight">{b.label}</p>
                <p className="text-xs text-gray-500">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <WhatsAppButton label="Pedir orçamento no WhatsApp" size="lg" />
        </div>

        <p className="text-center text-sm text-gray-500 mt-3 flex items-center justify-center gap-1.5">
          <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          Atendimento presencial no Campo de Santana, Curitiba.
        </p>

        <div className="mt-4 flex items-center justify-center gap-2">
          <div className="flex -space-x-2" aria-hidden="true">
            {['👨', '👩', '👨'].map((e, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-sm">{e}</div>
            ))}
          </div>
          <p className="text-sm text-gray-600 font-medium">+2.500 clientes atendidos e satisfeitos ❤️</p>
        </div>

        <StatusBar />

        <p className="text-center text-xs text-gray-400 mt-3">* Dependendo do defeito e disponibilidade de peça</p>
      </div>
    </section>
  )
}
