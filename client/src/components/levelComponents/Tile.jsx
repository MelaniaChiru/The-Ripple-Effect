function Tile ({id, type, imgPath}) {
    const handleDragStart = (e) => {
        // Only start drag if this tile has an image (i.e., not empty)
        if (!imgPath) {
            e.preventDefault();
            return;
        }
        const payload = { type, imgPath, originId: id };
        e.dataTransfer.setData('application/json', JSON.stringify(payload));
        e.dataTransfer.effectAllowed = 'move';
    };

    return (
        <div className="tile" id={id} data-type={type ?? ''}>
            {imgPath ? (
                <img src={imgPath} alt={type} width={"50px"} draggable={true} onDragStart={handleDragStart} />
            ) : (
                <div className="empty-placeholder" />
            )}
        </div>
    );
}

export default Tile;