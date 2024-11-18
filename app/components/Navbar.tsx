import AnimatedTextLink from './AnimatedTextLink'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-blue-dark bg-opacity-50 px-52 py-6 backdrop-blur">
      <div className="flex justify-center gap-10">
        <nav className="flex items-center gap-x-8">
          <AnimatedTextLink href="/">Home</AnimatedTextLink>
          <AnimatedTextLink href="/projects">Projects</AnimatedTextLink>
          <AnimatedTextLink href="/contact">Contact</AnimatedTextLink>
          <AnimatedTextLink href="/blog">Blog</AnimatedTextLink>
        </nav>
      </div>
    </header>
  )
}
