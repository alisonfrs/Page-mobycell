import WhatsAppButton from './WhatsAppButton'

const steps = [
  {
    n: '1',
    title: 'Chame no WhatsApp',
    text: 'Envie o modelo do aparelho e explique o problema. Rápido e sem complicação.',
  },
  {
    n: '2',
    title: 'Receba uma orientação inicial',
    text: 'Nossa equipe informa as possibilidades e valores aproximados quando possível.',
  },
  {
    n: '3',
    title: 'Traga o aparelho na loja',
    text: 'Fazemos a avaliação presencial e confirmamos o orçamento sem custos.',
  },
  {
    n: '4',
    title: 'Aprove o serviço',
    text: 'O reparo só é iniciado após a sua aprovação. Sem surpresas.',
  },
  {
    n: '5',
    title: 'Acompanhe pelo sistema',
    text: 'Você recebe uma ordem de serviço e pode acompanhar o status do reparo a qualquer momento.',
  },
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-white px-4 py-12 md:py-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="section-title">Consertar seu celular é simples</h2>
        <p className="text-center text-gray-500 mt-2 mb-8">Da conversa no WhatsApp até a retirada do aparelho.</p>

        <ol className="space-y-4" role="list">
          {steps.map((step, i) => (
            <li key={step.n} className="flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-lg shadow-sm">
                {step.n}
              </div>
              <div className="card flex-1 py-4">
                <h3 className="font-bold text-gray-900">{step.title}</h3>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8">
          <WhatsAppButton label="Começar orçamento agora" size="lg" />
        </div>
      </div>
    </section>
  )
}
