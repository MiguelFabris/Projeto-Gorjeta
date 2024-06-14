function calculo(){
    const ValorConta = document.querySelector("#valorConta").value;
    const Qualidade = document.querySelector("#qualidade").value;
    if(ValorConta == ""){
        alert("Por favor, preencha os campos!");
    }else{
    let valorGorjeta = parseFloat(ValorConta)*parseFloat(Qualidade);
    let valorTotal = parseFloat(valorGorjeta) + parseFloat(ValorConta);
    document.querySelector("#ValorGorjeta").value = `R$ ${valorGorjeta.toFixed(2)}`;
    document.querySelector("#ValorTotal").value = `R$ ${valorTotal.toFixed(2)}`;
    }
}
function reiniciar(){
    document.querySelector("#valorConta").value = "";
    document.querySelector("#qualidade").value = "";
    document.querySelector("#ValorGorjeta").value = "";
    document.querySelector("#ValorTotal").value = "";
}