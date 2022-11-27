import Jogo from "./components/Jogo";
import Letras from "./components/Letras.js";
import Chute from "./components/Chute.js"
import words from "./palavras.js"
import { useState } from "react";




function App() {


  const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)]);
  const [runing, setRuning] = useState(0);
  const [errors, setErrors] = useState(0)


  let [letter, setLetter] = useState("");
  let [dashArray, setdashArray] = useState(Array(word.length).fill("_"));

  return (
    <div className="app">
      <Jogo runing={runing} setRuning={setRuning}
        word={word} setWord={setWord}
        errors={errors}
        letter={letter} words={words} dashArray={dashArray} setdashArray={setdashArray} />

      <div className="bottom">
        <Letras runing={runing} word={word}
          letter={letter} setLetter={setLetter}
          errors={errors} setErrors={setErrors}
          dashArray={dashArray} setdashArray={setdashArray} />
        <Chute runing={runing} word={word} setErrors={setErrors} />
      </div>
    </div>
  );


}

export default App;
