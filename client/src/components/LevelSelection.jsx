import { useEffect, useState } from 'react';
import '../styles/LevelSelection.css';
import LevelSelectionTile from './LevelSelectionTile';

function LevelSelection({ setCurrentPage, showIntro, setShowIntro }) {
    const levelsArr = [1, 2, 3];

    // --- COOKIE HELPERS (Moved to top for safety) ---
    const readProgressFromCookie = () => {
        const name = "game_progress=";
        const decodedCookie = decodeURIComponent(window.document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(name) === 0) {
                try {
                    return JSON.parse(c.substring(name.length, c.length));
                } catch (e) {
					console.error("An error occured:", e);
                    return null;
                }
            }
        }
        return null; 
    };

    const saveLevelProgress = (completedLevels) => {
        const key = "game_progress";
        const value = JSON.stringify(completedLevels);
        const date = new Date();
        date.setTime(date.getTime() + (60 * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        window.document.cookie = `${key}=${value}; ${expires}; path=/; SameSite=Lax`;
    };

    const [progress] = useState(() => {
        const savedData = readProgressFromCookie();
        return savedData || { "1": true, "2": false, "3": false };
    });

    // 2. SYNC EFFECT: Only writes to cookie if it's missing
    useEffect(() => {
        if (!readProgressFromCookie()) {
            saveLevelProgress(progress);
        }
    }, [progress]);


	function onLevelSelectHandler(e) {
		const container = e.currentTarget;
		const levelId = container.getAttribute('data-level');
		
		if (levelId) {
			setCurrentPage(`level-${levelId}`);
		}
	}

    function closeIntro(){
        setShowIntro(false);
    }

    return (
        <div className="level-selection-screen">
            <button className="back-arrow" onClick={() => setCurrentPage("homepage")}>
                <span>&#11013;</span> <span>Back</span>
            </button>

            <div className="levels-container">
                <div className="levels-container-wrapper">
                    {levelsArr.map((id, i) => (
                        <LevelSelectionTile 
                            key={id}
                            levelId={id}
                            // String(id) ensures it matches "1", "2", etc.
                            isUnlocked={progress[String(id)] === true} 
                            index={i}
							onClick={(e)=>(onLevelSelectHandler(e))}
                        />
                    ))}
                </div>
            </div>

            {showIntro && (
                <div className="modal-overlay">
                    <div className="level-selection__pop-up">
                        <h1>Welcome to A Better World</h1>
                        <h2>Success isn't measured by how much we build, but by how well we live together.</h2>
                        
                        <div className="pop-up__content">
                        <p>
                            In <strong>The Ripple Effect</strong>, you are the architect of harmony. 
                            Every choice you make sends waves through the community.
                        </p>

                        <h3>How to Play</h3>
                        <ul>
                            <li><strong>Place Tiles:</strong> Drag elements from your palette onto the grid to change the world.</li>
                            <li><strong>Watch the Ripples:</strong> Pay close attention to where you place your tiles. Positive connections create growth; negative ones cause friction.</li>
                            <li><strong>Find the Harmony:</strong> Your goal isn't to maximize one stat, but to find balance.</li>
                            <li><strong>Your Mission:</strong> Bring the stats into the <span>Golden Zone (75–100)</span>. If one gets too low, the harmony is broken.</li>
                        </ul>
                        </div>

                        <button className="pop-up__close-btn" onClick={closeIntro}>
                        Let's Begin
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default LevelSelection;