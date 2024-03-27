"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (!mobileNavOpen || event.keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex md:hidden">
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen ? "active" : ""}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      <Transition
        show={mobileNavOpen}
        as="nav"
        id="mobile-nav"
        className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ul className="px-5 py-2">
          <li>
            <Link
              href="/"
              className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center text-lg my-2"
              onClick={() => setMobileNavOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#servicos"
              className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center text-lg my-2"
              onClick={() => setMobileNavOpen(false)}
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              href="/#contatos"
              className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center text-lg my-2"
              onClick={() => setMobileNavOpen(false)}
            >
              Contato
            </Link>
          </li>
          <li>
            <Link
              href="https://wa.link/wuh9g7"
              target="_blank"
              className="flex font-medium text-gray-200 bg-[#7163FF] hover:bg-[#6152de] py-2 justify-center text-lg my-2 rounded-md px-4"
              onClick={() => setMobileNavOpen(false)}
            >
              <span>Começar meu projeto</span>
            </Link>
          </li>
        </ul>
      </Transition>
    </div>
  );

}
