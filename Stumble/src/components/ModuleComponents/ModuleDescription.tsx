export default function ModuleDescription({
  description,
  title,
  exampleInput,
  exampleOutput,
  exampleExplanation,
}: {
  description: string;
  title: string;
  exampleInput: string;
  exampleOutput: string;
  exampleExplanation: string;
}) {
  return (
    <div className="h-full rounded-lg border border-gray-500 bg-zinc-800 text-white">
      <div className="">
        <ul className="flex gap-8 rounded-t-lg bg-zinc-700 px-4 py-2">
          <li>Description</li>
          <li className="opacity-70">Solution</li>
          <li className="opacity-70">Submissions</li>
        </ul>
      </div>

      <div className="h-auto rounded-b-lg p-8 text-white">
        <h1 className="mb-6 text-2xl">{title}</h1>
        <p className="m-6">{description}</p>
        <h2 className="mb-2">Example:</h2>
        <div className="border-l-2 pl-4">
          <p>
            <strong>Input:</strong> {exampleInput}
          </p>
          <p>
            <strong>Output:</strong> {exampleOutput}
          </p>
          <p>
            <strong>Explanation:</strong> {exampleExplanation}
          </p>
        </div>
      </div>
    </div>
  );
}
