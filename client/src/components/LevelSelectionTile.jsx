import LockIcon from '../assets/icons/lock-icon.svg';

function LevelSelectionTile({ level, index }) {
  // Determine if it's shifted left or right for the winding effect
  const sideClass = index % 2 === 0 ? "left-side" : "right-side";
  const isUnlocked = true;
  
  return (
    <div className={`level-node-wrapper ${sideClass}`}>
      <div 
        className={`level-circle ${level.status} ${isUnlocked ? 'active-ripple' : 'locked'}`}
      >

		{isUnlocked && <div className="level-text">
            <span className="level-label">Level {index + 1}</span>
          </div>}

        {!isUnlocked && 
		<img 
            src={LockIcon} 
            alt="Icons of a locked lock" 
            className="lock-icon" 
          />
		  }
      </div>
    </div>
  );
}

export default LevelSelectionTile;