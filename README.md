# The Ripple Effect
Players take on the role of a district architect tasked with building a thriving community. Unlike traditional city builders, every tile placed has an "Area of Effect" (Ripple) that impacts the surrounding environment. From public parks to private jets, players must navigate the complex trade-offs between resident happiness, environmental sustainability, and economic growth.


## 🏆 Game Jam Project
This project was conceptualized and developed during a Game Jam (Dingo Cegep Game Jam). The focus was on engineering a playable game within a strict 48-hour timeframe following a given theme ("A Better World").


## ✨ Features
* **Ripple System:** Real-time radius calculations to show how buildings like Schools or Factories affect residents.
* **Radius Visualization:**
   * All Browsers: Click a tile to see its active radius of influence on resident's happiness.
   * Firefox Exclusive: Real-time hover highlights, providing instant feedback on happiness impact before placement
* **Interactive Grid:** Drag-and-drop mechanics with hover-previews and invalid-drop animations.
* **Live Stats Engine:** A dynamic balancing system that calculates Happiness, Environment, and Economy based on tile placement and global level modifiers.
* **Progressive Difficulty:** 5 unique levels that introduce new tiles almost every level (Bus Stops, Power Plants, Factories, Golf Courses) which each have different effects.
* **Save & Resume:** Browser cookies to track level unlock progression.

## 🛠️ Tech Stack
* React.js
* Vite
* CSS3

## 🎬 Preview
Watch the gameplay preview below to see how tile placement affects the environment and happiness markers in real-time.

https://github.com/user-attachments/assets/9efa568f-7f4d-4a98-9964-6757dbc3be1b

## 🚀 Live Demo
You can play the latest version of the game [`here`](https://ripple.melaniachiru.dev).

## ⚙️ How to run
1. Clone the repository
   
   `git clone https://github.com/MelaniaChiru/The-Ripple-Effect.git`
   
2. Install dependencies
   
   ` cd client; npm install`
   
4. Run the project
   - To run in development mode: `npm run dev`
   - To run in production mode: `npm run build; npm run preview`
   
9. Navigate to local URL provided in your terminal __(usually `http://localhost:5173` for development mode, and `http://localhost:4173` for production mode)__

## 🏗️ Future Improvements
* **Cross-Browser radius hover-highlight:** Refactor the system to ensure a consistent hover experience all browsers (Chrome, Safari, etc.) not just Firefox.
* **Save & Resume:** Implement persistent state to allow players to leave a level and return exactly where they left off.
