import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "../css/AudioPlayer.css";

export default function Soundtrack({ title, image, audio, reference, pauseOthers }:
    { title: string, image: string, audio: string, reference: React.RefObject<AudioPlayer>, pauseOthers: (reference: React.RefObject<AudioPlayer>) => void }) {

    return (
        <div className="soundtrack">
            <img className="soundtrack-image" src={`/public/images/${image}`} />
            <div>{title}</div>
            <AudioPlayer className="audio-player"
                src={`/public/audio/${audio}`}
                showJumpControls={false}
                ref={reference}
                onPlay={() => pauseOthers(reference) }
            />
        </div>
    )
}