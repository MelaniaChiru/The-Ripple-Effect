import { use, useEffect } from "react";
import Grid from "./levelComponents/Grid";

function LevelComponent({ level, setCurrentPage }) {
	let levelInfo;

	useEffect(() => {
		levelInfo = fetch("/api/level/" + level);
	}, []);

	return (
		<div>
			<button className="back-arrow" onClick={() => setCurrentPage("level-selection")}>
                <span>&#11013;</span> <span>Back to levels</span>
            </button>

			Level {level}
			<Grid />

		</div>
	);
}

export default LevelComponent;