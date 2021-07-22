function CalcularPromedio(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nElemento){
            return valorAcumulado +nElemento;
        }
    );
    return sumaLista/lista.length;
}

function esPar(num){
    return (num % 2 === 0)
}

function CalcularMediana(lista){
    let mediana;
    let pos=parseInt(lista.length/2);
    lista=lista.sort();
    if(esPar(lista.length)){      
        mediana=(lista[pos]+lista[pos-1])/2;
    }else{
        mediana=lista[pos];
    }
    console.log(mediana);
}

function CalcularModa(lista){
    let lista1 = {};
    lista.map(
        function(elemento){
            if(lista1[elemento])
                lista1[elemento]++;
            else
                lista1[elemento]=1;
        }
    );    

    const listaArray= Object.entries(lista1).sort(
        function (val,val1){
            return val[1]-val1[1];
        }
    );
    console.log(listaArray[listaArray.length-1]);
}