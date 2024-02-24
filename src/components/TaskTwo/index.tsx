import Requirments from "./Requirments"

export default function TaskTwo() {
  return (
    <>
      <Requirments />
      <p className="mb-1 mt-8">
        You can click{" "}
        <a
          href="https://github.com/jimmynguyen1308/picket-code-test/tree/master/src/components/TaskTwo/Function"
          target="_blank"
          className="underline text-blue-700"
        >
          here
        </a>{" "}
        to see the files required for the task.
      </p>
      <p className="mb-1">
        To run the task, type "npm run test" to your terminal.
      </p>
    </>
  )
}
