import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "../css/AudioPlayer.css";

export default function Soundtrack({ title, image, audio }: { title: string, image: string, audio: string }) {

    return (
        <div className="soundtrack">
            <img className="soundtrack-image" src={`/src/assets/images/${image}`} />
            <div>{title}</div>
            <AudioPlayer className="audio-player"
                src={`/src/assets/audio/${audio}`}
                showJumpControls={false}
            />
        </div>
    )
}