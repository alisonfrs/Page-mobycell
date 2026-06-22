import { useState } from 'react'

const faqs = [
  {
    q: 'Tem garantia?',
    a: 'Sim. A garantia varia de 6 meses a 1 ano, conforme o tipo de peça e serviço realizado.',
  },
  {
    q: 'Parcela o conserto?',
    a: 'Sim. Parcelamos em até 10x.',
  },
  {
    q: 'Fica pronto no mesmo dia?',
    a: 'Muitos serviços ficam prontos no mesmo dia, dependendo do defeito, peça disponível e aprovação do orçamento.',
  },
  {
    q: 'Posso acompanhar o serviço?',
    a: 'Sim. Você recebe uma ordem de serviço e pode acompanhar o status pelo sistema a qualquer momento.',
  },
  {
    q: 'Faz orçamento pelo WhatsApp?',
    a: 'Sim. Envie o modelo do aparelho e o problema para receber uma orientação inicial sem compromisso.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 text-base">{q}</span>
        <span className={`shrink-0 transition-transform duration-200 text-brand-red ${open ? 'rotate-180' : ''}`} aria-hidden="true">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-5 pb-4 bg-gray-50">
          <p className="text-gray-600 text-sm leading-relaxed pt-1">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-white px-4 py-12 md:py-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="section-title">Perguntas frequentes</h2>
        <p className="text-center text-gray-500 mt-2 mb-8">Tire suas dúvidas antes de trazer o celular.</p>
        <div className="space-y-3">
          {faqs.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
