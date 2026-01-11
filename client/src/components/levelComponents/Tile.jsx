function Tile ({id, type, imgPath, fixed = false, highlighted = null}) {
    const handleDragStart = (e) => {
        // Don't allow dragging fixed tiles or empty tiles
        if (!imgPath || fixed) {
            e.preventDefault();
            return;
        }
        const payload = { type, imgPath, originId: id };
        e.dataTransfer.setData('application/json', JSON.stringify(payload));
        e.dataTransfer.effectAllowed = 'move';
    };

    const highlightClass = highlighted === 'negative' ? 'radius-highlight negative' : (highlighted === 'positive' ? 'radius-highlight positive' : '');
    const overlayClass = highlighted === 'negative' ? 'radius-overlay negative' : 'radius-overlay';

    const className = `tile ${fixed ? 'fixed' : ''} ${highlightClass}`;

    return (
        <div className={className} id={id} data-type={type ?? ''}>
            {imgPath ? (
                <img src={imgPath} alt={type} width={"50px"} draggable={!fixed} onDragStart={handleDragStart} />
            ) : (
                <div className="empty-placeholder" />
            )}
            {highlighted && <div className={overlayClass} aria-hidden />}
        </div>
    );
}

export default Tile;