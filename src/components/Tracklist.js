import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMusicPlayer } from "../hooks/useMusicPlayer"

const Tracklist = () => {
    const music = useMusicPlayer();

    return(
        <div>
            {music.trackList.map((track, index) => ( 
            <div key={track.name}>
                <button onClick={() => music.playTrack(index)}>
                    {music.isPlaying && music.currentTrackIndex === index ? (<FontAwesomeIcon icon={faPause}/>) : (<FontAwesomeIcon icon={faPlay}/>)}
                </button>
                <div>{"Track playing:"} {track.name}</div>
            </div>) )}
        </div>
    )
}

export { Tracklist }