export default function challenge1(){
    let INDICE = 13;
    let SOMA = 0;
    let K = 0;
    var arrayResult = [];
    while (K < INDICE){
        K += 1;
        SOMA += K;
        arrayResult.push(SOMA);
    }
    
    return(

        <div>
            <p>DESAFIO 1</p>
            <ul>
                {arrayResult.map((value, index) => (
                <li key={index}>{value}</li>
                ))}
            </ul>
            <a
            href="/2"
            className="p-2 bg-white text-black rounded-sm"
            target="_blank"
            rel="noopener noreferrer"
          >PROXIMO DESAFIO</a>
        </div>
    )
}