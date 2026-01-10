function Tile ({id, type, imgPath}) {
    return (
        <div className="tile" id={id} data-type={type}>
            <img src={imgPath} alt={type} />
        </div>
    );
}

export default Tile;