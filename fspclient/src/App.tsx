import { useRef } from "react" 
import "./css/App.css"
import TopBar from "./components/TopBar"
import Soundtrack from "./components/Soundtrack"
import AudioPlayer from "react-h5-audio-player";


function App() {
    const ref1 = useRef<AudioPlayer>(null);
    const ref2 = useRef<AudioPlayer>(null);
    const ref3 = useRef<AudioPlayer>(null);
    const refs = [ref1, ref2, ref3]

    function OnPauseOthers(reference: React.RefObject<AudioPlayer>) {
        refs.forEach((ref) => {
            if (ref !== reference) {
                ref.current?.audio.current?.pause();
            }
        });
    }

    return (
        <div>
            <div className="container-of-content">
                <TopBar />
                <Soundtrack title={"No. 7 - Reign"} image={"reign.png"} audio={"reign.mp3"} reference={ref1} pauseOthers={OnPauseOthers} />
                <Soundtrack title={"No. 8 - Forts"} image={"forts.png"} audio={"forts.mp3"} reference={ref2} pauseOthers={OnPauseOthers} />
                <Soundtrack title={"No. 11 - Stray"} image={"stray.png"} audio={"stray.mp3"} reference={ref3} pauseOthers={OnPauseOthers} />
            </div>
        </div>
    )
}

export default App