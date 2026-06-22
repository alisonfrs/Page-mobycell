// Link do perfil da Moby Cell no Google Maps (avaliações).
// Para trocar, basta atualizar a URL abaixo.
const GOOGLE_REVIEWS_LINK =
  'https://www.google.com/maps/place/Moby+Cell+Assistencia+t%C3%A9cnica+Celulares/@-25.5840198,-49.3230281,17z/data=!4m6!3m5!1s0x94dcfc2a0990a4cf:0x7839fd71f4723732!8m2!3d-25.5840247!4d-49.3204532!16s%2Fg%2F11q484tv8z'

// Avaliações reais extraídas do Google. Para adicionar/editar, basta alterar este array.
const reviews = [
  {
    name: 'Edina Oliveira',
    initials: 'EO',
    stars: 5,
    date: 'abr. de 2025',
    text: 'Ótimo atendimento, agilidade e qualidade!',
  },
  {
    name: 'Jeverton',
    initials: 'J',
    stars: 5,
    date: 'abr. de 2025',
    text: 'Extremamente atencioso.',
  },
  {
    name: 'Selene Domingues',
    initials: 'SD',
    stars: 5,
    date: 'abr. de 2025',
    text: 'Excelente trabalho, meu celular foi detonado e voltou brilhando. E o Alisson é um rapaz simpático, atento a todas as nossas perguntas.',
  },
]

const Stars = ({ count }) => (
  <div className="flex gap-0.5" aria-label={`${count} de 5 estrelas`} role="img">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < count ? '#FBBF24' : '#E5E7EB'} aria-hidden="true">
        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ))}
  </div>
)

const GoogleIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
    <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
  </svg>
)

export default function Depoimentos() {
  return (
    <section className="bg-white px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Clientes que confiam na Moby Cell</h2>

        {/* Selo de avaliações do Google */}
        <div className="mt-4 mb-8 flex flex-col items-center gap-2">
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2">
            <GoogleIcon size={20} />
            <span className="font-semibold text-gray-800 text-sm">Avaliações reais do Google</span>
            <span className="text-gray-300" aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <span className="font-bold text-gray-900 text-sm">5,0</span>
              <Stars count={5} />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <article key={i} className="card flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <Stars count={r.stars} />
                <GoogleIcon size={18} />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">"{r.text}"</p>
              <div className="flex items-center gap-2 pt-2 border-t border-gray-50">
                <div className="w-9 h-9 rounded-full bg-brand-red flex items-center justify-center text-white text-xs font-bold shrink-0" aria-hidden="true">
                  {r.initials}
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-gray-800">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={GOOGLE_REVIEWS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-semibold text-sm rounded-xl px-6 py-3 shadow-sm transition-colors"
            aria-label="Ver todas as avaliações da Moby Cell no Google"
          >
            <GoogleIcon size={18} />
            Ver todas as avaliações no Google
          </a>
        </div>
        {/* Para adicionar mais avaliações, edite o array 'reviews' no topo deste arquivo. */}
      </div>
    </section>
  )
}
