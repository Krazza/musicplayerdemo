import './App.css';
import { useState } from 'react';
import nature from "./assets/nature.mp3";
import risk from "./assets/risk.mp3";
import weekends from "./assets/weekends.mp3";
import { PlayerControls } from './components/playerControls';
import { Tracklist } from './components/Tracklist';
import { MusicContext } from './contexts/MusicContext';

function App() {

    const [state, setState] = useState({
        audioPlayer: new Audio(),
        tracks: [
            {
                name: "Nature inspired music",
                file: nature
            },
            {
                name: "Risk inspired music",
                file: risk
            },
            {
                name: "Weekends inspired music",
                file: weekends
            }
        ],
        currentTrackIndex: null,
        isPlaying: false,
    })

    return (
        <MusicContext.Provider value = {[state, setState]}>
            <div className="App">
                <Tracklist/>
                <PlayerControls/>
            </div>
        </MusicContext.Provider>
    );
}

export default App;
