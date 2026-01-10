import Grid from "./levelComponents/Grid";
import '../styles/LevelComponent.css'
import { useEffect, useState } from "react";

function LevelComponent({ level, setCurrentPage }) {
	const [levelInfo, setLevelInfo] = useState(null);
	useEffect(() => {
		async function fetchLevel() {
			try {
				const response = await fetch(`/api/levels/${level}`);
				const data = await response.json();
				setLevelInfo(data);
			} catch (error) {
				console.error("Error fetching level data:", error);
			}
		}
		fetchLevel();
	}, [level]);

	return (
		<div className="level-component">
			<button className="back-arrow" onClick={() => setCurrentPage("level-selection")}>
                <span>&#11013;</span> <span>Back to levels</span>
            </button>
			<h1>Level {level}</h1>
			{levelInfo && <Grid levelInfo={levelInfo} />}

		</div>
	);
}

export default LevelComponent;