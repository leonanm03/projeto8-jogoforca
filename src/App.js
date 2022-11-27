import Jogo from "./components/Jogo";
import Letras from "./components/Letras.js";
import Chute from "./components/Chute.js"
import words from "./palavras.js"
import { useState } from "react";




function App() {


  const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)]);
  const [runing, setRuning] = useState(0);


  let [letter, setLetter] = useState("");
  let [dashArray, setdashArray] = useState(Array(word.length).fill("_"));

  return (
    <div className="app">
      <Jogo runing={runing} setRuning={setRuning}
        word={word} setWord={setWord}
        letter={letter} words={words} dashArray={dashArray} setdashArray={setdashArray} />

      <div className="bottom">
        <Letras runing={runing} letter={letter} word={word} dashArray={dashArray} setdashArray={setdashArray} setLetter={setLetter} />
        <Chute runing={runing} />
      </div>
    </div>
  );


}

export default App;
