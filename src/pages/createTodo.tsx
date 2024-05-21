// import * as React from " react"
// import { useState } from "react"
import '../components/glace.css'
export default function CreateTodo() {
  // const [change, setChange] = useState(null)
  // const handleSubmit = () => {
  //   return (
  //     <></>
  //   )
  // }
  return (
    <div className="flex flex-col items-center justify-start h-screen p-4 bg-gray-300 shadow-xl glass-texture ">
      <h1 className="my-4 text-5xl font-bold text-white capitalize">create your todo</h1>
      <form className="items-start w-full text-lg font-medium text-blue-400 border-2 rounded-lg border-opacity-5 content-texture ">
        <div className="flex flex-col w-full h-full gap-2 px-4 py-2 backdrop-blur-sm ">
          <input type="text" placeholder="Task name here ..." className="px-4 bg-transparent rounded-lg " />
          <textarea placeholder="Description" className="w-full px-4 py-2 bg-transparent rounded-lg min-h-20" />
          <div className="flex flex-row items-center justify-between px-4">
            <span className="flex flex-row gap-x-3">
              <input type="date" className="px-2 text-blue-500 bg-transparent bg-gray-400 rounded-lg hover:bg-gray-800"/>
              <input type="time" className="px-2 text-blue-500 bg-transparent bg-gray-400 rounded-lg hover:bg-gray-800"/>
              <button className="px-2 text-gray-500 bg-transparent bg-yellow-400 rounded-lg hover:bg-gray-800">
                Assign To</button>
            </span>
            <span className="flex flex-row gap-x-3">
              <button className="px-2 text-blue-500 bg-gray-400 rounded-lg hover:bg-gray-800">Cancel</button>
              <button className="px-2 text-white bg-blue-500 rounded-lg hover:bg-blue-800">Add Todo</button>
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}