import { useState } from "react";

export default function Letras(props) {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    return (
        <div className="letters">
            {alphabet.map((l) => (<ButtonLetter key={l} letter={l} setclicked={props.setclickedletter} />))}
        </div>
    );
}

function ButtonLetter(props) {

    const [clicked, SetClicked] = useState(0)

    function clickedButton() {
        console.log(props.setclicked)
        SetClicked(1);
        console.log(`${props.letter}`)

    }

    return (
        <button disabled={clicked} onClick={clickedButton}
            className={!clicked ? "letterButtonEnabled" : "letterButtonDisabled"}>{props.letter}</button>
    )
}