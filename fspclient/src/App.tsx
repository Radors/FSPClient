import { useState } from "react" 
import "./css/App.css"
import TopBar from "./components/TopBar"
import Soundtrack from "./components/Soundtrack"


function App() {
    return (
        <div>
            <div className="container-of-content">
                <TopBar />
                <Soundtrack title={"No. 7 - Reign"} image={"reign.png"} audio={"reign.wav"} />
                <Soundtrack title={"No. 8 - Forts"} image={"forts.png"} audio={"forts.wav"} />
                <Soundtrack title={"No. 11 - Drift"} image={"drift.png"} audio={"drift.wav"} />
            </div>
        </div>
    )
}

export default App