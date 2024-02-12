import "./App.css"
import { Sidebar } from "./Components/Sidebar"
import { Topbar } from "./Components/Topbar"
import { VideoGrid } from "./Components/VideoGrid"

function App() {
  return (
    <div className="flex">
      <div>
        <div className="fixed top-0 left-0 right-0">
          <Topbar></Topbar>
        </div>
        <div className="pt-20">
          <VideoGrid></VideoGrid>
        </div>
      </div>
    </div>
  )
}

export default App
