import palavras from "./palavras.js";
import Jogo from './Jogo.js'
import Letras from './Letras.js'
import { useState } from "react";
import forca0 from './assets/forca0.png'
import forca1 from './assets/forca1.png'
import forca2 from './assets/forca2.png'
import forca3 from './assets/forca3.png'
import forca4 from './assets/forca4.png'
import forca5 from './assets/forca5.png'
import forca6 from './assets/forca6.png'

function App() {

  const [erros, setErros] = useState(0);
  const [disabledStart, setDisabledStart] = useState(false);
  const [palavraSorteada, setPalavraSorteada] = useState([]);
  const [palavraMostrada, setPalavraMostrada] = useState([]);
  const [tentativas, setTentativas] = useState([]);
  const [imagem, setImagem] = useState([forca0, forca1, forca2, forca3, forca4, forca5, forca6]);
  const [condicaoVitoria, setCondicaoVitoria] = useState("");
  const [reset, setReset] = useState(false);

  console.log("palavraSorteada:", palavraSorteada);
  console.log("erros:", erros);

  function startGame() {
    const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavraSorteada(palavraAleatoria.split(""));
    setPalavraMostrada(Array(palavraAleatoria.length).fill('_'));
    setDisabledStart(true)
  }

  function resetGame() {
    if (reset) {
      setReset(false);
      setErros(0);
      setPalavraSorteada([]);
      setPalavraMostrada([]);
      setTentativas([]);
      setImagem([forca0, forca1, forca2, forca3, forca4, forca5, forca6]);
      setCondicaoVitoria("")
      setDisabledStart(false);
    }
    startGame();
  }

  function endGame() {
    if (erros > 5) {
      setPalavraMostrada(palavraSorteada);
      setCondicaoVitoria("perdedor");
      setDisabledStart(false);
      setReset(true);
    }
    else if (!palavraMostrada.includes("_")) {
      setCondicaoVitoria("vencedor");
      setDisabledStart(false);
      setReset(true);
    }
  }




  return (
    <div className="app">
      <Jogo resetGame={resetGame}
        disabledStart={disabledStart}
        palavraMostrada={palavraMostrada}
        imagem={imagem[erros]}
        condicaoVitoria={condicaoVitoria}
      />
      <Letras disabledStart={disabledStart}
        palavraSorteada={palavraSorteada}
        palavraMostrada={palavraMostrada}
        erros={erros} setErros={setErros}
        tentativas={tentativas} setTentativas={setTentativas}
        endGame={endGame} />
    </div>
  );
}


export default App;
