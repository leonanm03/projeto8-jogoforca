import Jogo from "./components/Jogo";
import Letras from "./components/Letras.js";
import Chute from "./components/Chute.js"
import words from "./palavras.js"
import { useState } from "react";




function App() {


  const [word, setWord] = useState("");
  const [runing, setRuning] = useState(0);
  const [errors, setErrors] = useState(0);
  const [done, setDone] = useState(0)
  const [clickedLetters, setClickedLetters] = useState([])
  const [dashArray, setdashArray] = useState([]);

  return (
    <div className="app">
      <Jogo runing={runing} setRuning={setRuning}
        word={word} setWord={setWord}
        dashArray={dashArray} setdashArray={setdashArray}
        setClickedLetters={setClickedLetters}
        errors={errors} setErrors={setErrors}
        done={done} setDone={setDone}
        words={words} />

      <div className="bottom">
        <Letras
          runing={runing} setRuning={setRuning}
          errors={errors} setErrors={setErrors}
          dashArray={dashArray} setdashArray={setdashArray}
          clickedLetters={clickedLetters} setClickedLetters={setClickedLetters}
          word={word} setDone={setDone} />

        <Chute setRuning={setRuning} word={word} setErrors={setErrors}
          setdashArray={setdashArray} setDone={setDone} />
      </div>
    </div>
  );


}

export default App;
