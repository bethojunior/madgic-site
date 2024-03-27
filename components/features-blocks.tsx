import WebsitesSVG from '../public/images/Websites.svg';
import SoftwaresSVG from '../public/images/Softwares.svg';
import LojasVirtuaisSVG from '../public/images/Lojas Virtuais.svg';


export default function FeaturesBlocks() {
  return (
    <section className="relative" id="servicos">
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20" data-aos="zoom-y-out">
            <h2 className="h2 mb-4">Conheça nossos serviços</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none" data-aos="zoom-y-out">

            {/* 1st item */}
            <div className="relative flex flex-col items-start p-6 rounded shadow-xl" style={{ backgroundColor: '#E117C5', minHeight: '350px', borderRadius: '10px' }}>
              <img src="/images/Websites.svg" alt="Websites" className="w-24 h-24 p-1 -mt-1 mb-6" />
              <h4 className="text-3xl font-black leading-snug tracking-tight mb-1 text-white">Websites</h4>
              <p className="text-gray-600 mb-4 text-white">Fazemos sites sob a demanda do seu negócio para que seja cada vez mais fodão na era digital</p>
              <a href="https://wa.link/wuh9g7" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button style={{ border: '1px solid white', borderRadius: '10px', padding: '8px 16px', color: 'white', cursor: 'pointer' }}>
                  Fale Conosco
                </button>
              </a>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-start p-6 rounded shadow-xl" style={{ backgroundColor: '#FF2597', minHeight: '350px', borderRadius: '10px' }}>
              <img src="/images/Softwares.svg" alt="Softwares" className="w-24 h-24 p-1 -mt-1 mb-6" />
              <h4 className="text-3xl font-black leading-snug tracking-tight mb-1 text-white">Softwares</h4>
              <p className="text-gray-600 mb-4 text-white">Fazemos sites sob a demanda do seu negócio para que seja cada vez mais fodão na era digital</p>
              <a href="https://wa.link/wuh9g7" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button style={{ border: '1px solid white', borderRadius: '10px', padding: '8px 16px', color: 'white', cursor: 'pointer' }}>
                  Fale Conosco
                </button>
              </a>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-start p-6 rounded shadow-xl" style={{ backgroundColor: '#FF9B50', minHeight: '350px', borderRadius: '10px' }}>
              <img src="/images/Lojas Virtuais.svg" alt="Lojas Virtuais" className="w-24 h-24 p-1 -mt-1 mb-6" />
              <h4 className="text-3xl font-black leading-snug tracking-tight mb-1 text-white">Lojas virtuais</h4>
              <p className="text-gray-600 mb-4 text-white">Fazemos sites sob a demanda do seu negócio para que seja cada vez mais fodão na era digital</p>
              <a href="https://wa.link/wuh9g7" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button style={{ border: '1px solid white', borderRadius: '10px', padding: '8px 16px', color: 'white', cursor: 'pointer' }}>
                  Fale Conosco
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}