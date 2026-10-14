import LocalStorage from "./component/LocalStorage"
import SessionStorage from "./component/SessionStorage";
import Cookie from "./component/Cookie";
import Popup from "./component/Popup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path="/local" element={<LocalStorage />}/>
          <Route path="/session" element={<SessionStorage />}/>
          <Route path="/Cookie" element={<Cookie />}/>
          <Route path="/Popup" element={<Popup />} />
      </Routes>
     </BrowserRouter>
      {/* <LocalStorage /> */}
      {/* <SessionStorage /> */}
    </>
  )
}

export default App
