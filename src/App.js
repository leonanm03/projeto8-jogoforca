import Jogo from "./components/Jogo";
import Letras from "./components/Letras.js";
import Chute from "./components/Chute.js"
import words from "./palavras.js"
import { useState } from "react";




function App() {
  const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)]);



  let [letter, setLetter] = useState("");
  let [dashArray, setdashArray] = useState(Array(word.length).fill("_"));

  return (
    <div className="app">
      <Jogo letter={letter} word={word} dashArray={dashArray} setdashArray={setdashArray} />

      <div className="bottom">
        <Letras letter={letter} word={word} dashArray={dashArray} setdashArray={setdashArray} setLetter={setLetter} />
        <Chute />
      </div>
    </div>
  );


}

export default App;
