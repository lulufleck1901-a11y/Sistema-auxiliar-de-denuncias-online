// =====================================================
// Sistema Auxiliar de Denúncias Online - script.js
// Importante: o localStorage guarda SÓ dados de demonstração
// (nome fictício, tema, protocolo fictício e checklist de dicas).
// Relatos e anexos NUNCA são guardados.
// =====================================================

// ===== 1. FUNÇÕES DO localStorage =====
// O try/catch evita erro no Console se o navegador bloquear o armazenamento.
function salvar(chave, valor) {
  try { localStorage.setItem(chave, valor); } catch (erro) { /* ignora */ }
}
function ler(chave) {
  try { return localStorage.getItem(chave); } catch (erro) { return null; }
}
function apagar(chave) {
  try { localStorage.removeItem(chave); } catch (erro) { /* ignora */ }
}

// ===== 2. ELEMENTOS DA PÁGINA =====
const formLogin = document.getElementById("form-login");
const campoNome = document.getElementById("campo-nome");
const campoEntendi = document.getElementById("campo-entendi");
const msgLogin = document.getElementById("msg-login");
const campoSenha = document.getElementById("campo-senha");
const formCadastro = document.getElementById("form-cadastro");
const msgCadastro = document.getElementById("msg-cadastro");
const abaEntrar = document.getElementById("aba-entrar");
const abaCadastro = document.getElementById("aba-cadastro");
const formDenuncia = document.getElementById("form-denuncia");
const msgDenuncia = document.getElementById("msg-denuncia");
const btnVoltar = document.getElementById("btn-voltar");
const btnContinuar = document.getElementById("btn-continuar");
const relato = document.getElementById("relato");
const contador = document.getElementById("contador");
const btnTema = document.getElementById("btn-tema");
const perfilNome = document.getElementById("perfil-nome");
const msgPerfil = document.getElementById("msg-perfil");
const btnMenu = document.getElementById("btn-menu");
const btnFecharMenu = document.getElementById("btn-fechar-menu");
const fundoMenu = document.getElementById("fundo-menu");

// ===== 3. NAVEGAÇÃO ENTRE TELAS =====
// Telas "filhas" destacam no menu o botão da tela "mãe"
const menuDaTela = {
  "tela-rede": "tela-apoio",
  "tela-direitos": "tela-recursos",
  "tela-canais": "tela-recursos",
  "tela-seguranca": "tela-recursos",
  "tela-sobre": "tela-perfil"
};

const NOME_DO_SITE = "Sistema Auxiliar de Denúncias Online";
// Telas com dados pessoais usam um título fixo na aba do navegador
const titulos = { "tela-inicio": "Início", "tela-perfil": "Perfil" };

// Mostra só a tela escolhida e esconde as outras.
function mostrarTela(idDaTela, moverFoco) {
  const telaNova = document.getElementById(idDaTela);
  if (!telaNova) { return; }
  document.querySelectorAll(".tela").forEach(function (tela) {
    tela.classList.remove("ativa");
  });
  telaNova.classList.add("ativa");

  // Esconde cabeçalho, menu e rodapé nas telas de boas-vindas e login
  const semMenu = idDaTela === "tela-bemvindo" || idDaTela === "tela-login";
  document.body.classList.toggle("sem-menu", semMenu);

  // Destaca o botão atual do menu (e avisa os leitores de tela)
  const itemDoMenu = menuDaTela[idDaTela] || idDaTela;
  document.querySelectorAll("#menu button").forEach(function (botao) {
    const atual = botao.dataset.tela === itemDoMenu;
    botao.classList.toggle("atual", atual);
    if (atual) { botao.setAttribute("aria-current", "page"); }
    else { botao.removeAttribute("aria-current"); }
  });

  // No celular, o menu fecha sozinho depois de escolher uma tela
  if (window.innerWidth < 900) { abrirMenu(false); }

  if (idDaTela === "tela-inicio") { atualizarResumo(); }
  if (idDaTela === "tela-acompanhar") { atualizarAcompanhar(); }
  if (idDaTela === "tela-perfil") { atualizarPerfil(); }

  // O título da aba acompanha a tela
  const titulo = telaNova.querySelector("h1");
  const nomeDaTela = titulos[idDaTela] || (titulo ? titulo.textContent : "");
  document.title = nomeDaTela ? nomeDaTela + " · " + NOME_DO_SITE : NOME_DO_SITE;

  window.scrollTo(0, 0);
  if (moverFoco && titulo) { titulo.tabIndex = -1; titulo.focus({ preventScroll: true }); }
}

// O endereço guarda a tela atual (ex.: #denuncia).
// Assim o botão "voltar" do navegador e o F5 funcionam.
function irPara(idDaTela) {
  const nome = idDaTela.replace("tela-", "");
  if (location.hash === "#" + nome) { mostrarTela(idDaTela, true); }
  else { location.hash = nome; }
}
window.addEventListener("hashchange", function () {
  mostrarTela("tela-" + location.hash.slice(1), true);
});

// Qualquer elemento com data-tela="..." leva para aquela tela
document.addEventListener("click", function (evento) {
  const alvo = evento.target.closest("[data-tela]");
  if (alvo) { irPara(alvo.dataset.tela); }
});

// ===== 4. NOME (LOGIN DEMONSTRATIVO) =====
function mostrarNome() {
  const nome = ler("nomeDemo") || "Visitante";
  document.querySelectorAll(".nome-usuario").forEach(function (lugar) {
    lugar.textContent = nome;
  });
}

document.getElementById("btn-comecar").addEventListener("click", function () {
  // Se já existe nome salvo, pula o login
  irPara(ler("nomeDemo") ? "tela-inicio" : "tela-login");
});

// Abas "Entrar" e "Criar conta": mostra um formulário e esconde o outro
function mostrarAba(cadastro) {
  formLogin.hidden = cadastro;
  formCadastro.hidden = !cadastro;
  abaEntrar.classList.toggle("ativa", !cadastro);
  abaCadastro.classList.toggle("ativa", cadastro);
  abaEntrar.setAttribute("aria-selected", cadastro ? "false" : "true");
  abaCadastro.setAttribute("aria-selected", cadastro ? "true" : "false");
  msgLogin.textContent = "";
  msgCadastro.textContent = "";
}
abaEntrar.addEventListener("click", function () { mostrarAba(false); });
abaCadastro.addEventListener("click", function () { mostrarAba(true); });

// Botão "Mostrar/Ocultar" da senha
document.querySelectorAll(".ver-senha").forEach(function (botao) {
  botao.addEventListener("click", function () {
    const campo = document.getElementById(botao.dataset.alvo);
    const mostrar = campo.type === "password";
    campo.type = mostrar ? "text" : "password";
    botao.textContent = mostrar ? "Ocultar" : "Mostrar";
    botao.setAttribute("aria-label", mostrar ? "Ocultar a senha" : "Mostrar a senha");
  });
});

// Entrar (a senha NÃO é guardada nem conferida: é só demonstração)
formLogin.addEventListener("submit", function (evento) {
  evento.preventDefault(); // não recarrega a página
  const nome = campoNome.value.trim();
  if (nome === "") {
    msgLogin.textContent = "Digite um nome fictício para entrar.";
    campoNome.focus();
    return;
  }
  if (campoSenha.value === "") {
    msgLogin.textContent = "Digite uma senha de demonstração.";
    campoSenha.focus();
    return;
  }
  if (!campoEntendi.checked) {
    msgLogin.textContent = "Marque a caixa para confirmar que entendeu o aviso.";
    return;
  }
  salvar("nomeDemo", nome);
  formLogin.reset(); // limpa a senha do campo
  msgLogin.textContent = "";
  mostrarNome();
  irPara("tela-inicio");
});

// Criar conta (só o nome fictício é guardado; e-mail e senha não)
formCadastro.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const nome = document.getElementById("cad-nome").value.trim();
  const email = document.getElementById("cad-email").value.trim();
  const senha = document.getElementById("cad-senha").value;
  const senha2 = document.getElementById("cad-senha2").value;

  if (nome.length < 2) {
    msgCadastro.textContent = "Digite um nome fictício com pelo menos 2 letras.";
    document.getElementById("cad-nome").focus();
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    msgCadastro.textContent = "Digite um e-mail fictício válido, como exemplo@exemplo.com.";
    document.getElementById("cad-email").focus();
    return;
  }
  if (senha.length < 6) {
    msgCadastro.textContent = "A senha precisa ter pelo menos 6 caracteres.";
    document.getElementById("cad-senha").focus();
    return;
  }
  if (senha !== senha2) {
    msgCadastro.textContent = "As senhas não são iguais.";
    document.getElementById("cad-senha2").focus();
    return;
  }
  if (!document.getElementById("cad-entendi").checked) {
    msgCadastro.textContent = "Marque a caixa para confirmar que entendeu o aviso.";
    return;
  }
  salvar("nomeDemo", nome);
  formCadastro.reset();
  msgCadastro.textContent = "";
  mostrarNome();
  irPara("tela-inicio");
});

// Perfil: trocar o nome de demonstração
document.getElementById("btn-salvar-nome").addEventListener("click", function () {
  const nome = perfilNome.value.trim();
  if (nome === "") {
    msgPerfil.className = "mensagem";
    msgPerfil.textContent = "Digite um nome.";
    return;
  }
  salvar("nomeDemo", nome);
  mostrarNome();
  msgPerfil.className = "mensagem ok";
  msgPerfil.textContent = "Nome salvo!";
});

document.getElementById("btn-sair").addEventListener("click", function () {
  apagar("nomeDemo");
  formLogin.reset();
  formCadastro.reset();
  mostrarAba(false);
  mostrarNome();
  irPara("tela-bemvindo");
});

// ===== 5. MODO CLARO E ESCURO =====
function aplicarTema(escuro, guardar) {
  document.body.classList.toggle("escuro", escuro);
  btnTema.textContent = escuro ? "Modo claro" : "Modo escuro";
  if (guardar !== false) { salvar("tema", escuro ? "escuro" : "claro"); }
}
btnTema.addEventListener("click", function () {
  aplicarTema(!document.body.classList.contains("escuro"));
});

// ===== 6. FORMULÁRIO DE DENÚNCIA (5 etapas) =====
let etapaAtual = 1;

const campoData = document.getElementById("data");
// Data de hoje no formato AAAA-MM-DD (horário local)
function hojeISO() {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
campoData.max = hojeISO(); // não deixa escolher data futura

function mostrarEtapa(numero, moverFoco) {
  etapaAtual = numero;
  // Mostra só a etapa atual
  document.querySelectorAll(".etapa").forEach(function (etapa) {
    etapa.classList.toggle("ativa", Number(etapa.dataset.etapa) === numero);
  });
  // Atualiza o indicador de passos (atual em rosa, anteriores com ✓)
  document.querySelectorAll("#passos li").forEach(function (passo, indice) {
    passo.classList.toggle("atual", indice + 1 === numero);
    passo.classList.toggle("feito", indice + 1 < numero);
    if (indice + 1 === numero) { passo.setAttribute("aria-current", "step"); }
    else { passo.removeAttribute("aria-current"); }
  });
  btnVoltar.hidden = numero === 1 || numero === 5;
  btnContinuar.hidden = numero === 5;
  btnContinuar.textContent = numero === 4 ? "Concluir (demonstração)" : "Continuar";
  msgDenuncia.textContent = "";
  if (numero === 4) { montarRevisao(); }
  if (moverFoco) {
    const titulo = document.querySelector(".etapa.ativa h2");
    titulo.tabIndex = -1;
    titulo.focus();
  }
}

// Contador de caracteres do relato
relato.addEventListener("input", function () {
  contador.textContent = relato.value.length + "/1000";
});

// Lista só os NOMES dos arquivos escolhidos (nada é enviado)
document.getElementById("anexos").addEventListener("change", function (evento) {
  const lista = document.getElementById("lista-anexos");
  lista.innerHTML = "";
  Array.from(evento.target.files).forEach(function (arquivo) {
    const item = document.createElement("li");
    item.textContent = arquivo.name + " (" + Math.max(1, Math.round(arquivo.size / 1024)) + " KB)";
    lista.appendChild(item);
  });
});

// Etapa 4: mostra um resumo do que foi preenchido (só na tela)
function montarRevisao() {
  const caixa = document.getElementById("revisao");
  caixa.innerHTML = "";
  const resumo = [
    ["Tipo", formDenuncia.tipo.value],
    ["Relato", relato.value.trim()],
    ["Plataforma", document.getElementById("plataforma").value],
    ["Data", document.getElementById("data").value || "não informada"],
    ["Hora", document.getElementById("hora").value || "não informada"],
    ["Anexos", document.getElementById("anexos").files.length + " arquivo(s)"]
  ];
  resumo.forEach(function (par) {
    const linha = document.createElement("p");
    linha.className = "revisao-linha";
    const rotulo = document.createElement("strong");
    rotulo.textContent = par[0] + ": ";
    linha.appendChild(rotulo);
    linha.appendChild(document.createTextNode(par[1])); // textNode evita HTML indesejado
    caixa.appendChild(linha);
  });
}

// Botão "Continuar" / "Concluir" = envio do formulário
formDenuncia.addEventListener("submit", function (evento) {
  evento.preventDefault(); // não recarrega a página

  if (etapaAtual === 1 && formDenuncia.tipo.value === "") {
    msgDenuncia.textContent = "Escolha um tipo de ocorrência para continuar.";
    return;
  }
  if (etapaAtual === 2) {
    if (relato.value.trim().length < 10) {
      msgDenuncia.textContent = "Escreva um texto com pelo menos 10 caracteres.";
      relato.focus();
      return;
    }
    if (document.getElementById("plataforma").value === "") {
      msgDenuncia.textContent = "Selecione onde aconteceu.";
      document.getElementById("plataforma").focus();
      return;
    }
  }
  if (etapaAtual === 2 && campoData.value > hojeISO()) {
    msgDenuncia.textContent = "A data não pode ser no futuro.";
    campoData.focus();
    return;
  }
  if (etapaAtual === 4) {
    if (!document.getElementById("confirmo").checked) {
      msgDenuncia.textContent = "Marque a caixa para confirmar que entendeu o aviso.";
      return;
    }
    // Cria um protocolo FICTÍCIO. O relato NÃO é salvo.
    const protocolo = "DEMO-" + Math.floor(1000 + Math.random() * 9000);
    salvar("protocoloDemo", protocolo);
    salvar("dataProtocoloDemo", new Date().toLocaleDateString("pt-BR"));
    salvar("statusDemo", "0");
    document.getElementById("protocolo").textContent = protocolo;
  }
  mostrarEtapa(etapaAtual + 1, true);
});

btnVoltar.addEventListener("click", function () {
  mostrarEtapa(etapaAtual - 1, true);
});

document.getElementById("btn-nova").addEventListener("click", function () {
  formDenuncia.reset();
  contador.textContent = "0/1000";
  document.getElementById("lista-anexos").innerHTML = "";
  mostrarEtapa(1, true);
});

// Copia o protocolo fictício (se o navegador permitir)
document.getElementById("btn-copiar").addEventListener("click", function () {
  const botao = this;
  function avisar(texto) {
    botao.textContent = texto;
    setTimeout(function () { botao.textContent = "Copiar protocolo"; }, 2000);
  }
  if (!navigator.clipboard) { avisar("Não foi possível copiar"); return; }
  navigator.clipboard.writeText(document.getElementById("protocolo").textContent)
    .then(function () { avisar("Copiado!"); }, function () { avisar("Não foi possível copiar"); });
});

// ===== 7. ACOMPANHAR DENÚNCIAS (dados fictícios) =====
const nomesDosStatus = ["Recebido", "Em análise", "Encaminhado"];

function atualizarAcompanhar() {
  const lista = document.getElementById("lista-acompanhar");
  const protocolo = ler("protocoloDemo");
  lista.innerHTML = "";

  if (!protocolo) {
    const aviso = document.createElement("p");
    aviso.textContent = "Nenhuma denúncia de demonstração ainda. Faça uma na tela Denunciar.";
    lista.appendChild(aviso);
    return;
  }

  const status = Number(ler("statusDemo")) || 0;
  const titulo = document.createElement("p");
  titulo.innerHTML = "<strong></strong> · <span class='suave'></span> <span class='selo'></span>";
  titulo.children[0].textContent = protocolo;
  titulo.children[1].textContent = ler("dataProtocoloDemo");
  titulo.children[2].textContent = nomesDosStatus[status];
  lista.appendChild(titulo);

  // Linha do tempo: etapas até o status atual ficam marcadas
  const tempo = document.createElement("ol");
  tempo.className = "tempo";
  nomesDosStatus.forEach(function (nome, indice) {
    const item = document.createElement("li");
    item.textContent = nome;
    if (indice <= status) { item.className = "feito"; }
    tempo.appendChild(item);
  });
  lista.appendChild(tempo);
}

// Avança o status fictício (para demonstrar a persistência)
document.getElementById("btn-atualizar").addEventListener("click", function () {
  if (!ler("protocoloDemo")) { return; }
  const status = Number(ler("statusDemo")) || 0;
  if (status < 2) { salvar("statusDemo", String(status + 1)); }
  atualizarAcompanhar();
});

// Apaga os dados de demonstração (protocolo e checklist)
function limparDemo() {
  apagar("protocoloDemo");
  apagar("dataProtocoloDemo");
  apagar("statusDemo");
  apagar("checklistDemo");
  carregarChecklist();
  atualizarAcompanhar();
  atualizarResumo();
}
document.getElementById("btn-limpar-demo").addEventListener("click", limparDemo);

// ===== 8. CHECKLIST DE SEGURANÇA DIGITAL =====
const caixasDoChecklist = document.querySelectorAll(".item-check");

function atualizarProgresso() {
  let feitas = 0;
  caixasDoChecklist.forEach(function (caixa) { if (caixa.checked) { feitas++; } });
  document.getElementById("progresso").textContent =
    feitas + " de " + caixasDoChecklist.length + " dicas concluídas";
  atualizarResumo();
}

// Lê do localStorage quais dicas estavam marcadas (ex.: "senhas,duas")
function carregarChecklist() {
  const marcadas = (ler("checklistDemo") || "").split(",");
  caixasDoChecklist.forEach(function (caixa) {
    caixa.checked = marcadas.includes(caixa.value);
  });
  atualizarProgresso();
}

caixasDoChecklist.forEach(function (caixa) {
  caixa.addEventListener("change", function () {
    const marcadas = [];
    caixasDoChecklist.forEach(function (c) { if (c.checked) { marcadas.push(c.value); } });
    salvar("checklistDemo", marcadas.join(","));
    atualizarProgresso();
  });
});

// ===== 9. MENU (abrir e fechar) =====
function abrirMenu(abrir) {
  document.body.classList.toggle("menu-aberto", abrir);
  btnMenu.setAttribute("aria-expanded", abrir ? "true" : "false");
}
btnMenu.addEventListener("click", function () {
  abrirMenu(!document.body.classList.contains("menu-aberto"));
});
btnFecharMenu.addEventListener("click", function () { abrirMenu(false); });
fundoMenu.addEventListener("click", function () { abrirMenu(false); });
// A tecla Esc fecha o menu
document.addEventListener("keydown", function (evento) {
  if (evento.key === "Escape") { abrirMenu(false); }
});

// ===== 10. RESUMO E PERFIL (dados de demonstração) =====
// Textos reaproveitados no resumo da tela inicial e no perfil
function textoDaDenuncia() {
  const protocolo = ler("protocoloDemo");
  const status = Number(ler("statusDemo")) || 0;
  return protocolo ? protocolo + " · " + nomesDosStatus[status] : "Nenhuma ainda";
}

function dicasMarcadas() {
  return (ler("checklistDemo") || "").split(",").filter(function (item) {
    return item !== "";
  }).length;
}

function atualizarResumo() {
  const marcadas = dicasMarcadas();
  const total = caixasDoChecklist.length;
  document.getElementById("resumo-denuncia").textContent = textoDaDenuncia();
  document.getElementById("resumo-seguranca").textContent = marcadas + " de " + total + " dicas";
  document.getElementById("barra-seguranca").style.width = (marcadas / total * 100) + "%";
}

function atualizarPerfil() {
  const nome = ler("nomeDemo") || "";
  perfilNome.value = nome;
  document.getElementById("avatar").textContent = nome ? nome.charAt(0).toUpperCase() : "?";
  document.getElementById("perfil-denuncia").textContent = textoDaDenuncia();
  document.getElementById("perfil-seguranca").textContent = dicasMarcadas() + " de " + caixasDoChecklist.length + " dicas";
  msgPerfil.textContent = "";
}

// Apaga tudo o que o site guardou neste navegador
document.getElementById("btn-apagar-tudo").addEventListener("click", function () {
  if (!confirm("Apagar todos os dados guardados neste navegador?")) { return; }
  ["nomeDemo", "tema", "protocoloDemo", "dataProtocoloDemo", "statusDemo", "checklistDemo"].forEach(apagar);
  formLogin.reset();
  formCadastro.reset();
  mostrarAba(false);
  aplicarTema(false);
  apagar("tema");
  mostrarNome();
  carregarChecklist();
  irPara("tela-bemvindo");
});

// ===== 11. LOGOTIPO RESERVA =====
// Se o arquivo escudo.png não for encontrado, mostra um escudo desenhado em SVG.
const desenhoDoEscudo =
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>" +
  "<path d='M30 8 8 16v16c0 14 9 22 22 26 13-4 22-12 22-26V16z' fill='#e8174f'/>" +
  "<rect x='27' y='20' width='6' height='18' rx='3' fill='#fff'/>" +
  "<circle cx='30' cy='46' r='3.5' fill='#fff'/>" +
  "<circle cx='50' cy='14' r='12' fill='#ff3d8b'/>" +
  "<rect x='48.5' y='8' width='3' height='8' rx='1.5' fill='#fff'/>" +
  "<circle cx='50' cy='20' r='1.8' fill='#fff'/></svg>";
const logoReserva = "data:image/svg+xml," + encodeURIComponent(desenhoDoEscudo);

function usarLogoReserva(imagem) {
  imagem.src = logoReserva;
}

document.querySelectorAll("img").forEach(function (imagem) {
  // Caso a imagem já tenha falhado antes de este código rodar
  if (imagem.complete && imagem.naturalWidth === 0) { usarLogoReserva(imagem); }
  // Caso falhe depois
  imagem.addEventListener("error", function () { usarLogoReserva(imagem); }, { once: true });
});

// ===== 12. AO ABRIR A PÁGINA (inclusive depois do F5) =====
// Se a pessoa nunca escolheu, segue o modo do aparelho (sem guardar nada)
const temaSalvo = ler("tema");
const aparelhoEscuro = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
aplicarTema(temaSalvo ? temaSalvo === "escuro" : aparelhoEscuro, false);
mostrarNome();
mostrarEtapa(1);
carregarChecklist();
abrirMenu(window.innerWidth >= 900); // aberto no computador, fechado no celular
// Abre a tela do endereço (#denuncia, #apoio...). Sem endereço, vai ao início se já fez o login.
const telaDoEndereco = "tela-" + location.hash.slice(1);
if (location.hash.length > 1 && document.getElementById(telaDoEndereco)) {
  mostrarTela(telaDoEndereco, false);
} else if (ler("nomeDemo")) {
  irPara("tela-inicio");
}
