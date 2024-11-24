'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ChatGPTPromptsProps {
  framework: string
}

const ChatGPTPrompts: React.FC<ChatGPTPromptsProps> = ({ framework }) => {
  const [topic, setTopic] = useState('')
  const [prompts, setPrompts] = useState<string[]>([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would call an API to generate prompts
    setPrompts([
      `Explain ${topic} using the ${framework} in simple terms.`,
      `Generate 5 practice questions about ${topic} based on ${framework}.`,
      `Create a study plan for ${topic} using ${framework}.`,
    ])
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">ChatGPT Prompt Library</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <Input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter your topic"
          className="w-full"
        />
        <Button type="submit">Generate Prompts</Button>
      </form>
      {prompts.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold">Generated Prompts:</h3>
          <ul className="list-disc list-inside space-y-2">
            {prompts.map((prompt, index) => (
              <li key={index}>{prompt}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ChatGPTPrompts

