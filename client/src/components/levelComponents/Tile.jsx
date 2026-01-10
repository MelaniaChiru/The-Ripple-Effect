function Tile ({id, type, imgPath, posX, posY, effect}) {
    return (
        <div className="tile" id={id} data-type={type} data-effect={effect} style={{left: posX, top: posY}}>
            <img src={imgPath} alt={type} />
        </div>
    );
}

export default Tile;