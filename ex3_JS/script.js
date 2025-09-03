function mostrarMensagem(){
    let nome = document.getElementById("nome").value;

    if (nome === ''){
        alert("Digite seu nome!");
        return;
    }
    document.getElementById("paragrafo").innerText=
        `Bem vindo ao mundo do JavaScript ${nome}`
}