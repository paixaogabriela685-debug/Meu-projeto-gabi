const botao = document.getElementById('btnVerificar');
const input = document.getElementById('valorCacau');
const tela = document.getElementById('resultado');

botao.onclick = function() {
    const numero = input.value;

    if (numero === "") {
        tela.innerHTML = "Ops! Digite um valor. 🤔";
        tela.style.color = "#ff80ab"; // Rosa claro para erro
    } else if (numero < 0 || numero > 100) {
        tela.innerHTML = "Use de 0 a 100%! 🍫";
    } else if (numero < 40) {
        tela.innerHTML = "Chocolate ao Leite 🥛";
        tela.style.color = "#fce4ec";
    } else if (numero < 70) {
        tela.innerHTML = "Chocolate Meio Amargo 🍫";
        tela.style.color = "#fce4ec";
    } else {
        tela.innerHTML = "Chocolate Amargo ☕";
        tela.style.color = "#fce4ec";
    }
};

// Extra: Limpa o resultado quando o usuário começa a digitar de novo
input.oninput = function() {
    tela.innerHTML = "";
};