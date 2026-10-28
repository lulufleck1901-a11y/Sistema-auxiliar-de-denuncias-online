
/* HISTÓRICO DE TELAS */
let historicoTelas = ["tela-inicial"];
let passoAtual = 1;
let tipoSelecionado = "";

/* NAVEGAÇÃO ENTRE TELAS */
function mostrarTela(nomeTela) {
    let telaEscolhida = document.getElementById(nomeTela);

    if (!telaEscolhida) {
        return;
    }

    let telaAtual = document.querySelector(".tela.ativa");

    if (telaAtual && telaAtual.id !== nomeTela) {
        historicoTelas.push(nomeTela);
    }

    trocarTela(nomeTela);
    fecharMenu();
    atualizarMenuInferior(nomeTela);
}

function trocarTela(nomeTela) {
    document.querySelectorAll(".tela").forEach(function(tela) {
        tela.classList.remove("ativa");
    });

    let telaEscolhida = document.getElementById(nomeTela);

    if (telaEscolhida) {
        telaEscolhida.classList.add("ativa");
        window.scrollTo(0, 0);
    }
}

function voltarAnterior() {
    if (historicoTelas.length > 1) {
        historicoTelas.pop();

        let telaAnterior = historicoTelas[historicoTelas.length - 1];

        trocarTela(telaAnterior);
        atualizarMenuInferior(telaAnterior);
    } else {
        mostrarTela("tela-inicial");
    }
}

/* MENU */
function alternarMenu() {
    document.getElementById("menuLateral").classList.toggle("aberto");
}

function fecharMenu() {
    document.getElementById("menuLateral").classList.remove("aberto");
}

function atualizarMenuInferior(nomeTela) {
    document.querySelectorAll(".item-menu").forEach(function(item) {
        item.classList.remove("ativo");

        if (item.dataset.tela === nomeTela) {
            item.classList.add("ativo");
        }
    });
}

/* TEMA CLARO E ESCURO */
function alternarTema() {
    document.body.classList.toggle("escuro");

    let botao = document.querySelector(".botao-tema");

    if (botao) {
        botao.textContent =
            document.body.classList.contains("escuro") ? "☀" : "◐";
    }
}

/* NOME DE DEMONSTRAÇÃO */
let nomeUsuario = "Ana";

function atualizarNome(nome) {
    nomeUsuario = nome.trim() || "Ana";

    document.getElementById("nomeInicio").textContent = nomeUsuario;
}

/* SELECIONAR TIPO DE OCORRÊNCIA */
function selecionarTipo(botao) {
    document.querySelectorAll(".opcao-ocorrencia").forEach(function(opcao) {
        opcao.classList.remove("selecionada");
    });

    botao.classList.add("selecionada");
    tipoSelecionado = botao.dataset.tipo;
}

/* CONTADOR DO RELATO */
let campoRelato = document.getElementById("relato");
let contadorRelato = document.getElementById("contadorRelato");

if (campoRelato && contadorRelato) {
    campoRelato.addEventListener("input", function() {
        contadorRelato.textContent = campoRelato.value.length;
    });
}

/* ATUALIZAR AS ETAPAS VISUAIS */
function atualizarEtapas() {
    document.querySelectorAll(".etapa").forEach(function(etapa, indice) {
        etapa.classList.remove("ativa", "concluida");

        if (indice + 1 < passoAtual) {
            etapa.classList.add("concluida");
        }

        if (indice + 1 === passoAtual) {
            etapa.classList.add("ativa");
        }

        etapa.querySelector("span").textContent =
            indice + 1 < passoAtual ? "✓" : indice + 1;
    });

    document.querySelectorAll(".passo-denuncia").forEach(function(passo) {
        passo.hidden = Number(passo.dataset.passo) !== passoAtual;
    });

    document.getElementById("botaoVoltarPasso").hidden = passoAtual === 1;
    document.getElementById("botaoContinuar").hidden = passoAtual === 5;

    if (passoAtual === 5) {
        document.querySelector(".botoes-etapa").style.display = "none";
    } else {
        document.querySelector(".botoes-etapa").style.display = "flex";
    }
}

/* MONTAR O RESUMO */
function montarResumo() {
    let resumo = document.getElementById("resumoRelato");
    let plataforma = document.getElementById("plataforma").value;
    let data = document.getElementById("dataOcorrencia").value;
    let relato = document.getElementById("relato").value.trim();

    resumo.replaceChildren();

    let informacoes = [
        ["Tipo de ocorrência", tipoSelecionado],
        ["Relato", relato || "Não informado"],
        ["Plataforma", plataforma || "Não informada"],
        ["Data", data || "Não informada"]
    ];

    informacoes.forEach(function(informacao) {
        let paragrafo = document.createElement("p");
        let titulo = document.createElement("strong");

        titulo.textContent = informacao[0] + ": ";
        paragrafo.append(titulo);
        paragrafo.append(document.createTextNode(informacao[1]));
        resumo.append(paragrafo);
    });

    let aviso = document.createElement("p");
    aviso.textContent = "Este é apenas um resumo demonstrativo.";
    resumo.append(aviso);
}

/* AVANÇAR NO FORMULÁRIO */
function proximoPasso() {
    if (passoAtual === 1 && tipoSelecionado === "") {
        alert("Selecione o tipo de ocorrência.");
        return;
    }

    if (passoAtual === 2) {
        let plataforma = document.getElementById("plataforma").value;

        if (plataforma === "") {
            alert("Selecione onde aconteceu.");
            return;
        }
    }

    if (passoAtual === 3) {
        montarResumo();
    }

    if (passoAtual === 4) {
        let confirmacao = document.getElementById("confirmacaoRelato");

        if (!confirmacao.checked) {
            alert("Confirme que entendeu que este formulário é demonstrativo.");
            return;
        }
    }

    if (passoAtual < 5) {
        passoAtual++;
        atualizarEtapas();
        window.scrollTo(0, 0);
    }
}

/* VOLTAR NO FORMULÁRIO */
function passoAnterior() {
    if (passoAtual > 1) {
        passoAtual--;
        atualizarEtapas();
        window.scrollTo(0, 0);
    }
}

/* REINICIAR O FORMULÁRIO QUANDO ABRIR */
function iniciarDenuncia() {
    passoAtual = 1;
    tipoSelecionado = "";

    document.querySelectorAll(".opcao-ocorrencia").forEach(function(opcao) {
        opcao.classList.remove("selecionada");
    });

    atualizarEtapas();
}

/* VOLTAR PARA O INÍCIO PELO MENU */
document.querySelectorAll(".item-menu").forEach(function(item) {
    item.addEventListener("click", function() {
        if (item.dataset.tela === "tela-denuncia") {
            iniciarDenuncia();
        }
    });
});

/* FORMULÁRIO DE DEMONSTRAÇÃO */
document.getElementById("botaoContinuar").addEventListener("click", function() {
    // A validação e a mudança de etapa são feitas por proximoPasso().
});

/* INICIAR */
atualizarEtapas();

/* ADICIONAR MENU LATERAL */
let estiloMenu = document.createElement("style");

estiloMenu.textContent = `
.menu-lateral.aberto {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 65px;
    left: 15px;
    z-index: 20;
    width: 210px;
    padding: 10px;
    background: white;
    border: 1px solid #e5e8ee;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.12);
}
.menu-lateral button {
    text-align: left;
    padding: 12px;
    border: none;
    background: transparent;
    color: #25252a;
    border-radius: 8px;
}
.menu-lateral button:hover {
    background: #fde4ed;
}
body.escuro .menu-lateral.aberto {
    background: #302a32;
    border-color: #4b414b;
}
body.escuro .menu-lateral button {
    color: #f8edf2;
}
`;

document.head.appendChild(estiloMenu);

/* REINICIAR AO ABRIR A DENÚNCIA */
document.querySelectorAll('[onclick*="tela-denuncia"]').forEach(function(botao) {
    botao.addEventListener("click", iniciarDenuncia);
});
