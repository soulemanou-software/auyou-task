import Home from "./pages/home"
// import { useNavigate } from "react-router-dom"
import { Route, Routes, Link, BrowserRouter } from "react-router-dom"
import CreateTodo from "./pages/createTodo"
import UpdateTodo from "./pages/updateTodo"
import ComplitedTodo from "./pages/complitedTodo"
import History from "./pages/history"
function App() {
  // const Naviate = useNavigate();

  return (
    <BrowserRouter>
      <nav className="bg-blue-500 py-2 w-full h-auto">
        <h1 className="text-center text-4xl font-bold text-white">AUYOU TODO</h1>
        <ul className="flex flex-row  text-md font-medium justify-center gap-5 py-10 items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
          <li className="">
            <Link to="/complited">Complited</Link>
          </li>
          <li>
            <Link to="/create">Create Todo</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateTodo />} />
        <Route path="/update" element={<UpdateTodo />} />
        <Route path="/history" element={<History />} />
        <Route path="/complited" element={<ComplitedTodo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
