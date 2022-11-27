import Jogo from "./components/Jogo";
import Letras from "./components/Letras.js";
import Chute from "./components/Chute.js"
import words from "./palavras.js"
import { useState } from "react";




function App() {


  const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)]);
  const [runing, setRuning] = useState(0);
  const [errors, setErrors] = useState(0);
  const [done, setDone] = useState(0)

  const dashWord = Array(0).fill("")
  const [dashArray, setdashArray] = useState(dashWord);

  return (
    <div className="app">
      <Jogo runing={runing} setRuning={setRuning}
        word={word} setWord={setWord}
        errors={errors} done={done}
        words={words} dashArray={dashArray} setdashArray={setdashArray} />

      <div className="bottom">
        <Letras word={word} setDone={setDone}
          runing={runing} setRuning={setRuning}
          errors={errors} setErrors={setErrors}
          dashArray={dashArray} setdashArray={setdashArray} />
        <Chute runing={runing} setRuning={setRuning}
          word={word} setErrors={setErrors} setdashArray={setdashArray} setDone={setDone} />
      </div>
    </div>
  );


}

export default App;
