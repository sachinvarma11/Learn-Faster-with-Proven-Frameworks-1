import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/frameworks/feynman" className="hover:underline">Feynman Technique</Link></li>
          <li><Link href="/frameworks/bloom" className="hover:underline">Bloom's Taxonomy</Link></li>
          <li><Link href="/frameworks/pareto" className="hover:underline">Pareto Principle</Link></li>
          <li><Link href="/frameworks/eisenhower" className="hover:underline">Eisenhower Matrix</Link></li>
          <li><Link href="/frameworks/spaced-repetition" className="hover:underline">Spaced Repetition</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

