import { useState } from 'react'
import '../styles/App.css'
import Homepage from './Homepage'
import LevelSelection from './LevelSelection'
import LevelComponent from './LevelComponent'

function App() {
  const [currentPage, setCurrentPage] = useState("level-1");  

  return (
    <>
      {currentPage == "homepage" && <Homepage setCurrentPage={setCurrentPage}/>}
      {currentPage == "level-selection" && <LevelSelection setCurrentPage={setCurrentPage}/>}
      {currentPage == "level-1" && <LevelComponent level="1" setCurrentPage={setCurrentPage}/>}
      {currentPage == "level-2" && <LevelComponent level="2" setCurrentPage={setCurrentPage}/>}
      {currentPage == "level-3" && <LevelComponent level="3" setCurrentPage={setCurrentPage}/>}
    </>
  )
}

export default App
