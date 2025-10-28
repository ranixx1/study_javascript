function getAdherenceRate(Cargahorariaplanejada,Cargahorariatrabalhada){
    const percentual = (Cargahorariatrabalhada / Cargahorariaplanejada) * 100.0
    return (percentual.toFixed(2)+"%");

}

let x = 140.0;
let y = 135.0;

console.log(getAdherenceRate(x,y));