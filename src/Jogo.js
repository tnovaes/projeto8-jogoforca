export default function Jogo({
    palavras, start, setStart, disabledStart, setDisabledStart, 
    palavraSorteada, setPalavraSorteada, palavraMostrada, setPalavraMostrada, erros, setErros, imagem, setImagem}
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
            <img className="forca" src={imagem} />
            <button className="escolherPalavra" disabled={disabledStart} onClick={()=>startGame()}>Escolher Palavra</button>
            <div className="palavra">
                {palavraMostrada.join(" ")}
            </div>
        </div>
    );
}