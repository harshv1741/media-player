import './App.css';

function App() {
  const buttonTemplate = {
    padding: '12px 24px',
    margin: '1em',
  };

  return (
    <div className="App">
      <section className="Title">
        <h1>🎵 Media Player 🎵</h1>
        <h3>This media player is designed using React + Vite Environment</h3>
      </section>

      <section className="StatusBar">
        <h1 id="StatusScreen">Status</h1>
      </section>

      <section className="MediaControls">
        <button style={buttonTemplate} id="play">
          Play
        </button>
        <button style={buttonTemplate} id="pause">
          Pause
        </button>
        <button style={buttonTemplate} id="reset">
          Reset
        </button>
      </section>
    </div>
  );
}

export default App;
