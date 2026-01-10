import LockIcon from '../assets/icons/lock-icon.svg';

function LevelSelectionTile({ levelId, isUnlocked, index, onClick }) {
    const sideClass = index % 2 === 0 ? "left-side" : "right-side";

    return (
        <div className={`level-node-wrapper ${sideClass}`} onClick={onClick} data-level={index + 1}>
            <div className={`level-circle ${isUnlocked ? 'unlocked active-ripple' : 'locked'}`}>
                {isUnlocked ? (
                    <div className="level-text">
                        <span className="level-label">Level {levelId}</span>
                    </div>
                ) : (
                    <img src={LockIcon} alt="Locked" className="lock-icon-img" />
                )}
            </div>
        </div>
    );
}

export default LevelSelectionTile;