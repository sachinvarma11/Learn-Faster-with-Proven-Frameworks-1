import FrameworkPage from '../../components/FrameworkPage'

export default function BloomsTaxonomy() {
  return (
    <FrameworkPage
      title="Bloom's Taxonomy"
      description={
        <>
          <p>Bloom's Taxonomy is a hierarchical ordering of cognitive skills that can help teachers teach and students learn. The six levels are:</p>
          <ol className="list-decimal list-inside mt-4 space-y-2">
            <li>Remember</li>
            <li>Understand</li>
            <li>Apply</li>
            <li>Analyze</li>
            <li>Evaluate</li>
            <li>Create</li>
          </ol>
        </>
      }
      examples={[
        "Using Bloom's Taxonomy to Improve Critical Thinking Skills",
        "Applying Bloom's Taxonomy in Language Learning",
        "Enhancing Problem-Solving Skills with Bloom's Taxonomy"
      ]}
    />
  )
}

