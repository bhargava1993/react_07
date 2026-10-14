import { useState } from "react";
import './Popup.css'

function Popup() {
    const [showPopup, SetShowPopup] = useState(false);

    console.log("showPopup-----", showPopup)

    return (
        <>
            <button onClick={() => SetShowPopup(true)}>
                Open Popup
            </button>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h3>Hello</h3>
                        <p>Today is saturday</p>
                        <button onClick={() => SetShowPopup(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}


            <button className="tooptip-container">Hover me</button>
            <sapn className="tooltip">This is tooltip</sapn>
        </>
    )
}

export default Popup;