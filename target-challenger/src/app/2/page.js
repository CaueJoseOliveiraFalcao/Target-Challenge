export default function challenge2(){

    function pertenceFibonacci(num) {
        let fibonacci = [0, 1];

        while (fibonacci[fibonacci.length - 1] < num) {
            let proximo = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
            fibonacci.push(proximo);
        }

        if (fibonacci.includes(num)) {
            return `${num} pertence à sequência de Fibonacci.`;
        } else {
            return `${num} não pertence à sequência de Fibonacci.`;
        }
    }
    let numero = 13;
    const mensagem = pertenceFibonacci(numero);
    return(

        <div>

            <p>DESAFIO 2</p>
            <p>{mensagem}</p>
            <a
            href="/3"
            className="p-2 bg-white text-black rounded-sm"
            target="_blank"
          >PROXIMO DESAFIO</a>
        </div>
    )
}