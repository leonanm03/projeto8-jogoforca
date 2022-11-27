import { useState } from "react";

export default function Letras(props) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <div className="letters">
            {alphabet.map((l) => (<ButtonLetter
                key={l} letter={l} runing={props.runing}
                word={props.word} dashArray={props.dashArray} setdashArray={props.setdashArray}
                errors={props.errors} setErrors={props.setErrors} setDone={props.setDone} setRuning={props.setRuning}
            />))}
        </div>
    );
}

function ButtonLetter(props) {

    const [clicked, SetClicked] = useState(0)

    function clickedButton() {
        SetClicked(1);

        let word = props.word;
        const letter = props.letter
        let dashArray = [...props.dashArray];
        let setdashArray = props.setdashArray;

        if (word.includes(letter)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] === letter) {
                    dashArray[i] = letter;
                    setdashArray(dashArray);
                }
            }
            if (!dashArray.includes("_")) {
                props.setDone(1);
                props.setRuning(0)
            }
        } else {
            let errors = props.errors + 1;
            props.setErrors(errors);

            if (errors === 6) {
                props.setRuning(0)
                props.setDone(1);
                setdashArray(word.split(""))
            }
        }


    }

    return (
        <button data-test="letter" disabled={!props.runing ? true : clicked} onClick={clickedButton}
            className={props.runing && !clicked ? "letterButtonEnabled" : "letterButtonDisabled"}>{props.letter.toUpperCase()}</button>
    )
}