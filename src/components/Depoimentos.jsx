const reviews = [
  {
    name: 'Cliente Moby Cell',
    initials: 'CM',
    stars: 5,
    text: 'Atendimento rápido e explicou tudo certinho. Recomendo muito!',
  },
  {
    name: 'Cliente Moby Cell',
    initials: 'CM',
    stars: 5,
    text: 'Consegui parcelar e o celular ficou pronto rápido. Muito satisfeito!',
  },
  {
    name: 'Cliente Moby Cell',
    initials: 'CM',
    stars: 5,
    text: 'Gostei porque acompanhei o serviço pelo sistema. Muito transparente.',
  },
]

const Stars = ({ count }) => (
  <div className="flex gap-0.5" aria-label={`${count} estrelas`} role="img">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ))}
  </div>
)

export default function Depoimentos() {
  return (
    <section className="bg-white px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Clientes que confiam na Moby Cell</h2>
        <p className="text-center text-gray-500 mt-2 mb-8">Avaliações reais de quem já consertou o celular conosco.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <article key={i} className="card flex flex-col gap-3">
              <Stars count={r.stars} />
              <p className="text-gray-700 text-sm leading-relaxed flex-1">"{r.text}"</p>
              <div className="flex items-center gap-2 pt-2 border-t border-gray-50">
                <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-white text-xs font-bold shrink-0" aria-hidden="true">
                  {r.initials}
                </div>
                <span className="text-sm font-medium text-gray-600">{r.name}</span>
              </div>
            </article>
          ))}
        </div>
        {/* Para adicionar depoimentos reais, substitua os objetos do array 'reviews' acima */}
      </div>
    </section>
  )
}
