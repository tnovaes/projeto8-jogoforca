import palavras from "./palavras.js";
import Jogo from './Jogo.js'
import Letras from './Letras.js'
import { useState } from "react";

function App() {
  const [start, setStart] = useState(false);
  const [erros, setErros] = useState(0);
  const [disabledStart, setDisabledStart] = useState(false);
  const [palavraSorteada, setPalavraSorteada] = useState([]);
  const [palavraMostrada, setPalavraMostrada] = useState([]);
  const [tentativas, setTentativas] = useState([]);

  console.log("start:", start);
  console.log("palavraSorteada:", palavraSorteada);


  return (
    <div className="app">
      <Jogo palavras={palavras} start={start} setStart={setStart}  
            disabledStart={disabledStart} setDisabledStart={setDisabledStart}
            palavraSorteada={palavraSorteada} setPalavraSorteada={setPalavraSorteada}
            palavraMostrada={palavraMostrada} setPalavraMostrada={setPalavraMostrada} />
      <Letras start={start} setStart={setStart}
              disabledStart={disabledStart} setDisabledStart={setDisabledStart}
              palavraSorteada={palavraSorteada} setPalavraSorteada={setPalavraSorteada}
              palavraMostrada={palavraMostrada} setPalavraMostrada={setPalavraMostrada}
              erros={erros} setErros={setErros} tentativas={tentativas} setTentativas={setTentativas}/>
    </div>
  );
}


export default App;
