'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
            Coronadas
          </Link>

          {/* Botón hamburguesa */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-white focus:outline-none"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Links desktop */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:underline">Inicio</Link>
            <Link href="/about" className="hover:underline">Acerca</Link>
            <Link href="/contact" className="hover:underline">Contacto</Link>
          </div>
        </div>

        {/* Menu mobile */}
        {isOpen && (
          <div className="md:hidden flex flex-col mt-2 space-y-2">
            <Link href="/" className="hover:underline">Inicio</Link>
            <Link href="/about" className="hover:underline">Acerca</Link>
            <Link href="/contact" className="hover:underline">Contacto</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
