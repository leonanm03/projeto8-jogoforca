import { useState } from "react";

export default function Chute(props) {

    const [risk, setRisk] = useState("")


    function riskWord() {
        let word = props.word;
        props.setdashArray(props.word.split(""))
        props.setDone(1);
        props.setRuning(0)
        if (word !== risk) {
            props.setErrors(6);
        }
    }

    return (
        <div className="risk">
            <span className="jaSei"> Já sei a palavra</span>
            <input data-test="guess-input" disabled={!props.runing} onChange={(e) => setRisk(e.target.value)} type="text" className="riskInput"></input>
            <button data-test="guess-button" disabled={!props.runing} className="riskButton" onClick={riskWord} >Chutar</button>

        </div>
    );
}