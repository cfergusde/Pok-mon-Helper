import '../styles/globals.css'
import { Josefin_Sans } from 'next/font/google'

const inter = Josefin_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Pokemon Helper',
  description: 'To help people play pokemon',
}

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className="bg-gray-900 text-gray-100">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
