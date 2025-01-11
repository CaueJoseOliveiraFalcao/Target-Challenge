export default function challenge1(){
    const FATURAMENTO_MES = [
        {
            "dia": 1,
            "valor": 22174.1664
        },
        {
            "dia": 2,
            "valor": 24537.6698
        },
        {
            "dia": 3,
            "valor": 26139.6134
        },
        {
            "dia": 4,
            "valor": 0.0
        },
        {
            "dia": 5,
            "valor": 0.0
        },
        {
            "dia": 6,
            "valor": 26742.6612
        },
        {
            "dia": 7,
            "valor": 0.0
        },
        {
            "dia": 8,
            "valor": 42889.2258
        },
        {
            "dia": 9,
            "valor": 46251.174
        },
        {
            "dia": 10,
            "valor": 11191.4722
        },
        {
            "dia": 11,
            "valor": 0.0
        },
        {
            "dia": 12,
            "valor": 0.0
        },
        {
            "dia": 13,
            "valor": 3847.4823
        },
        {
            "dia": 14,
            "valor": 373.7838
        },
        {
            "dia": 15,
            "valor": 2659.7563
        },
        {
            "dia": 16,
            "valor": 48924.2448
        },
        {
            "dia": 17,
            "valor": 18419.2614
        },
        {
            "dia": 18,
            "valor": 0.0
        },
        {
            "dia": 19,
            "valor": 0.0
        },
        {
            "dia": 20,
            "valor": 35240.1826
        },
        {
            "dia": 21,
            "valor": 43829.1667
        },
        {
            "dia": 22,
            "valor": 18235.6852
        },
        {
            "dia": 23,
            "valor": 4355.0662
        },
        {
            "dia": 24,
            "valor": 13327.1025
        },
        {
            "dia": 25,
            "valor": 0.0
        },
        {
            "dia": 26,
            "valor": 0.0
        },
        {
            "dia": 27,
            "valor": 25681.8318
        },
        {
            "dia": 28,
            "valor": 1718.1221
        },
        {
            "dia": 29,
            "valor": 13220.495
        },
        {
            "dia": 30,
            "valor": 8414.61
        }
    ];
    function Minor_value(faturamento){
        let actural_minor_value = Infinity;
        for (let index = 0; index < faturamento.length; index++) {
            const element = faturamento[index];
            let value = element.valor;
            if (value !== 0 && value < actural_minor_value) {
                actural_minor_value = value;
            }
        }
        return actural_minor_value;
    }
    function Max_value(faturamento){
        let actural_max_value = 1;
        for (let index = 0; index < faturamento.length; index++) {
            const element = faturamento[index];
            let value = element.valor;
            if (value !== 0 && value > actural_max_value) {
                actural_max_value = value;
            }
        }
        return actural_max_value;
    }

    function media(faturamento){
        let sum = 0
        let count = 0;
        for (let index = 0; index < faturamento.length; index++) {
            const element = faturamento[index];
            let value = element.valor;
            if( value !== 0){
                sum += value
                count ++
            }

        }
        let media = sum / count;
        return media;

    }
    function Days_bigger_than_media(faturamento , media){
        let days_bigger_than_media = []
        for (let index = 0; index < faturamento.length; index++) {
            const element = faturamento[index];
            let value = element.valor;
            if( value > media){
                days_bigger_than_media.push(element);
            }

        }
        return days_bigger_than_media;
    }
    
    let menorValor = Minor_value(FATURAMENTO_MES);
    let maiorValor = Max_value(FATURAMENTO_MES);
    let Media = media(FATURAMENTO_MES);
    let Dias = Days_bigger_than_media(FATURAMENTO_MES , Media);

    
    return(

        <div>
             <p>DESAFIO 3</p>
            <p>MENOR VALOR : {menorValor}</p>
            <p>MAIOR VALOR : {maiorValor}</p>
            <p>MEDIA : {Media}</p>
            <p>Dias Maiores que a media </p>
            <ul>
                {Dias.map((value, index) => (
                    <li key={index}>Dia {value.dia}: R$ {value.valor.toFixed(2)}</li>
                ))}
            </ul>
            <a
            href="/4"
            className="p-2 bg-white text-black rounded-sm"
            target="_blank"
            rel="noopener noreferrer"
          >PROXIMO DESAFIO</a>
        </div>
    )
}