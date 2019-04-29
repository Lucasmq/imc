document.getElementById('imcResult').addEventListener('click',calculaImc);

function calculaImc(){
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value/100
    let result = peso/(altura*altura);
    let legenda = "";
    if(result){
        document.getElementById("result").innerHTML = "IMC: " + parseFloat(result.toFixed(2) )

        if(result < 18.5) legenda = "Abaixo do peso!";
        if(result >= 18.5 && result < 25) legenda = "Peso Normal!";
        if(result >= 25 && result < 30) legenda = "Sobre Peso!";
        if(result >= 30 && result < 35) legenda = "Obesidade Grau 1";
        if(result >= 35 && result < 40) legenda = "Obesidade Grau 2";
        if(result >= 40 ) legenda = "Obesidade Grau 3";

        document.getElementById("legenda").innerHTML = legenda


    }else{
        document.getElementById("result").innerHTML = "Ops! Digite sua altura e seu peso corretamente!"
    }
}