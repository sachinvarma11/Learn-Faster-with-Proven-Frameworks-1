import FrameworkPage from '../../components/FrameworkPage'

export default function SpacedRepetition() {
  return (
    <FrameworkPage
      title="Spaced Repetition Systems"
      description={
        <>
          <p>Spaced Repetition is a learning technique that involves reviewing information at gradually increasing intervals. This method improves long-term retention of information. Popular tools include:</p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Anki</li>
            <li>SuperMemo</li>
            <li>Quizlet</li>
          </ul>
        </>
      }
      examples={[
        "Using Anki for Vocabulary Acquisition",
        "Applying Spaced Repetition to Medical School Studies",
        "Mastering Programming Concepts with Spaced Repetition"
      ]}
    />
  )
}

