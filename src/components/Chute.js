import { useState } from "react";

export default function Chute(props) {

    const [risk, setRisk] = useState("")


    function riskWord() {
        let word = props.word;
        if (word === risk) {
            alert("Você acertou!");
        } else {
            props.setErrors(6);
            setTimeout(() => {
                alert("Você perdeu!");
                window.location.reload();
            }, 500);
        }
    }

    return (
        <div className="risk">
            <span className="jaSei"> Já sei a palavra</span>
            <input disabled={!props.runing} onChange={(e) => setRisk(e.target.value)} type="text" className="riskInput"></input>
            <button disabled={!props.runing} className="riskButton" onClick={riskWord} >Chutar</button>

        </div>
    );
}