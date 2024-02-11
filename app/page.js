import Image from 'next/image'
import styles from './page.module.css'
import Hero from './components/Hero'
import CustomGrid from './components/CustomGrid'

export default function Home() {
  return (
    <div>
      <Hero />
      <CustomGrid />
    </div>
  )
}
