import React from "react";

export default function Jogo(props) {
    const hanged = [
        "assets/forca0.png",
        "assets/forca1.png",
        "assets/forca2.png",
        "assets/forca3.png",
        "assets/forca4.png",
        "assets/forca5.png",
        "assets/forca6.png"];



    return (
        <>
            <Imagem src={hanged[props.errors]} />
            <ChooseWordButton setRuning={props.setRuning} setWord={props.setWord} words={props.words} setdashArray={props.setdashArray} />
            <Word dashArray={props.dashArray} />

        </>
    );
}


function Imagem(props) {
    return (
        <div className="hanged">
            <img src={props.src} alt={props.src}></img>
        </div>
    );
}

function ChooseWordButton(props) {


    function chooseWord() {
        props.setRuning(1)
        const words = props.words
        const random = Math.floor(Math.random() * words.length);
        const word = words[random]
        alert(word)
        props.setWord(word);
        props.setdashArray(Array(word.length).fill("_"));

    }


    return (
        <button onClick={chooseWord} className="chooseWordButton">
            Escolher palavra
        </button>
    )
}

function Word(props) {
    return <div className="word">
        {props.dashArray.join(" ")}
    </div>;
}

