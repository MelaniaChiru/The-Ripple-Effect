function LevelComponent({ level, setCurrentPage }) {
	return (
		<div>
			<button className="back-arrow" onClick={() => setCurrentPage("level-selection")}>
                <span>&#11013;</span> <span>Back to levels</span>
            </button>

			Level {level}
		</div>
	);
}

export default LevelComponent;