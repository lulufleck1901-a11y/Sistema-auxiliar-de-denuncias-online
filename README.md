# Sistema Auxiliar de Denúncias Online

Projeto escolar desenvolvido para o Curso Técnico em Informática Integrado ao Ensino Médio.

> **Aviso:** este é um protótipo de demonstração. Ele **não recebe nem envia denúncias reais** e **não guarda relatos, anexos ou dados pessoais**. Em caso de risco, ligue **180** (Central de Atendimento à Mulher) ou **190** (Polícia Militar).

## Links

- **Site publicado:** https://lulufleck1901-a11y.github.io/Sistema-auxiliar-de-denuncias-online/
- **Repositório no GitHub:** https://github.com/lulufleck1901-a11y/Sistema-auxiliar-de-denuncias-online

## Descrição

O Sistema Auxiliar de Denúncias Online é um ambiente digital informativo, acolhedor e acessível para mulheres que enfrentam situações de assédio, ameaças e violência nas plataformas digitais. O layout segue o protótipo desenvolvido no Figma.

## Objetivo

Oferecer, por meio de uma interface simples e intuitiva, informações sobre apoio, direitos e canais oficiais, além de demonstrar como funcionaria o fluxo de registro e acompanhamento de um relato.

## Tecnologias utilizadas

- **HTML:** estrutura das telas e dos conteúdos.
- **CSS:** estilização, responsividade e modo escuro.
- **JavaScript:** navegação, formulários, interações, validações e armazenamento de dados demonstrativos no localStorage.

O projeto foi desenvolvido sem frameworks, bibliotecas ou backend.

## Funcionalidades

- Telas de boas-vindas, login e cadastro demonstrativos, sem menu, com abas "Entrar" e "Criar conta". O nome digitado aparece na saudação, enquanto e-mail e senha não são armazenados.
- Tela inicial com acesso rápido às funcionalidades.
- Formulário demonstrativo de denúncia dividido em cinco etapas: Ocorrido, Detalhes, Anexos, Revisão e Conclusão.
- Acompanhamento de denúncias com linha do tempo simulada e protocolo fictício.
- Área de apoio, rede de apoio, direitos, canais oficiais e segurança digital, com checklist de dicas que permanece salvo.
- Perfil com avatar, alteração do nome de demonstração, progresso, modo claro e escuro, informações de privacidade e opção para apagar os dados armazenados.
- Cabeçalho com botão para abrir e fechar o menu e atalho para o Ligue 180.
- Menu inferior em dispositivos móveis e menu lateral em computadores.
- Navegação que mantém a tela atual no endereço do navegador (ex.: #denuncia), permitindo utilizar os botões de voltar e avançar e atualizar a página com F5.
- Recursos de acessibilidade, como link para pular diretamente ao conteúdo, foco automático nas etapas, navegação por teclado e respeito à preferência de modo escuro do dispositivo.
- Validações com mensagens claras, incluindo campos obrigatórios, impedimento de datas futuras e confirmação antes de apagar os dados.

## Estrutura de arquivos

    index.html   -> estrutura das telas
    style.css    -> estilos e responsividade
    script.js    -> funcionalidades e interações
    escudo.png   -> logotipo do projeto
    README.md    -> documentação

## Como executar

1. Baixe ou clone o repositório.
2. Mantenha os arquivos index.html, style.css, script.js e escudo.png na mesma pasta.
3. Abra o arquivo index.html no navegador ou utilize a extensão Live Server do Visual Studio Code.

## Como publicar no GitHub Pages

1. Crie um repositório público no GitHub e envie os arquivos.
2. Acesse Settings > Pages.
3. Em Build and deployment, escolha a branch main e a pasta / (root).
4. Salve as configurações e aguarde a publicação.
5. Copie o endereço gerado e disponibilize o link da aplicação.

## Dados guardados no navegador (localStorage)

O sistema utiliza o localStorage apenas para armazenar informações demonstrativas, permitindo que algumas preferências e dados simulados permaneçam salvos mesmo após atualizar a página.

| Chave | Informação armazenada |
|---|---|
| `nomeDemo` | Nome fictício digitado no login. |
| `tema` | Preferência de modo claro ou escuro. |
| `protocoloDemo` | Protocolo fictício de demonstração. |
| `dataProtocoloDemo` | Data associada ao protocolo fictício. |
| `statusDemo` | Status simulado do acompanhamento. |
| `checklistDemo` | Dicas de segurança digital marcadas no checklist. |

**Importante:** o texto dos relatos e os anexos não são armazenados. O sistema não realiza o envio de denúncias reais.

## Checklist dos requisitos da atividade

A tabela apresenta os critérios de avaliação da aplicação e como cada um foi atendido.

| Critério | Requisito | Situação |
|---|---|---|
| 1 | Site publicado e repositório público no GitHub. | Feito |
| 2 | JavaScript manipulando o DOM e utilização de preventDefault() nos formulários, com resposta visível. | Feito |
| 3 | localStorage com dados fictícios, funcionando após atualizar a página com F5. | Feito |
| 4 | Console do navegador sem erros em vermelho durante a utilização. | Feito |
| 5 | Responsividade em computadores, tablets e celulares, sem rolagem horizontal. | Feito |
| 6 | README com checklist dos requisitos da atividade. | Feito |
| 7 | Testes com pelo menos cinco usuários reais. | Feito |
| 8 | Matriz de Feedback e melhoria realizada com base nos resultados. | Feito |
| 9 | Trabalho escrito com citações indiretas no formato (Autor, ano). | Feito |
| 10 | Apresentação com cinco slides e QR Code dos links no último slide. | Feito |

## Fontes das informações

As informações apresentadas nas telas informativas foram consultadas em novembro de 2026, com base nas seguintes fontes:

- **gov.br:** serviço "Denunciar e buscar ajuda a vítimas de violência contra mulheres" (Ligue 180).
- **Câmara dos Deputados:** texto da Lei nº 14.550/2023, sobre medidas protetivas de urgência.
- **TJDFT:** Direito Fácil, conteúdo sobre stalking (Lei nº 14.132/2021).
- **Secom (gov.br):** cartilha "Caiu na rede é crime".
- **CNJ:** conteúdo "Conheça a rede de proteção à mulher vítima de violência".
- **CVV:** cvv.org.br.
- **SaferNet Brasil:** denunciar.org.br e canaldeajuda.org.br.

As leis, os serviços e os telefones podem sofrer alterações. Recomenda-se consultar sempre as informações atualizadas nos canais oficiais.

## Autoria

Projeto desenvolvido por estudante do Curso Técnico em Informática Integrado ao Ensino Médio.

