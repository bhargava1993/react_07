import { useRef } from "react";

function Focus() {
    const inputRef = useRef(null);
    const cityRef = useRef(null);

    function HandleFocus() {
        console.log("HandleFocus----",);
        // inputRef.current.focus();
        document.getElementById("id1").focus();
    }

    function HandleCityFocus() {
        console.log("HandleCityFocus-------")
        cityRef.current.focus();
    }
    return (
        <>
            <h3>Focus component</h3>
            <label>Name:</label>
            <input
                type="text"
                placeholder="enter name"
                ref={inputRef}
                id="id1" />

            <input
                type="City"
                placeholder="enter city"
                ref={cityRef}
            />

            <button onClick={HandleFocus}>Focus Input</button>

            <button onClick={HandleCityFocus}>City Input</button>
        </>
    )
}

export default Focus;