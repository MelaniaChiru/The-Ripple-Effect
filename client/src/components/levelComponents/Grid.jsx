import Tile from './Tile.jsx';
import House from '../../assets/images/house.png';
import '../../styles/grid.css';

function Grid() {
    const size = 6
    const tiles = document.getElementById('tiles');
    tiles.addEventListener('click', (e) => {
        if (e.target && e.target.matches('img')) {
            const tile = e.target.parentNode;
            console.log(`Tile ID: ${tile.id}, Type: ${tile.getAttribute('data-type')}`);
        }
    });

    return (
        <section id='grid-section'>
            <div id='tiles' style={{display: 'grid', gridTemplateColumns: `repeat(${size}, 65px)`, gridTemplateRows: `repeat(${size}, 65px)`}}>
                {/* {tiles.map((tile) => (
                    <Tile key={tile.name} id={tile.id} type={tile.type} imgPath={tile.imgPath} />
                ))} */}
                <Tile id="tile-1" type="house" imgPath={House} />
                <Tile id="tile-2" type="school" imgPath={House} />
                <Tile id="tile-3" type="park" imgPath={House} />
                <Tile id="tile-4" type="house" imgPath={House} />
                <Tile id="tile-5" type="park" imgPath={House} />
                <Tile id="tile-6" type="house" imgPath={House} />
                <Tile id="tile-7" type="school" imgPath={House} />
                <Tile id="tile-8" type="house" imgPath={House} />
                <Tile id="tile-9" type="park" imgPath={House} />
                <Tile id="tile-10" type="house" imgPath={House} />
                <Tile id="tile-11" type="school" imgPath={House} />
                <Tile id="tile-12" type="park" imgPath={House} />
                <Tile id="tile-13" type="house" imgPath={House} />
                <Tile id="tile-14" type="park" imgPath={House} />
                <Tile id="tile-15" type="house" imgPath={House} />
                <Tile id="tile-16" type="school" imgPath={House} />
                <Tile id="tile-17" type="park" imgPath={House} />
                <Tile id="tile-18" type="house" imgPath={House} />
                <Tile id="tile-19" type="school" imgPath={House} />
                <Tile id="tile-20" type="park" imgPath={House} />
                <Tile id="tile-21" type="house" imgPath={House} />
                <Tile id="tile-22" type="school" imgPath={House} />
                <Tile id="tile-23" type="park" imgPath={House} />
                <Tile id="tile-24" type="house" imgPath={House} />
                <Tile id="tile-25" type="park" imgPath={House} />
                <Tile id="tile-26" type="house" imgPath={House} />
                <Tile id="tile-27" type="school" imgPath={House} />
                <Tile id="tile-28" type="house" imgPath={House} />
                <Tile id="tile-29" type="park" imgPath={House} />
                <Tile id="tile-30" type="house" imgPath={House} />
                <Tile id="tile-31" type="school" imgPath={House} />
                <Tile id="tile-32" type="park" imgPath={House} />
                <Tile id="tile-33" type="house" imgPath={House} />
                <Tile id="tile-34" type="park" imgPath={House} />
                <Tile id="tile-35" type="house" imgPath={House} />
                <Tile id="tile-36" type="school" imgPath={House} />
            </div>
        </section>
    );
}

export default Grid;