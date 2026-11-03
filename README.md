# Sistema Auxiliar de Denúncias Online

Projeto escolar do Curso Técnico em Informática Integrado ao Ensino Médio.

> **Aviso:** este é um protótipo de demonstração. Ele **não recebe nem envia denúncias reais** e **não guarda relatos, anexos ou dados pessoais**. Em caso de risco, ligue **180** (Central de Atendimento à Mulher) ou **190** (Polícia Militar).

## Links

- **Site publicado:** _colocar aqui o link depois da publicação_
- **Repositório no GitHub:** _colocar aqui o link do repositório público_

## Descrição

Ambiente digital informativo, acolhedor e acessível para mulheres que enfrentam situações de assédio, ameaças e violência nas plataformas digitais. O layout segue o protótipo feito no Figma.

## Objetivo

Oferecer, em uma interface simples e intuitiva, informações de apoio, direitos e canais oficiais, além de demonstrar como seria o fluxo de um relato em etapas.

## Tecnologias utilizadas

- HTML (estrutura das telas)
- CSS (visual, responsividade e modo escuro)
- JavaScript (navegação, formulários e localStorage)

Sem frameworks, bibliotecas ou backend.

## Funcionalidades

- Tela de boas-vindas e login demonstrativo (o nome digitado aparece na saudação)
- Tela inicial com acesso rápido às funcionalidades
- Formulário de denúncia em 5 etapas: Ocorrido, Detalhes, Anexos, Revisão e Conclusão
- Acompanhamento de denúncias com linha do tempo simulada (apenas protocolo fictício)
- Apoio, rede de apoio, direitos, canais oficiais e segurança digital (com checklist que fica salvo)
- Perfil com avatar, troca do nome de demonstração, progresso, modo claro/escuro, privacidade e botão para apagar os dados guardados
- Cabeçalho com botão para abrir e fechar o menu e atalho para o Ligue 180
- Menu inferior no celular e menu lateral no computador

## Estrutura de arquivos

```
index.html   -> estrutura das telas
style.css    -> estilos
script.js    -> comportamento
escudo.png   -> logotipo do projeto
README.md    -> documentação
```

## Como executar

1. Baixe ou clone o repositório.
2. Deixe `index.html`, `style.css`, `script.js` e `escudo.png` **na mesma pasta**.
3. Abra o `index.html` no navegador (ou use a extensão Live Server do VS Code).

## Como publicar (GitHub Pages)

1. Crie um repositório **público** no GitHub e envie os arquivos.
2. Vá em **Settings > Pages**.
3. Em **Source**, escolha a branch `main` e a pasta `/ (root)`, e salve.
4. Aguarde alguns minutos e copie o link gerado para este README.

## Dados guardados no navegador (localStorage)

Somente dados de demonstração:

| Chave | O que guarda |
|---|---|
| `nomeDemo` | Nome fictício digitado no login |
| `tema` | Preferência de modo claro ou escuro |
| `protocoloDemo`, `dataProtocoloDemo` e `statusDemo` | Protocolo fictício, data e status simulado |
| `checklistDemo` | Dicas de segurança digital marcadas no checklist |

O texto do relato e os anexos **nunca** são guardados.

## Checklist dos requisitos da atividade

| Critério | Requisito | Situação |
|---|---|---|
| 1 | Site publicado (GitHub Pages, Vercel ou Netlify) e repositório público no GitHub | Pendente |
| 2 | JavaScript manipulando o DOM e `preventDefault()` nos formulários, com resposta visível | Feito |
| 3 | `localStorage` com dados fictícios, funcionando após F5 | Feito |
| 4 | Console do navegador sem erros em vermelho | Conferir com F12 |
| 5 | Responsividade em computador, tablet e celular, sem rolagem horizontal | Conferir no DevTools |
| - | README com checklist | Feito |
| - | Testes com pelo menos 5 usuários reais | Pendente |
| - | Matriz de Feedback e uma melhoria feita a partir dela | Pendente |
| - | Trabalho escrito com citações indiretas (Autor, ano) | Pendente |
| - | 5 slides com QR Code dos links no último | Pendente |

## Fontes das informações

As telas informativas foram conferidas em novembro de 2026 em fontes oficiais:

- gov.br: serviço "Denunciar e buscar ajuda a vítimas de violência contra mulheres" (Ligue 180)
- Câmara dos Deputados: texto da Lei 14.550/2023 (medidas protetivas de urgência)
- TJDFT: Direito Fácil, "Stalking" (Lei 14.132/2021)
- Secom (gov.br): cartilha "Caiu na rede é crime"
- CNJ: "Conheça a rede de proteção à mulher vítima de violência"
- CVV (cvv.org.br) e SaferNet Brasil (denunciar.org.br e canaldeajuda.org.br)

As leis e os telefones podem mudar. Confira sempre a versão atual nos sites oficiais.

## Autoria

Projeto desenvolvido por estudante do Curso Técnico em Informática Integrado ao Ensino Médio.
