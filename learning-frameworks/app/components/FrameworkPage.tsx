import { ReactNode } from 'react'
import TopicSelector from './TopicSelector'
import ChatGPTPrompts from './ChatGPTPrompts'

interface FrameworkPageProps {
  title: string
  description: ReactNode
  examples: string[]
}

const FrameworkPage: React.FC<FrameworkPageProps> = ({ title, description, examples }) => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">{title}</h1>
      <div className="text-lg">{description}</div>
      <h2 className="text-2xl font-semibold">Examples</h2>
      <ul className="list-disc list-inside space-y-2">
        {examples.map((example, index) => (
          <li key={index}>{example}</li>
        ))}
      </ul>
      <TopicSelector framework={title} />
      <ChatGPTPrompts framework={title} />
    </div>
  )
}

export default FrameworkPage

