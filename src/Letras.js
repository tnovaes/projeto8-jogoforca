export default function Letras({ disabledStart, clickLetter, tentativas }) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <div className="letras">
            {alfabeto.map(l =>
                <button
                    key={l}
                    data-test="letter"
                    onClick={() => clickLetter(l)}
                    disabled={(!disabledStart || tentativas.includes(l)) ? true : false}
                    className="letra">{l.toUpperCase()}</button>)}
        </div>
    );
}