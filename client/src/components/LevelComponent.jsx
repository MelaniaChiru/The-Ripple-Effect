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

			{level == "1" && (
				<div className="modal-overlay">
					<div className="level-selection__pop-up">
						<h1>Level 1: The First Neighborhood</h1>
						<h2>To create a better world, we must provide for our citizens.</h2>

						<div className="pop-up__content">
							<ul>
								<li>🏡 Houses: These families are already settled. You <strong>cannot move them</strong>, but you can improve their lives!</li>
								<li>🌳 Parks:Nature is pure. Placing a Park anywhere <strong>boosts the Environment</strong>. If a House is within <strong>1 tile</strong>, its Happiness will rise.</li>
								<li>🏫 Schools: Education is vital, but building them takes a <strong>toll on the Environment</strong>. However, their ripple is large! They boost Happiness for every House within <strong>2 tiles</strong>.</li>
							</ul>
						</div>
						<button className="pop-up__close-btn" onClick={()=>{console.log("Close")}}>
						Let's Begin
						</button>
					</div>
				</div>
			)}
		</div>

	);
}

export default LevelComponent;