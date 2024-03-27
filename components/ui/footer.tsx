import Logo from "./logo";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              <a href="#0" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Termos</a> · <a href="#0" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Política de Privacidade</a>
            </div>
          </div>

          {/* 1rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 lg:col-start-10">
            <ul className="text-sm space-y-4">
              <li className="flex items-center">
                {/* Email icon */}
                <img
                  src="/images/envelope.png"
                  alt="Email"
                  className="w-6 h-6 mr-3"
                />
                <span className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  contato@madgic.com
                </span>
              </li>
              <li className="flex items-center">
                {/* WhatsApp icon */}
                <img
                  src="/images/telephone-call.png"
                  className="w-6 h-6 mr-3"
                />
                <span className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  55 85 9922-0154
                </span>
              </li>

              <li className="flex items-center">
                {/* Location icon */}
                <img
                  src="/images/location.png"
                  alt="Location"
                  className="w-6 h-6 mr-3"
                />
                <span className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Fortaleza, CE
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                href="https://www.instagram.com/_madgic/"
                target="_blank"
                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Instagram"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ padding: '4px' }}  
                >
                  <path d="M21,2H11A9,9,0,0,0,2,11V21a9,9,0,0,0,9,9H21a9,9,0,0,0,9-9V11A9,9,0,0,0,21,2Zm6,19a6,6,0,0,1-6,6H11a6,6,0,0,1-6-6V11a6,6,0,0,1,6-6H21a6,6,0,0,1,6,6Z" />
                  <path d="M16,9A7,7,0,1,0,23,16,7,7,0,0,0,16,9Zm0,11.93A4.93,4.93,0,1,1,20.93,16,4.94,4.94,0,0,1,16,20.93Z" />
                  <circle cx="24.5" cy="7.5" r="1.5" />
                </svg>
              </a>
            </li>

            <li className="ml-4">
              <a
                href="https://www.facebook.com/profile.php?id=100067476333785"
                target="_blank"
                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Facebook"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mx-auto">
            &copy; Madgic. Todos os Direitos Reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
