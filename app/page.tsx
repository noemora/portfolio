import About from './components/About'
import Hero from './components/Hero'

export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-8">
      <Hero />
      <About />
    </div>
  )
}
