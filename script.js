
let botaoComecar = document.querySelector("#botaoComecar");
let telaInicial = document.querySelector(".tela-inicial");
let telaApoio = document.querySelector("#tela-apoio");

botaoComecar.addEventListener("click", function() {
    telaInicial.style.display = "none";
    telaApoio.hidden = false;
});
