import WhatsAppButton from './WhatsAppButton'

export default function ChamadaFinal() {
  return (
    <section className="bg-gray-50 px-4 py-12 md:py-16 border-t border-gray-100">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Seu celular precisa de conserto?{' '}
          <span className="text-brand-red">Fale agora com a Moby Cell.</span>
        </h2>
        <p className="text-gray-600 mt-4 mb-8 leading-relaxed">
          Conserto com garantia, parcelamento em até 10x, acompanhamento pelo sistema e atendimento presencial no Campo de Santana.
        </p>
        <WhatsAppButton label="Pedir orçamento no WhatsApp" size="lg" />
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <svg width="16" height="16" fill="none" stroke="#D91F26" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>
            Peças de qualidade
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="16" height="16" fill="none" stroke="#D91F26" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/></svg>
            Técnicos especializados
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="16" height="16" fill="none" stroke="#D91F26" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"/></svg>
            Transparência total
          </span>
        </div>
      </div>
    </section>
  )
}
