import { useState } from 'react'
import '../styles/App.css'
import Homepage from './Homepage'
import LevelSelection from './LevelSelection'
import LevelComponent from './LevelComponent'

function App() {
  const [currentPage, setCurrentPage] = useState("level-3");  
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {currentPage == "homepage" && <Homepage setCurrentPage={setCurrentPage}/>}
      {currentPage == "level-selection" && <LevelSelection setCurrentPage={setCurrentPage} showIntro={showIntro} setShowIntro={setShowIntro}/>}
      {currentPage == "level-1" && <LevelComponent level="1" setCurrentPage={setCurrentPage}/>}
      {currentPage == "level-2" && <LevelComponent level="2" setCurrentPage={setCurrentPage}/>}
      {currentPage == "level-3" && <LevelComponent level="3" setCurrentPage={setCurrentPage}/>}

      <div className="small-screen-blocker">
        <h1>To Create A Better World You Need A Bigger Canvas</h1>
          <p>
            To manage the delicate balance of the community and see the ripples of your choices, a larger screen is required. Please switch to a desktop to play The Ripple Effect.
          </p>
      </div>
    </>
  )
}

export default App
