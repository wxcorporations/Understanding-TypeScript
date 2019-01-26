
let infor : string = "Valor dar var exportada por default";

// funcao abaixo sera visivel por arquivos externos via import ja que definimos como export .
export function calc_soma( num1 : number , num2 : number ) : number {
    return num1 + num2 ;
}

export default infor ;