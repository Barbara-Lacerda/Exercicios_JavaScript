function calcularSoma() {

let v1 = document.getElementById("valor1").value;
let v2 = document.getElementById("valor2").value;

if (v1 === "" || v2 === "") {
    alert("Preencha os dois campos antes de somar!");
    return;
}
let soma = parseFloat(v1) + parseFloat(v2);

document.getElementById("resultado").innerText = "Resultado: " + soma;
}