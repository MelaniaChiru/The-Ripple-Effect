function Tile ({id, type, imgPath, fixed = false}) {
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

    return (
        <div className={`tile ${fixed ? 'fixed' : ''}`} id={id} data-type={type ?? ''}>
            {imgPath ? (
                <img src={imgPath} alt={type} width={"50px"} draggable={!fixed} onDragStart={handleDragStart} />
            ) : (
                <div className="empty-placeholder" />
            )}
        </div>
    );
}

export default Tile;