import './globals.css'
import Navbar from '/src/app/components/Navbar'

export const metadata = {
  title: 'Coronadas',
  description: 'Tu sitio web con Next.js y Tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
        <Navbar />
        <main className="p-4 max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  )
}
