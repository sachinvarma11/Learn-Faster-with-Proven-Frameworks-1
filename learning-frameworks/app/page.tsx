import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Learn Faster with Proven Frameworks</h1>
      <p className="text-xl">Master these learning techniques to accelerate your learning process:</p>
      <ul className="list-disc list-inside space-y-2">
        <li><Link href="/frameworks/feynman" className="text-blue-600 hover:underline">Feynman Technique</Link></li>
        <li><Link href="/frameworks/bloom" className="text-blue-600 hover:underline">Bloom's Taxonomy</Link></li>
        <li><Link href="/frameworks/pareto" className="text-blue-600 hover:underline">Pareto Principle (80/20 Rule)</Link></li>
        <li><Link href="/frameworks/eisenhower" className="text-blue-600 hover:underline">Eisenhower Matrix for Prioritization</Link></li>
        <li><Link href="/frameworks/spaced-repetition" className="text-blue-600 hover:underline">Spaced Repetition Systems</Link></li>
      </ul>
      <p>Explore each framework to learn how to apply it to your studies and boost your learning efficiency!</p>
    </div>
  )
}

