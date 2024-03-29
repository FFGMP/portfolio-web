import './globals.css'
import { Inter } from 'next/font/google'
import { LeftCollumn } from './components/leftCollumn'
import { cookies } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio | FFGMP',
  description: 'Portfolio FFGMP',
}

export default function RootLayout({ children }) {
  const theme = cookies().get("theme")?.value;
  return (
    <html className={theme != undefined ? cookies().get("theme").value : "dark"} lang="en">
      <body className={inter.className + " bg-gray-300 dark:bg-neutral-800"}>
        <main>
          <div className="max-w-screen-xl flex flex-wrap justify-center gap-2 sm:gap-6 mx-auto p-2">
            <LeftCollumn />
            <div id="RightOne" className="w-full sm:w-[39rem] lg:w-[62rem] xl:w-3/4 mb-16 lg:mb-0 xl:mt-10 rounded-md bg-current bg-neutral-900 border-[1px] border-neutral-700 z-10">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
