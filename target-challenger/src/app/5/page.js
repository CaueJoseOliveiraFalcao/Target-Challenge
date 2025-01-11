export default function challenge5(){

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
    function reverseString(string){
        console.log("target");
        let str = string;
        let splitString = str.split("");
        let reverseString = [];
        for (let index = splitString.length - 1; index >= 0; index--) {
            const element = splitString[index];
            reverseString.push(element);
        }
        return reverseString.join("");
    }
    let StringReverse = reverseString('target');

    return(

        <div>
            <p>DESAFIO 5</p>
            <p>string normal : target</p>
            <p>reverse String : {StringReverse}</p>
            <a
            href="/"
            className="p-2 bg-white text-black rounded-sm"
            target="_blank"
            rel="noopener noreferrer"
          >INICIO</a>
        </div>
    )
}