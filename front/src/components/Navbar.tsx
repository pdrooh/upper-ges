// components/Navbar.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              Igreja App
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Dashboard
              </Link>
              <Link href="/celulas" className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Células
              </Link>
              <Link href="/contagem-culto" className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Contagem
              </Link>
              <Link href="/escalas" className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Escalas
              </Link>
              <Link href="/upperguest" className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Upper Guest
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="md:hidden ml-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Dashboard
            </Link>
            <Link href="/celulas" className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Células
            </Link>
            <Link href="/contagem-culto" className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Contagem
            </Link>
            <Link href="/escalas" className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Escalas
            </Link>
            <Link href="/upperguest" className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Upper Guest
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
