import './App.css';
import { useRef, useState } from 'react';

import songs from './assets/songs/Adiye-MassTamilan.fm.mp3';

function App() {
  const [text, setText] = useState('Status');
  const statusBarReference = useRef();
  const audioRef = useRef();
  const playRef = useRef();
  const pauseRef = useRef();
  const resetRef = useRef();

  const buttonTemplate = {
    padding: '12px 24px',
    margin: '1em',
  };

  return (
    <div className="App">
      {/* Title Card Section demo */}
      <section className="Title">
        <h1>🎵 Media Player 🎵</h1>
        <h3>This media player is designed using React + Vite Environment</h3>
      </section>

      <section className="Audio">
        <audio src={songs} ref={audioRef}></audio>
      </section>

      {/* Status Bar Section */}
      <section className="StatusBr">
        <h1 id="StatusScreen" ref={statusBarReference}>
          {text}
        </h1>
      </section>

      {/* Media Controls Section */}
      <section className="MediaControls">
        <button
          style={buttonTemplate}
          id="play"
          ref={playRef}
          onClick={() => {
            console.log('Play Button Clicked');
            setText('Playing Music');
            statusBarReference.current.style.color = 'Green';
            audioRef.current.play();
            playRef.current.disabled = true;
            pauseRef.current.disabled = false;
            resetRef.current.disabled = true;
          }}
        >
          Play
        </button>

        <button
          style={buttonTemplate}
          id="pause"
          ref={pauseRef}
          onClick={() => {
            console.log('Pause Button Clicked');
            setText('Pausing Music');
            audioRef.current.pause();
            statusBarReference.current.style.color = 'Yellow';
            playRef.current.disabled = false;
            pauseRef.current.disabled = true;
            resetRef.current.disabled = false;
          }}
        >
          Pause
        </button>

        <button
          style={buttonTemplate}
          id="reset"
          ref={resetRef}
          onClick={() => {
            console.log('Reset Button Clicked');
            setText('Status');
            audioRef.current.currentTime = 0;
            statusBarReference.current.style.color = 'White';
            playRef.current.disabled = false;
            pauseRef.current.disabled = true;
            resetRef.current.disabled = true;
          }}
        >
          Reset
        </button>
      </section>
    </div>
  );
}

export default App;
