import '../styles/Homepage.css'

const Homepage = ({setCurrentPage}) => {
  return (
    <div className="homepage">
      {/* Animated Ripple Background */}
      <div className="ripple-background">
        <div className="ripple"></div>
        <div className="ripple"></div>
        <div className="ripple"></div>
      </div>

      {/* Main Content */}
      <main className="home-content">
        <div className="headings-wrapper">
          <h1>
            THE <br /> RIPPLE <br /> EFFECT
          </h1>
          <h2>Balance is key</h2>
        </div>

        <button className="homepage__button" onClick={()=>{setCurrentPage("level-selection")}}>
          Start Playing
        </button>
      </main>

	  {/* Footer */}
	  <footer>
		&copy; 2026 | Melania Chiru, Sungeun Kim, Ash Rebelo
	  </footer>
    </div>
  );
};

export default Homepage;