import Header from "./components/Header"
import TaskOne from "./components/TaskOne"
import TaskTwo from "./components/TaskTwo"

function App() {
  return (
    <>
      <Header />
      <div className="p-3">
        <TaskOne />
        <br />
        <br />
        <TaskTwo />
      </div>
    </>
  )
}

export default App
