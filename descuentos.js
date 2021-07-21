function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento=100-descuento;
    const precioConDescuento=(precio*porcentajePrecioConDescuento)/100;
    return "$"+precioConDescuento.toFixed(2);
}

function Calcular(){
    const precio=document.getElementById("precio");
    const desc=document.getElementById("descuento");  
    
    document.getElementById("precioFinal").innerText ="Precio con descuento: " + calcularPrecioConDescuento(+precio.value,+desc.value);
}