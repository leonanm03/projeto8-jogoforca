import { useState } from "react";

export default function Letras(props) {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    return (
        <div className="letters">
            {alphabet.map((l) => (<ButtonLetter key={l} letter={l} runing={props.runing} setclicked={props.setclickedletter} />))}
        </div>
    );
}

function ButtonLetter(props) {

    const [clicked, SetClicked] = useState(0)

    function clickedButton() {
        SetClicked(1);
    }

    return (
        <button disabled={!props.runing ? true : clicked} onClick={clickedButton}
            className={!clicked ? "letterButtonEnabled" : "letterButtonDisabled"}>{props.letter}</button>
    )
}