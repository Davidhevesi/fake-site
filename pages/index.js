import HearoInfo from '../components/HearoInfo'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <NavBar />
      <HearoInfo />
    </div>
  )
}
