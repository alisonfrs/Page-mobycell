import { WA_LINK } from './WhatsAppButton'

// TODO: Substitua o link abaixo pelo link real do Google Maps da loja
const MAPS_LINK = 'https://maps.google.com/?q=Campo+de+Santana+Curitiba+PR'

export default function Localizacao() {
  return (
    <section id="localizacao" className="bg-gray-900 text-white px-4 py-12 md:py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-4xl mb-4" aria-hidden="true">📍</div>
        <h2 className="text-2xl md:text-3xl font-bold">
          Estamos no Campo de Santana — Curitiba/PR
        </h2>
        <p className="text-gray-400 mt-3 mb-8 leading-relaxed">
          Atendimento presencial para moradores do Campo de Santana e bairros próximos. Venha até a nossa loja com mais segurança e comodidade.
        </p>

        <div className="bg-gray-800 rounded-2xl p-5 mb-8 text-left">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-brand-red mt-0.5" aria-hidden="true">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </span>
            <div>
              <p className="font-semibold text-white">Campo de Santana, Curitiba — PR</p>
              <p className="text-gray-400 text-sm mt-0.5">Endereço completo disponível no WhatsApp</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-brand-red" aria-hidden="true">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <div>
              <p className="font-semibold text-white">Segunda a sexta: 09:00 às 18:00h</p>
              <p className="text-gray-400 text-sm mt-0.5">Sábado: 09:00 às 13:00h</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold text-base rounded-xl px-6 py-4 transition-all duration-200 shadow-lg hover:shadow-xl"
            aria-label="Chamar no WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Chamar no WhatsApp
          </a>
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-bold text-base rounded-xl px-6 py-4 transition-all duration-200"
            aria-label="Ver no Google Maps - Como chegar na loja"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Como chegar na loja
          </a>
        </div>
      </div>
    </section>
  )
}
