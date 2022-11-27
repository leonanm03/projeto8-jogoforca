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
            <ChooseWordButton />
            <Word palavra={"teste"} />

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

