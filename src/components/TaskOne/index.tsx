import { useRef } from "react"
import Requirments from "./Requirments"

export default function TaskOne() {
  const inputRef = useRef<any>()

  const handleSubmit = () => {
    if (
      // If input value not empty and is an integer,
      inputRef.current?.value !== "" &&
      Number.isInteger(Number(inputRef.current?.value))
    ) {
      // Set input style back to default
      // Wait for 0.05s so the style takes effect, then open the alert window
      inputRef.current.className =
        "bg-white border-2 border-sky-500 p-1 px-2 focus:border-green-400"
      setTimeout(() => {
        alert(inputRef.current?.value + " is an integer")
      }, 50)
    } else {
      // Otherwise, add animate-wiggle to input class list to make it shake for 0.5s
      // Then remove animate-wiggle so that it can keep shaking once the user enters invalid inputs
      // (I know it's a stupid hack, but it works so idc :D)
      inputRef.current.className =
        "bg-white border-2 border-rose-600 p-1 px-2 focus:border-green-400 animate-wiggle"
      setTimeout(() => {
        inputRef.current.className =
          "bg-white border-2 border-rose-600 p-1 px-2 focus:border-green-400"
      }, 500)
    }
  }

  return (
    <>
      <Requirments />
      <div className="flex flex-row items-center gap-3 mt-6">
        <input
          ref={inputRef}
          type="text"
          onKeyUp={() => {}}
          className="bg-white border-2 border-sky-500 p-1 px-2 focus:border-green-400"
        />
        <input
          type="submit"
          value="Check Integer"
          onClick={handleSubmit}
          className="btn btn-ghost bg-sky-500 p-1 px-2 rounded-md font-bold cursor-pointer"
        />
      </div>
    </>
  )
}
