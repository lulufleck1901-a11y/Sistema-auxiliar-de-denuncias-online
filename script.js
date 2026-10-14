
function mostrarTela(nomeTela) {
    let telas = document.querySelectorAll(".tela");

    for (let i = 0; i < telas.length; i++) {
        telas[i].hidden = true;
    }

    document.getElementById(nomeTela).hidden = false;
}

// Cadastro
let formCadastro = document.querySelector("#formCadastro");

formCadastro.addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.querySelector("#nomeCadastro").value;
    let senha = document.querySelector("#senhaCadastro").value;
    let confirmarSenha = document.querySelector("#confirmarSenha").value;

    if (senha !== confirmarSenha) {
        alert("As senhas não são iguais.");
        return;
    }

    document.querySelector("#nomeUsuario").textContent = "Olá, " + nome + "!";

    mostrarTela("tela-apoio");
});

// Login demonstrativo
let formLogin = document.querySelector("#formLogin");

formLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.querySelector("#emailLogin").value;

    if (email === "") {
        alert("Preencha seu e-mail.");
        return;
    }

    let nome = prompt("Qual é o seu nome?");

    if (nome !== null && nome.trim() !== "") {
        document.querySelector("#nomeUsuario").textContent = "Olá, " + nome + "!";
        mostrarTela("tela-apoio");
    }
});
