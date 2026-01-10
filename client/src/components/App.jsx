import { useState } from 'react'
import '../styles/App.css'
import Homepage from './Homepage'
import LevelSelection from './LevelSelection'

function App() {
  const [currentPage, setCurrentPage] = useState("level-selection");

  return (
    <>
      {currentPage == "homepage" && <Homepage setCurrentPage={setCurrentPage}/>}
      {currentPage == "level-selection" && <LevelSelection setCurrentPage={setCurrentPage}/>}
    </>
  )
}

export default App
