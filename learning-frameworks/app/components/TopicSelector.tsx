'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface TopicSelectorProps {
  framework: string
}

const TopicSelector: React.FC<TopicSelectorProps> = ({ framework }) => {
  const [topic, setTopic] = useState('')
  const [strategies, setStrategies] = useState<string[]>([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would call an API to get tailored strategies
    setStrategies([
      `Apply ${framework} to break down the concept of ${topic}`,
      `Create a mind map of ${topic} using ${framework}`,
      `Develop a study plan for ${topic} based on ${framework}`,
    ])
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Apply {framework} to Your Topic</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <Input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter your topic"
          className="w-full"
        />
        <Button type="submit">Generate Strategies</Button>
      </form>
      {strategies.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold">Tailored Strategies:</h3>
          <ul className="list-disc list-inside space-y-2">
            {strategies.map((strategy, index) => (
              <li key={index}>{strategy}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default TopicSelector

