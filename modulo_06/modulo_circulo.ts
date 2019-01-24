const PI : number = 3.14 ;  // nao e importado pois nao possui palavar reservada export

// funcao abaixo sera visivel por arquivos externos via import ja que definimos como export .
export function calc_circunferencia( diametro : number) : number{
    return diametro * PI ;
}