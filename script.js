
function mostrarTela(nomeTela) {
    let telas = document.querySelectorAll(".tela");

    for (let i = 0; i < telas.length; i++) {
        telas[i].hidden = true;
    }

    document.getElementById(nomeTela).hidden = false;

    window.scrollTo(0, 0);
}

// Cadastro demonstrativo
let formCadastro = document.querySelector("#formCadastro");

formCadastro.addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.querySelector("#nomeCadastro").value.trim();
    let senha = document.querySelector("#senhaCadastro").value;
    let confirmarSenha = document.querySelector("#confirmarSenha").value;

    if (nome === "") {
        alert("Digite seu nome.");
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não são iguais.");
        return;
    }

    document.querySelector("#nomeUsuario").textContent =
        "Olá, " + nome + "!";

    alert("Cadastro demonstrativo concluído!");

    mostrarTela("tela-apoio");
});

// Login demonstrativo
let formLogin = document.querySelector("#formLogin");

formLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.querySelector("#emailLogin").value.trim();
    let senha = document.querySelector("#senhaLogin").value;

    if (email === "" || senha === "") {
        alert("Preencha todos os campos.");
        return;
    }

    let nome = prompt("Qual é o seu nome?");

    if (nome !== null && nome.trim() !== "") {
        document.querySelector("#nomeUsuario").textContent =
            "Olá, " + nome.trim() + "!";

        mostrarTela("tela-apoio");
    }
});

// Formulário de denúncia demonstrativo
let formDenuncia = document.querySelector("#formDenuncia");

formDenuncia.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Este é apenas um teste. O relato não foi salvo nem enviado.");

    formDenuncia.reset();
    mostrarTela("tela-apoio");
});
