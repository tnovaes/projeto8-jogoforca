import forca0 from './assets/forca0.png'
import forca1 from './assets/forca1.png'
import forca2 from './assets/forca2.png'
import forca3 from './assets/forca3.png'
import forca4 from './assets/forca4.png'
import forca5 from './assets/forca5.png'
import forca6 from './assets/forca6.png'


export default function Jogo({
    palavras, start, setStart, disabledStart, setDisabledStart, 
    palavraSorteada, setPalavraSorteada, palavraMostrada, setPalavraMostrada}
    ) {
    
    function startGame(){
        setStart(true);
        const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
        setPalavraSorteada(palavraAleatoria.split(""));
        setPalavraMostrada(Array(palavraAleatoria.length).fill('_'));
        setDisabledStart(true)

    }

    return (
        <div className="jogo">
            <img className="forca" src={forca0} />
            <button className="escolherPalavra" disabled={disabledStart} onClick={()=>startGame()}>Escolher Palavra</button>
            <div className="palavra">
                {palavraMostrada.join(" ")}
            </div>
        </div>
    );
}