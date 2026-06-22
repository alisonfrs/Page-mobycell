const items = [
  { icon: '📋', label: 'Ordem de serviço' },
  { icon: '📊', label: 'Status do reparo' },
  { icon: '💬', label: 'Atendimento pelo WhatsApp' },
  { icon: '🛡️', label: 'Garantia conforme o serviço' },
  { icon: '🏪', label: 'Loja física' },
  { icon: '💳', label: 'Pagamento facilitado' },
]

export default function Confianca() {
  return (
    <section className="bg-gray-50 px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title">Mais segurança para deixar seu celular</h2>
        <p className="text-center text-gray-600 mt-3 mb-8 max-w-xl mx-auto">
          Na Moby Cell, você não fica sem informação. O serviço é registrado, o orçamento é explicado e você pode acompanhar o andamento pelo sistema.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item.label} className="card flex items-center gap-3">
              <span className="text-2xl shrink-0" aria-hidden="true">{item.icon}</span>
              <span className="font-semibold text-gray-800 text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
