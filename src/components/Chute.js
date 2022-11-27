export default function Chute(props) {
    return(
        <div className="risk">
            <span className="jaSei"> Já sei a palavra</span>
            <input disabled={!props.runing} type="text" className="riskInput"></input>
            <button disabled={!props.runing} className="riskButton">Chutar</button>         

        </div>
    );
}