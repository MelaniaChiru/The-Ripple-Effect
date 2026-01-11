import Grid from "./levelComponents/Grid";
import '../styles/LevelComponent.css'
import { useEffect, useState } from "react";

function LevelComponent({ level, setCurrentPage }) {
	const [levelInfo, setLevelInfo] = useState(null);
    const [showInfo, setShowInfo] = useState(true);

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

	function closeInfo(){
		setShowInfo(false);
	}

	return (
		<div className="level-component">
			<button className="back-arrow" onClick={() => setCurrentPage("level-selection")}>
                <span>&#11013;</span> <span>Back to levels</span>
            </button>
			<h1>Level {level}</h1>
			{levelInfo && <Grid levelInfo={levelInfo} />}

			{level == "1" && showInfo &&(
				<div className="modal-overlay">
					<div className="level-selection__pop-up">
						<h1>Level 1: The First Neighborhood</h1>
						<h2>To create a better world, we must provide for our citizens.</h2>

						<div className="pop-up__content">
							<ul>
								<li>🏡 Houses: These families are already settled. You <strong className="underline">cannot move them</strong>, but you can improve their lives!</li>
								<li>🌳 Parks: Nature is pure. Placing a Park anywhere <strong className="env">boosts the Environment</strong>. If a House is within <strong className="h">1 tile</strong>, its Happiness will rise.</li>
								<li>🏫 Schools: Education is vital, but building them takes a <strong className="env">toll on the Environment</strong>. However, their ripple is large! They boost Happiness for every House within <strong className="h">2 tiles</strong>.</li>
							</ul>
						</div>
						<button className="pop-up__close-btn" onClick={closeInfo}>
						Let's Begin
						</button>
					</div>
				</div>
			)}

			{level == "2" && showInfo &&(
				<div className="modal-overlay">
					<div className="level-selection__pop-up">
						<h1>Level 2: The Industrial Pulse</h1>
						<h2>As our world grows, so does our need for a thriving <strong>Economy</strong>. But progress often comes at a cost.</h2>

						<div className="pop-up__content">
							New Tiles:
							<ul>
								<li>
									🏭 Factory: Essential for wealth <strong>(+Economy)</strong>, but heavy on nature <strong>(-Environment)</strong>. Keep them away from people! They cause deep <strong>unhappiness</strong> to any house within <strong>1 tile</strong>.
								</li>
								<li>
									♻️ Recycling: A gift to the earth <strong>(+Environment)</strong>. People love living near sustainable hubs—it <strong>boosts happiness within 1 tile</strong>.
								</li>
								<li>
									🚌 Bus Stop: The ultimate connector. It helps the <strong>Economy</strong> and <strong>Environment</strong> globally, and its <strong>positive ripple</strong> is massive, reaching houses within <strong>3 tiles</strong>.
								</li>
							</ul>
						</div>
						<button className="pop-up__close-btn" onClick={closeInfo}>
						Let's Begin
						</button>
					</div>
				</div>
			)}

			{level == "3" && showInfo &&(
				<div className="modal-overlay">
					<div className="level-selection__pop-up">
						<h1>Level 3: The Power Dilema</h1>
						<h2>A thriving world requires immense power. How you generate that energy will define the legacy of your community.</h2>

						<div className="pop-up__content">
							New Tiles:
							<ul>
								<li>
									☢️ Power Plant: A powerhouse for the <strong className="econ">Economy</strong>, but it is the heaviest burden on the <strong className="env">Environment</strong>. Its shadow is long—residents within <strong>2 tiles</strong> will suffer a major <strong className="h">loss in Happiness</strong>.
								</li>
								<li>
									💨 Wind Turbine: The future of energy. It <strong className="env">heals the Environment</strong> and <strong className="econ">aids the Economy</strong>. While it generates less wealth than a plant, it produces <strong className="h">no negative</strong> ripples for your residents.
								</li>
							</ul>
						</div>
						<button className="pop-up__close-btn" onClick={closeInfo}>
						Let's Begin
						</button>
					</div>
				</div>
			)}
		</div>

	);
}

export default LevelComponent;