const services = [
  {
    emoji: '📱',
    title: 'Troca de tela',
    text: 'Para aparelhos com tela quebrada, trincada, manchada ou sem imagem.',
  },
  {
    emoji: '🔋',
    title: 'Troca de bateria',
    text: 'Para celulares que descarregam rápido ou desligam sozinhos.',
  },
  {
    emoji: '🔌',
    title: 'Conector de carga',
    text: 'Para aparelhos que não carregam ou carregam apenas em certa posição.',
  },
  {
    emoji: '🔧',
    title: 'Reparo em placa',
    text: 'Análise técnica para defeitos mais complexos no hardware.',
  },
  {
    emoji: '💧',
    title: 'Oxidação',
    text: 'Avaliação para aparelhos que tiveram contato com água ou umidade.',
  },
  {
    emoji: '🛡️',
    title: 'Películas e acessórios',
    text: 'Aplicação de película, capinhas, cabos, carregadores e fones.',
  },
]

export default function Servicos() {
  return (
    <section id="servicos" className="bg-gray-50 px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Assistência técnica para celulares</h2>
        <p className="text-center text-gray-500 mt-2 mb-8">Serviços com qualidade, peças testadas e garantia.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <article key={s.title} className="card hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3" aria-hidden="true">{s.emoji}</div>
              <h3 className="font-bold text-gray-900 text-base mb-1">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
