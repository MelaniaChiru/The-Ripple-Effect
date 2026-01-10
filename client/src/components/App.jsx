import { useState } from 'react'
import '../styles/App.css'
import Homepage from './Homepage'

function App() {
  const [currentPage, setCurrentPage] = useState("homepage");

  return (
    <>
      {currentPage == "homepage" && <Homepage setCurrentPage={setCurrentPage}/>}
      <Grid level={1} size={6} />
    </>
  )
}

export default App
