import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="flex flex-wrap md:flex-nowrap items-center pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="md:w-2/5 text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4">Seu negócio aos olhos do mundo</h1>
            <div>
              <p className="text-lg text-gray-600 mb-8">Com a Madgic, você conta com o desenvolvimento rápido, seguro e de alta performance do seu website, loja virtual ou aplicativo.</p>
              <div className="flex justify-start">
                <Link href="https://wa.link/wuh9g7" className="btn-sm text-gray-200 bg-[#7163FF] hover:bg-[#6152de] rounded-md">
                  <span>Começar meu projeto</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="md:w-3/5 flex justify-center md:justify-end">
            <Image
              src="/images/23_03_10_programming_mono_16-Convertido.webp"
              width={800}
              height={500}  
              alt="Hero image"
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
