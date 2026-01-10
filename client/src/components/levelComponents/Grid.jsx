import Tile from './Tile.jsx';

function Grid({tiles}) {
    return (
        <>
            <h1>Grid</h1>
            <div className="grid">
                {tiles.map((tile) => (
                    <Tile key={tile.name} id={tile.id} type={tile.type} imgPath={tile.imgPath} />
                ))}
            </div>
        </>
    );
}

export default Grid;