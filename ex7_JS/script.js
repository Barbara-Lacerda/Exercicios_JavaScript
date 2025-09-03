let contador=0;
function contarClique(){
    contador++;
    document.getElementById("paragrafo").innerText=
    `${contador} Cliques`;
}

function zerarContagem(){
    document.getElementById("paragrafo").innerText=
    "0 Cliques"
    alert("Contagem resetada!")
}