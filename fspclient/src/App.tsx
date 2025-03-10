import { useState } from "react" 
import "./App.css"
import TopBar from "./components/TopBar"
import Soundtrack from "./components/Soundtrack"


function App() {
    return (
        <div>
            <div className="container-of-content">
                <TopBar />
                <Soundtrack title={"7B Reign"} image={"reign_image.png"} />
                <Soundtrack title={"8N Forts"} image={"forts_image.png"} />
            </div>
        </div>
    )
}

export default App