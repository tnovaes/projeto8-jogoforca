export default function Jogo({ resetGame, disabledStart, palavraMostrada, imagem, condicaoVitoria }) {
    return (
        <div className="jogo">
            <img className="forca" src={imagem} />
            <button className="escolherPalavra" disabled={disabledStart} onClick={() => resetGame()}>Escolher Palavra</button>
            <div className={`palavra ${condicaoVitoria}`}>
                {palavraMostrada.join(" ")}
            </div>
        </div>
    );
}