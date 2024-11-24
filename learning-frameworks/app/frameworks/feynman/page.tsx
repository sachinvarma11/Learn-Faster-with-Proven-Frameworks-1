import FrameworkPage from '../../components/FrameworkPage'

export default function FeynmanTechnique() {
  return (
    <FrameworkPage
      title="Feynman Technique"
      description={
        <>
          <p>The Feynman Technique is a learning method named after physicist Richard Feynman. It involves the following steps:</p>
          <ol className="list-decimal list-inside mt-4 space-y-2">
            <li>Choose a concept you want to learn about</li>
            <li>Explain it to a 12-year-old</li>
            <li>Reflect, Refine, and Simplify</li>
            <li>Organize and Review</li>
          </ol>
        </>
      }
      examples={[
        "Using the Feynman Technique to Learn Physics",
        "Mastering Mathematical Concepts with Feynman's Method",
        "Applying the Feynman Technique to Learn Programming Languages"
      ]}
    />
  )
}

