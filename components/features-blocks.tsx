export default function FeaturesBlocks() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Conheça nossos serviços</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-start p-6 rounded shadow-xl" style={{ backgroundColor: '#E117C5', minHeight: '350px', borderRadius: '10px' }}>
              <svg className="w-24 h-24 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect width="64" height="64" fill="#E117C5" rx="8" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-white">Websites</h4>
              <p className="text-gray-600 mb-4 text-white">Fazemos sites sob a demanda do seu negócio para que seja cada vez mais fodão na era digital</p>
              <a href="https://wa.link/wuh9g7" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button style={{ border: '1px solid white', borderRadius: '10px', padding: '8px 16px', color: 'white', cursor: 'pointer' }}>
                  Fale Conosco
                </button>
              </a>
            </div>

            {/* 2st item */}
            <div className="relative flex flex-col items-start p-6 rounded shadow-xl" style={{ backgroundColor: '#FF2597', minHeight: '350px', borderRadius: '10px' }}>
              <svg className="w-24 h-24 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect width="64" height="64" fill="#FF2597" rx="8" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-white">Softwares</h4>
              <p className="text-gray-600 mb-4 text-white">Fazemos sites sob a demanda do seu negócio para que seja cada vez mais fodão na era digital</p>
              <a href="https://wa.link/wuh9g7" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button style={{ border: '1px solid white', borderRadius: '10px', padding: '8px 16px', color: 'white', cursor: 'pointer' }}>
                  Fale Conosco
                </button>
              </a>
            </div>

            {/* 3st item */}
            <div className="relative flex flex-col items-start p-6 rounded shadow-xl" style={{ backgroundColor: '#FF9B50', minHeight: '350px', borderRadius: '10px' }}>
              <svg className="w-24 h-24 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect width="64" height="64" fill="#FF9B50" rx="8" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-white">Lojas virtuais</h4>
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
