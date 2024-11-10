import AnimatedTextLink from './AnimatedTextLink'

export default function Navbar() {
  return (
    <header className="bg-blue-dark sticky top-0 bg-opacity-50 px-52 py-6">
      <div className="flex justify-between gap-10">
        <nav className="flex items-center gap-x-8">
          <AnimatedTextLink href="/">Home</AnimatedTextLink>
          <AnimatedTextLink href="/about">About</AnimatedTextLink>
          <AnimatedTextLink href="/contact">Contact</AnimatedTextLink>
          <AnimatedTextLink href="/blog">Blog</AnimatedTextLink>
        </nav>
      </div>
    </header>
  )
}
