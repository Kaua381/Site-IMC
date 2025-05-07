function calcularImc() {

    //Entrada de dados
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    //Processamento
    if (peso <= 0 || altura <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos para peso e altura.";
        return;
    }
    
    // Convertendo os valores para número
    let imc = peso / (altura * altura);

    //Saída de dados
    document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc.toFixed(2);

    // Classificação do IMC
    if (imc < 18.5) {
        document.getElementById("resultado").innerHTML += "<br>Você está abaixo do peso.";
    } else if (imc >= 18.5 && imc < 24.9) {
        document.getElementById("resultado").innerHTML += "<br>Você está com peso normal.";
    } else if (imc >= 25 && imc < 29.9) {
        document.getElementById("resultado").innerHTML += "<br>Você está com sobrepeso.";
    } else if (imc >= 30 && imc < 34.9) {
        document.getElementById("resultado").innerHTML += "<br>Você está com obesidade grau 1.";
    } else if (imc >= 35 && imc < 39.9) {
        document.getElementById("resultado").innerHTML += "<br>Você está com obesidade grau 2.";
    } else {
        document.getElementById("resultado").innerHTML += "<br>Você está com obesidade grau 3.";
    }
}