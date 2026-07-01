import WhatsAppButton from './WhatsAppButton'

const problems = [
  'Tela quebrada ou trincada',
  'Bateria descarregando rápido',
  'Celular que não carrega',
  'Alto-falante ou microfone com defeito',
  'Câmera com problema',
  'Aparelho molhado ou oxidado',
]

export default function Problemas() {
  return (
    <section className="bg-white px-4 py-12 md:py-16">
      <div className="max-w-2xl mx-auto">
        <div className="bg-red-50 border border-red-100 rounded-3xl p-7 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            Seu celular está dando problema?
          </h2>
          <p className="text-center text-gray-600 mt-2 mb-6">
            A Moby Cell te ajuda quando o aparelho está com:
          </p>
          <ul className="space-y-3 mb-8" role="list">
            {problems.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-brand-red flex items-center justify-center" aria-hidden="true">
                  <svg width="12" height="12" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <span className="text-gray-700 font-medium">{p}</span>
              </li>
            ))}
          </ul>
          <WhatsAppButton label="Quero resolver meu problema" size="lg" />
        </div>
      </div>
    </section>
  )
}
