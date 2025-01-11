export default function challenge4(){

    const SP = 67836.43;
    const RJ = 36678.66;
    const MG = 29229.88;
    const ES = 27165.48;
    const Outros = 19849.53;
    let total = SP + RJ + MG + ES + Outros;

    const percSP = (SP / total) * 100;
    const percRJ = (RJ / total) * 100;
    const percMG = (MG / total) * 100;
    const percES = (ES / total) * 100;
    const percOutros = (Outros / total) * 100;


    return(

        <div>
            <p>DESAFIO 4 </p>
            <p>Porcentagem dos faturamentos</p>
            <div>
            <p>SP – R$ {SP.toFixed(2)} (Porcentagem: {percSP.toFixed(2)}%)</p>
            <p>RJ – R$ {RJ.toFixed(2)} (Porcentagem: {percRJ.toFixed(2)}%)</p>
            <p>MG – R$ {MG.toFixed(2)} (Porcentagem: {percMG.toFixed(2)}%)</p>
            <p>ES – R$ {ES.toFixed(2)} (Porcentagem: {percES.toFixed(2)}%)</p>
            <p>Outros – R$ {Outros.toFixed(2)} (Porcentagem: {percOutros.toFixed(2)}%)</p>
            <p>Total – R$ {total.toFixed(2)}</p>
            <a
            href="/5"
            className="p-2 bg-white text-black rounded-sm"
            target="_blank"
            rel="noopener noreferrer"
          >PROXIMO DESAFIO</a>
        </div>
        </div>
    )
}