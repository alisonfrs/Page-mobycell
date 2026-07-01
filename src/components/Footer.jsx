export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-gray-900 text-gray-400 px-4 py-8">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Moby Cell" className="h-10 w-auto" />
          <div>
            <p className="text-white font-bold text-sm">Moby Cell</p>
            <p className="text-xs">Conserto e Reparo de Celulares</p>
          </div>
        </div>
        <div className="text-center sm:text-right">
          <p className="text-xs">Campo de Santana — Curitiba/PR</p>
          <p className="text-xs mt-1">© {year} Moby Cell. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
