const steps = [
  { label: 'Serviço recebido', icon: '📦', done: true, active: false },
  { label: 'Em análise', icon: '🔍', done: true, active: false },
  { label: 'Orçamento enviado', icon: '💬', done: true, active: false },
  { label: 'Em manutenção', icon: '🔧', done: false, active: true },
  { label: 'Pronto para retirada', icon: '✅', done: false, active: false },
]

export default function Acompanhamento() {
  return (
    <section className="bg-brand-red px-4 py-12 md:py-16" aria-label="Acompanhamento do serviço">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
          Acompanhe o status do seu serviço pelo celular
        </h2>
        <p className="text-red-100 text-center mt-3 mb-8 leading-relaxed">
          Na Moby Cell, seu aparelho não fica sem informação. Você recebe uma ordem de serviço e pode acompanhar o andamento do reparo pelo sistema.
        </p>

        <div className="bg-white rounded-3xl p-6 shadow-xl">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">Status da ordem de serviço</p>

          <div className="space-y-3">
            {steps.map((step) => (
              <div
                key={step.label}
                className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-all ${
                  step.active
                    ? 'bg-red-50 border border-brand-red'
                    : step.done
                    ? 'bg-gray-50 border border-gray-100'
                    : 'border border-gray-100 opacity-50'
                }`}
                aria-current={step.active ? 'step' : undefined}
              >
                <span className="text-xl shrink-0" aria-hidden="true">{step.icon}</span>
                <span className={`font-semibold text-sm ${step.active ? 'text-brand-red' : 'text-gray-700'}`}>
                  {step.label}
                </span>
                {step.done && (
                  <span className="ml-auto text-brand-red" aria-label="Concluído">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                )}
                {step.active && (
                  <span className="ml-auto">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-red bg-red-100 rounded-full px-2.5 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse inline-block" aria-hidden="true" />
                      Agora
                    </span>
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-5 font-medium">
            Mais transparência, segurança e controle para você.
          </p>
        </div>
      </div>
    </section>
  )
}
