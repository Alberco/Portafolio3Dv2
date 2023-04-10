import { Inter } from 'next/font/google'
import { Hero, Proyectos, About } from './components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <div className='bg-gray-900 pb-4 lg:pb-20 z-50'>
        <p className='container mx-auto text-center lg:text-start  px-10 sm:px-12 lg:px-14 text-xl lg:text-4xl text-white font-bold pl-2 '>Proyectos Recientes</p>
        <Proyectos />
      </div>
    </div>
  )
}
