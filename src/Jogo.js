export default function Jogo({ resetGame, disabledStart, palavraMostrada, imagem, condicaoVitoria }) {
    return (
        <div className="jogo">
            <img data-test="game-image" className="forca" src={imagem} />
            <button data-test="choose-word" className="escolherPalavra" disabled={disabledStart} onClick={() => resetGame()}>Escolher Palavra</button>
            <div data-test="word" className={`palavra ${condicaoVitoria}`}>
                {palavraMostrada.join(" ")}
            </div>
        </div>
    );
}