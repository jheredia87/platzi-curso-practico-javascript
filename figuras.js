function perimetroCuadrado(lado){
    return (lado*4) + "cm";
}

function areaCuadrado(lado){
    return (lado*lado)+"cm2";
}

function CalcularCuadrado(){    
    const input=document.getElementById("txt_cuadrado");
    document.getElementById("perimetroCuadrado").value  = perimetroCuadrado(input.value);
    document.getElementById("areaCuadrado").value  = areaCuadrado(input.value);    
}

function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
}

function areaTriangulo(base,altura){
    return (base*altura)/2;
}

function CalcularTriangulo(){
    const lado1=document.getElementById("lado1");
    const lado2=document.getElementById("lado2");
    const base=document.getElementById("base");
    const altura=document.getElementById("altura");

    document.getElementById("perimetroTriangulo").value  = perimetroTriangulo(+lado1.value,+lado2.value,+base.value);
    document.getElementById("areaTriangulo").value  = areaTriangulo(+base.value,+altura.value);
}

const PI=Math.PI;

function diametro(radio){
    return radio*2;
}

function perimetroCirculo(radio){    
    return PI*diametro(radio);
}

function areaCirculo(radio){    
    return (radio*radio)*PI;
}

function CalcularCirculo(){
    const radio=document.getElementById("radio");
    document.getElementById("perimetroCirculo").value  = perimetroCirculo(+radio.value).toFixed(2);
    document.getElementById("areaCirculo").value  = areaCirculo(+radio.value).toFixed(2);
}