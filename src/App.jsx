import './App.css';
import { useState } from 'react';
function App() {
  const buttonTemplate = {
    padding: '12px 24px',
    margin: '1em',
  };

  return (
    <div className="App">
      {/* Title Card Section */}
      <section className="Title">
        <h1>🎵 Media Player 🎵</h1>
        <h3>This media player is designed using React + Vite Environment</h3>
      </section>

      {/* Status Bar Section */}
      <section className="StatusBar">
        <h1 id="StatusScreen">Status</h1>
      </section>

      {/* Media Controls Section */}
      <section className="MediaControls">
        <button
          style={buttonTemplate}
          id="play"
          onClick={() => {
            console.log('Play Button Clicked');
          }}
        >
          Play
        </button>
        <button
          style={buttonTemplate}
          id="pause"
          onClick={() => {
            console.log('Pause Button Clicked');
          }}
        >
          Pause
        </button>
        <button
          style={buttonTemplate}
          id="reset"
          onClick={() => {
            console.log('Reset Button Clicked');
          }}
        >
          Reset
        </button>
      </section>
    </div>
  );
}

export default App;
