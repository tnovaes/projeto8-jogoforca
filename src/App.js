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
  const [start, setStart] = useState(false);
  const [erros, setErros] = useState(0);
  const [disabledStart, setDisabledStart] = useState(false);
  const [palavraSorteada, setPalavraSorteada] = useState([]);
  const [palavraMostrada, setPalavraMostrada] = useState([]);
  const [tentativas, setTentativas] = useState([]);
  const [imagem, setImagem] = useState([forca0, forca1, forca2, forca3, forca4, forca5, forca6]);

  console.log("start:", start);
  console.log("palavraSorteada:", palavraSorteada);
  console.log("erros:", erros);
  console.log("imagem:", imagem);


  return (
    <div className="app">
      <Jogo palavras={palavras} start={start} setStart={setStart}  
            disabledStart={disabledStart} setDisabledStart={setDisabledStart}
            palavraSorteada={palavraSorteada} setPalavraSorteada={setPalavraSorteada}
            palavraMostrada={palavraMostrada} setPalavraMostrada={setPalavraMostrada}
            imagem={imagem[erros]} setImagem={setImagem} />
      <Letras start={start} setStart={setStart}
              disabledStart={disabledStart} setDisabledStart={setDisabledStart}
              palavraSorteada={palavraSorteada} setPalavraSorteada={setPalavraSorteada}
              palavraMostrada={palavraMostrada} setPalavraMostrada={setPalavraMostrada}
              erros={erros} setErros={setErros} tentativas={tentativas} setTentativas={setTentativas}
              imagem={imagem} setImagem={setImagem}
              forca0={forca0} forca1={forca1} forca2={forca2} forca3={forca3} forca4={forca4} forca5={forca5} forca6={forca6}/>
    </div>
  );
}


export default App;
