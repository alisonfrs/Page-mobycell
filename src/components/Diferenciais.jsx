const cards = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#D91F26" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Garantia de 6 meses a 1 ano',
    text: 'Mais segurança depois do conserto, conforme o tipo de peça e serviço realizado.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#D91F26" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    title: 'Parcelamento em até 10x',
    text: 'Facilitamos o pagamento para você não deixar o celular parado por falta de dinheiro.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#D91F26" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Pronto no mesmo dia',
    text: 'Muitos reparos podem ser finalizados no mesmo dia, dependendo do defeito e da disponibilidade de peça.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#D91F26" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Acompanhamento em tempo real',
    text: 'Você recebe uma ordem de serviço e acompanha o status do reparo pelo nosso sistema.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#D91F26" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
    title: 'Loja física no bairro',
    text: 'Atendimento presencial no Campo de Santana, com mais confiança e segurança para você.',
  },
]

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-gray-50 px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Por que escolher a Moby Cell?</h2>
        <p className="text-center text-gray-500 mt-2 mb-8">Assistência técnica de celulares com qualidade, transparência e agilidade.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <article key={card.title} className="card flex gap-4 items-start">
              <div className="bg-red-50 rounded-xl p-2.5 shrink-0">{card.icon}</div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">{card.title}</h3>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
