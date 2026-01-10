import { useEffect } from "react";
import Grid from "./levelComponents/Grid";
import '../styles/LevelComponent.css'

function LevelComponent({ level, setCurrentPage }) {
	let levelInfo;

	useEffect(() => {
		levelInfo = fetch("/api/level/" + level);
	}, []);

	return (
		<div className="level-component">
			<button className="back-arrow" onClick={() => setCurrentPage("level-selection")}>
                <span>&#11013;</span> <span>Back to levels</span>
            </button>
			<Grid />

		</div>
	);
}

export default LevelComponent;