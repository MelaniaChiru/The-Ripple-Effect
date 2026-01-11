import { useEffect, useState } from 'react';
import '../styles/LevelSelection.css';
import LevelSelectionTile from './LevelSelectionTile';

function LevelSelection({ setCurrentPage }) {
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
                    const parsed = JSON.parse(c.substring(name.length, c.length)) || {};
                    // normalize older format: { saved:..., completed: { "1": true } }
                    if (parsed && typeof parsed === 'object') {
                        if (parsed.completed && typeof parsed.completed === 'object') return parsed.completed;
                        const filtered = {};
                        for (const k of Object.keys(parsed)) {
                            if (parsed[k] === true) filtered[k] = true;
                        }
                        return filtered;
                    }
                    return null;
                } catch (e) {
                    console.error("Error parsing cookie JSON:", e);
                    return null;
                }
            }
        }
        return null;
    } 

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
        return savedData || { "1": true};
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
        </div>
    );
}
export default LevelSelection;