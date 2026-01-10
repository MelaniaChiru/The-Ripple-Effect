import Tile from './Tile.jsx';
import House from '../../assets/images/house.png';
import './Grid.css';

function Grid({level, size}) {
    return (
        <section id='grid-section'>
            <h1>Level {level}</h1>
            <div id='tiles' style={{display: 'grid', gridTemplateColumns: `repeat(${size}, 100px)`, gridTemplateRows: `repeat(${size}, 100px)`, gap: '5px'}}>
                {/* {tiles.map((tile) => (
                    <Tile key={tile.name} id={tile.id} type={tile.type} imgPath={tile.imgPath} />
                ))} */}
                <Tile id="tile-1" type="house" imgPath={House} />
                <Tile id="tile-2" type="school" imgPath={House} />
                <Tile id="tile-3" type="park" imgPath={House} />
                <Tile id="tile-4" type="house" imgPath={House} />
            </div>
        </section>
    );
}

export default Grid;