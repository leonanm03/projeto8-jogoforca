import Jogo from "./components/Jogo";
import Letras from "./components/Letras.js";
import Chute from "./components/Chute.js"




function App() {

  return (
    <div className="app">
      <Jogo />

      <div className="bottom">
        <Letras />
        <Chute />
      </div>
    </div>
  );


}

export default App;
