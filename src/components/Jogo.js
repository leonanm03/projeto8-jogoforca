import React from "react";

export default function Jogo(props) {
    let palavra = 'BANANA';
    let palavraArray = Array(palavra.length).fill("_")
    let palavraString = ""


    const guess = "N";
    if (guess) {
        for (let i = 0; i < palavra.length; i++) {
            if (palavra[i] === guess) {
                palavraArray[i] = guess;
            }
        }
        palavraString = palavraArray.join(" ")
    }







    const hangedSrc = [
        { state0: "assets/forca0.png" },
        { state1: "assets/forca1.png" },
        { state2: "assets/forca2.png" },
        { state3: "assets/forca3.png" },
        { state4: "assets/forca4.png" },
        { state5: "assets/forca5.png" },
        { state6: "assets/forca6.png" },
    ];

    return (
        <>
            <Imagem src={hangedSrc[0].state0} />
            <ChooseWordButton />
            <Word palavra={palavraString} />

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

function ChooseWordButton() {
    return <button className="chooseWordButton">Escolher palavra</button>;
}

function Word(props) {
    return <div className="word">
        {props.palavra}
    </div>;
}

