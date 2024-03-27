'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './logo';
import MobileMenu from './mobile-menu';

export default function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow justify-center space-x-4">
            <Link href="/" className="text-lg mx-4 hover:text-gray-900">Home</Link>
            <Link href="/#servicos" className="text-lg mx-4 hover:text-gray-900">Serviços</Link>
            <Link href="/#contatos" className="text-lg mx-4 hover:text-gray-900">Contato</Link>
          </nav>

          <Link href="https://wa.link/wuh9g7" target="_blank" className="btn-sm hidden md:inline-flex text-gray-200 bg-[#7163FF] hover:bg-[#6152de] ml-3 rounded-md">
            <span>Começar meu projeto</span>
          </Link>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}