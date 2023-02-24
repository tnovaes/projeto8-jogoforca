export default function Letras(
    {start, setStart, disabledStart, setDisabledStart, 
    palavraSorteada, setPalavraSorteada, palavraMostrada, setPalavraMostrada,
    erros, setErros, tentativas, setTentativas, imagem, setImagem,
    forca0, forca1, forca2, forca3, forca4, forca5, forca6}
    ){
    
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    function clickLetter(letra){
        setTentativas([...tentativas, letra]);
        for(let i = 0; i < palavraSorteada.length; i++){
            if(palavraSorteada[i].includes(letra)){
                palavraMostrada.splice(i, 1 , palavraSorteada[i])
            }
            else if (!palavraSorteada.includes(letra)){
                setErros(erros+1);
            }
        }
    }  
    
    return(
        <div className="letras">
            {alfabeto.map(l => <button onClick={() => clickLetter(l)} disabled={(!disabledStart || tentativas.includes(l)) ? true : false} className="letra">{l.toUpperCase()}</button>)}
        </div>
    );
}