import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative" id="contatos">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="flex flex-wrap md:flex-nowrap items-center pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="md:w-2/5 text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Alcance o futuro desenvolvendo hoje!</h1>
            <div>
              <p className="text-lg text-gray-600 mb-8" data-aos="zoom-y-out">Nossa equipe está aguardando ansiosamente seu contato para juntos iniciarmos o seu projeto.</p>
              <div className="flex justify-start" data-aos="zoom-y-out">
                <Link href="https://wa.link/wuh9g7" target="_blank" className="btn-sm text-gray-200 bg-[#7163FF] hover:bg-[#6152de] rounded-md">
                  <span>Começar meu projeto</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="md:w-3/5 flex justify-center md:justify-end" data-aos="zoom-y-out">
            <Image
              src="/images/Testing_Services_6_-Convertido.webp"
              width={800}  // Diminuído a largura da imagem
              height={500}  // Diminuído a altura da imagem proporcionalmente
              alt="Hero image"
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
