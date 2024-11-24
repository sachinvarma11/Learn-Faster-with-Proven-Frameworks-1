import FrameworkPage from '../../components/FrameworkPage'

export default function EisenhowerMatrix() {
  return (
    <FrameworkPage
      title="Eisenhower Matrix for Prioritization"
      description={
        <>
          <p>The Eisenhower Matrix is a productivity tool that helps you prioritize tasks based on their importance and urgency. It divides tasks into four quadrants:</p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Urgent and Important: Do first</li>
            <li>Important but Not Urgent: Schedule</li>
            <li>Urgent but Not Important: Delegate</li>
            <li>Neither Urgent nor Important: Eliminate</li>
          </ul>
        </>
      }
      examples={[
        "Using the Eisenhower Matrix to Manage Study Time",
        "Prioritizing Research Tasks with the Eisenhower Matrix",
        "Balancing Academic and Personal Life Using the Eisenhower Matrix"
      ]}
    />
  )
}

