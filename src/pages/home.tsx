import { useState } from 'react'
import '../components/glace.css'
export default function Home() {
  const [checked, setChecked] = useState(false);
  const [popUp, setPopUp] = useState(false)
  // const [visibility, setVisibility] = useState('')
  const handlechecked = () => {
    setChecked(!checked);
  }
  const handlePopUp = () => {
    setPopUp(!popUp)
  }


  return (
    <div className="flex items-start justify-center w-full h-screen px-2 bg-gray-300 pt:-10 glass-texture md:px-[10rem]"  >
      <div className="w-full ">
        <h2 className='pt-5 text-lg font-bold text-green-500'>Today Task</h2>
        <ul className='w-full'>
          <li className="relative flex flex-col items-center justify-center w-full gap-10 mb-2 text-center text-black border-2 rounded-md shadow-xl content-texture bg-opacity-5 hover:border-green-500 md:flex-row">
            <div className="relative flex flex-col items-center justify-center w-full gap-10 p-4 text-center rounded-md backdrop-blur-sm md:flex-row">
              <span className='w-full'>
                <div className='w-full py-2 font-serif text-lg font-bold rounded-lg '>12hr / 13hr:30m</div>
                <div className='w-full py-2 font-serif text-lg font-bold rounded-lg '>12/05/2024</div>
                
              </span>
              {!checked ? <p className="w-full text-lg font-bold">here is my text all good bro</p> : <s className="w-full text-lg font-bold"> here is my text all good bro</s>}
              <div className='flex flex-row items-center justify-between w-full md:justify-end md:gap-4'>
                {
                  checked ? <button className="px-2 py-1 bg-green-500 rounded-lg hover:bg-gray-500" onClick={() => handlechecked()}>Complited</button> : <button className="px-4 py-1 border rounded-lg hover:bg-green-500" onClick={() => {
                    handlechecked()
                  }}>Done</button>
                }
                <button className='flex flex-row items-center justify-center gap-1 p-2 align-middle rounded-lg bg-slate-700' onClick={() => handlePopUp()}>
                  {
                    popUp &&
                    <div className='absolute -right-[2.5rem] -bottom-14 bg-white shadow-lg p-2 rounded-lg  border-gray-500 border'>
                      <ul className='flex flex-col items-start justify-start'>
                        <li className='w-full px-1 text-red-700 rounded-lg text-start hover:border-green-500 hover:border'>Delete</li>
                        <li className='w-full px-1 text-green-600 rounded-lg text-start hover:border-green-500 hover:border'>Edit</li>
                        <li className='w-full px-1 text-blue-700 rounded-lg text-start hover:border-green-500 hover:border '>Assigned</li>
                      </ul>
                    </div>
                  }
                  <span className="w-1 h-1 text-2xl font-bold text-center bg-white rounded-full hover:bg-gray-500"></span>
                  <span className="w-1 h-1 text-2xl font-bold text-center bg-white rounded-full hover:bg-gray-500"></span>
                  <span className="w-1 h-1 text-2xl font-bold text-center bg-white rounded-full hover:bg-gray-500"></span>
                </button>
              </div>
            </div>
          </li>
          <hr />
        </ul>
      </div>

    </div>
  )
}