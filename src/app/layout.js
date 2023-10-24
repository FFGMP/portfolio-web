import './globals.css'
import { Inter } from 'next/font/google'
import LeftCollumn from './components/leftCollumn'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio | FFGMP',
  description: 'Portfolio FFGMP',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <div className="max-w-screen-xl flex flex-wrap justify-center gap-6 mx-auto p-4 ">
            <LeftCollumn />
            <div id="RightOne" className="w-full sm:w-[39rem] lg:w-[62rem] xl:w-3/4 max-md:mb-16 xl:mt-10 rounded-md bg-current bg-neutral-900 border-[1px] border-neutral-700 z-10">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
