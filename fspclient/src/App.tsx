import { useState } from "react" 
import "./css/App.css"
import TopBar from "./components/TopBar"
import Soundtrack from "./components/Soundtrack"


function App() {
    return (
        <div>
            <div className="container-of-content">
                <TopBar />
                <Soundtrack title={"No. 7 - Reign"} image={"reign_image.png"} audio={"reign_audio.wav"} />
                <Soundtrack title={"No. 8 - Forts"} image={"forts_image.png"} audio={"forts_audio.wav"} />
                <Soundtrack title={"No. 9 - Spare"} image={"forts_image.png"} audio={"spare_audio.wav"} />
            </div>
        </div>
    )
}

export default App