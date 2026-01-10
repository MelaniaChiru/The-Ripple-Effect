import '../styles/LevelSelection.css';
import LevelSelectionTile from './LevelSelectionTile';

function LevelSelection({ setCurrentPage }) {
	const levelsArr = [1, 2, 3];

  return (
    <div className="level-selection-screen">
      <button className="back-arrow" onClick={() => setCurrentPage("homepage")}>
        &#11013; Back
      </button>

      <div className="levels-container">
		<div className="levels-container-wrapper">
			{levelsArr.map((level, i) => (
			<LevelSelectionTile 
				key={i}
				level={level}
				index={i}
			/>
			))}
		</div>
      </div>
    </div>
  );
}

export default LevelSelection;