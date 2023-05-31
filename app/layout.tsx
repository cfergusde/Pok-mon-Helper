import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pokemon Helper',
  description: 'Interactive Walkthrough of Pokemon',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* // todo: insert banner component here */}
                {children}
            </body>
        </html>
    )
}
