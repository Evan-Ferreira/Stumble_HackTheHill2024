export default function ModuleDescription({ description }: { description: string }) {
  return (
    <div className="bg-zinc-800 h-screen w-1/2 text-white rounded-md border-white">
      <div>
        <ul className="flex gap-8 bg-zinc-700 p-4">
          <li>Description</li>
          <li className="opacity-70">Solution</li>
          <li className="opacity-70">Submissions</li>
        </ul>
      </div>
      <div className="p-4">
        <h1 className="text-2xl mb-6">1. Say Hello</h1>
        <p className="m-6">{description}</p>
        <h2 className="mb-2">Example:</h2>
        <div className="border-l-2 pl-4">
          <p><strong>Input:</strong> Hi, name's Jeff.</p>
          <p><strong>Output:</strong> Hello Jeff!</p>
          <p><strong>Explanation:</strong> You have said hello to a woman and she said hi back.</p>
        </div>
      </div>
    </div>
  )
}
