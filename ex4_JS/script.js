function mostrarQuadrados() {

let numeros = [
    document.getElementById("n1").value,
    document.getElementById("n2").value,
    document.getElementById("n3").value,
    document.getElementById("n4").value,
    document.getElementById("n5").value,
];
let resultadoFinal= "";
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === "") {
    alert("Preencha todos os campos!");
    return;
    }

    let n = parseFloat(numeros[i]);
    let quadrado = n * n;
    resultadoFinal += `O quadrado de ${n} é ${quadrado}<br>`;
}
 document.getElementById("resultado").innerHTML = resultadoFinal;
}