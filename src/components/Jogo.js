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
            <Imagem src={hanged[1]} />
            <ChooseWordButton setRuning={props.setRuning} setWord={props.setWord} words={props.words} setdashArray={props.setdashArray} />
            <Word palavra={props.word} />

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
        console.log(words)
        const random = Math.floor(Math.random() * words.length);
        const word = words[random]
        console.log(word);
        props.setWord(word);
        console.log(props.word);
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
        {props.palavra}
    </div>;
}

