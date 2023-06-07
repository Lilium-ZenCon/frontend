import Hero from '@/components/Hero'
import Image from 'next/image'
import logo from '../public/assets/bg.png'
import heroPic from '../public/assets/hero-photos.png'
import Leaderboard from '@/components/Leaderboard'

export default function Home() {
  return (
   <div className='w-full overflow-hidden'>
    <Hero />
    <Image src={logo} alt="logo" className='absolute -z-10 right-0 top-[38%] overflow-hidden'/>
    <Image src={heroPic} alt="hero-bg" className='absolute w-[50%] right-24 top-[62vh]'/>
    <Leaderboard/>
   </div>
  )
}
