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

            <ChooseWordButton
                setDone={props.setDone}
                runing={props.runing} setRuning={props.setRuning}
                setErrors={props.setErrors} setWord={props.setWord}
                words={props.words} setdashArray={props.setdashArray} setClickedLetters={props.setClickedLetters} />

            <Word dashArray={props.dashArray} done={props.done} errors={props.errors} word={props.word} />

        </>
    );
}


function Imagem(props) {
    return (
        <div className="hanged">
            <img data-test="game-image" src={props.src} alt={props.src}></img>
        </div>
    );
}

function ChooseWordButton(props) {


    function chooseWord() {
        if (!props.runing) {
            props.setErrors(0)
            props.setDone(0)
            props.setClickedLetters([])

            const words = props.words
            const random = Math.floor(Math.random() * words.length);
            const word = words[random]
            props.setWord(word);
            props.setdashArray(Array(word.length).fill("_"));

            props.setRuning(1)
        }

    }


    return (
        <button data-test="choose-word" onClick={chooseWord} className="chooseWordButton">
            Escolher palavra
        </button>
    )
}

function Word(props) {
    return <div data-test="word" data-answer={props.word} className={!props.done ? "word" : props.errors >= 6 ? "word red" : "word green"}>
        {props.dashArray.join(" ")}
    </div >;
}

