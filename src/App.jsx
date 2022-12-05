import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Dashboard from "./Components/Dashboard/Dashboard"
import Reports from "./Components/Reports/Reports"
import NewTrade from "./Components/NewTrade/NewTrade"
import Trades from "./Components/Trades/Trades"
import Settings from "./Components/Settings/Settings"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">

        <Navbar/>
        <div className="App-Container">
          <Sidebar/>
          <div className="app-wrapper">
          <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/Reports" element={<Reports/>} />
        <Route path="/New-Trade" element={<NewTrade/>} />
        <Route path="/Trades" element={<Trades/>} />
        <Route path="/Settings" element={<Settings/>} />
      </Routes>
          </div>
      </div>
      
    </div>
  )
}

export default App
