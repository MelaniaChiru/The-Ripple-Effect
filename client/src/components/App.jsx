import { useState } from 'react'
import '../styles/App.css'
import Homepage from './Homepage'
import Grid from './levelComponents/Grid.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState("level");

  return (
    <>
      {currentPage == "homepage" && <Homepage setCurrentPage={setCurrentPage}/>}
      {currentPage == "level" && <Grid />}
    </>
  )
}

export default App
