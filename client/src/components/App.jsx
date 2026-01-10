import { useState } from 'react'
import '../styles/App.css'
import Homepage from './Homepage'

function App() {
  const [currentPage, setCurrentPage] = useState("homepage");

  return (
    <>
      {currentPage == "homepage" && <Homepage setCurrentPage={setCurrentPage}/>}
      <Grid />
    </>
  )
}

export default App
