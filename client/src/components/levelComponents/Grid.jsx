import React, { useState } from 'react';
import Tile from './Tile.jsx';
import Palette from './Palette.jsx';
import House from '../../assets/images/house.png';
import Park from '../../assets/images/park.png';
import School from '../../assets/images/school.png';
import '../../styles/grid.css';

function Grid({levelInfo}) {
    const GRID_SIZE = 6; // grid is always 6x6 per requirements
    const rows = GRID_SIZE;
    const cols = GRID_SIZE;

    // Build initial tiles with pre-placed (fixed) tiles from levelInfo
    const initialTiles = Array.from({ length: rows * cols }).map((_, i) => ({
        id: `tile-${i + 1}`,
        type: null,
        imgPath: null,
        fixed: false,
    }));

    // Place pre-placed tiles according to levelInfo.tiles positions
    const levelTiles = levelInfo?.tiles || [];

    // Map type -> number of available (unplaced) tiles
    const computeCounts = () => {
        const counts = {};
        for (const t of levelTiles) {
            const type = t.type;
            const pos = t.position || { r: -1, c: -1 };
            const r = pos.r ?? -1;
            const c = pos.c ?? -1;
            // treat as available if not placed within the 6x6 grid
            if (r < 1 || c < 1 || r > GRID_SIZE || c > GRID_SIZE) {
                counts[type] = (counts[type] || 0) + 1; // available to be placed
            }
        }
        return counts;
    }; 

    // helper to map a type to an image asset (fallback to House)
    const getImageForType = (type) => {
        switch (type) {
            case 'house': return House;
            case 'park': return Park;
            case 'school': return School;
            default: return House;
        }
    };

    const seededTiles = initialTiles.map((cell, idx) => {
        const r = Math.floor(idx / cols) + 1;
        const c = (idx % cols) + 1;
        // find a level tile that has this position
        const match = levelTiles.find((lt) => (lt.position?.r === r && lt.position?.c === c));
        if (match) {
            return {
                ...cell,
                type: match.type,
                imgPath: getImageForType(match.type),
                fixed: true,
            };
        }
        return cell;
    });

    const [tiles, setTiles] = useState(seededTiles);
    const [counts, setCounts] = useState(computeCounts());

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDragEnter = (e) => {
        const tile = e.target.closest('.tile');
        if (tile) tile.classList.add('drag-over');
    };

    const handleDragLeave = (e) => {
        const tile = e.target.closest('.tile');
        if (tile) tile.classList.remove('drag-over');
    };

    const flashInvalid = (tileEl) => {
        if (!tileEl) return;
        tileEl.classList.add('invalid-drop');
        setTimeout(() => tileEl.classList.remove('invalid-drop'), 300);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('application/json') || e.dataTransfer.getData('text');
        let payload;
        try {
            payload = JSON.parse(data);
        } catch (err) {
            payload = { type: data };
        }
        const tileEl = e.target.closest('.tile');
        if (!tileEl) return;
        const targetId = tileEl.id;

        // prevent dropping onto fixed tile
        const targetTile = tiles.find((t) => t.id === targetId);
        if (targetTile?.fixed) {
            flashInvalid(tileEl);
            tileEl.classList.remove('drag-over');
            return;
        }

        // if coming from palette (originId === null) -> copy, must have counts
        if (payload.originId === null || payload.originId === undefined) {
            const available = counts[payload.type] || 0;
            if (available <= 0) {
                flashInvalid(tileEl);
                tileEl.classList.remove('drag-over');
                return;
            }

            // if target has an existing non-fixed tile, return it to counts
            const previousType = targetTile?.type;
            setTiles((prev) => prev.map((t) => (t.id === targetId ? { ...t, type: payload.type, imgPath: payload.imgPath ?? getImageForType(payload.type) } : t)));

            setCounts((prev) => {
                const next = { ...prev, [payload.type]: (prev[payload.type] || 1) - 1 };
                if (previousType) next[previousType] = (next[previousType] || 0) + 1;
                return next;
            });

        } else {
            // moving from another tile within the grid
            const originId = payload.originId;
            if (originId === targetId) {
                tileEl.classList.remove('drag-over');
                return;
            }

            setTiles((prev) => prev.map((t) => {
                const originTile = prev.find((p) => p.id === originId);
                const targetTileLocal = prev.find((p) => p.id === targetId);

                // swap types between origin and target
                if (t.id === targetId) return { ...t, type: originTile?.type ?? null, imgPath: originTile?.imgPath ?? null };
                if (t.id === originId) return { ...t, type: targetTileLocal?.type ?? null, imgPath: targetTileLocal?.imgPath ?? null };
                return t;
            }));
        }

        tileEl.classList.remove('drag-over');
    };

    const handleClick = (e) => {
        if (e.target && e.target.matches('img')) {
            const tile = e.target.parentNode;
            console.log(`Tile ID: ${tile.id}, Type: ${tile.getAttribute('data-type')}`);
        }
    }; 

    return ( 
        <section id='grid-section'>
            <Palette counts={counts} />
            <div id='tiles' onDragOver={handleDragOver} onDrop={handleDrop} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onClick={handleClick} style={{display: 'grid', gridTemplateColumns: `repeat(${cols}, 65px)`, gridTemplateRows: `repeat(${rows}, 65px)`, gap: '6px'}}>
                {tiles.map((tile) => (
                    <Tile key={tile.id} id={tile.id} type={tile.type} imgPath={tile.imgPath} fixed={tile.fixed} />
                ))}
            </div>
        </section>
    );
}

export default Grid;