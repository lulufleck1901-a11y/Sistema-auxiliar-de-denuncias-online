# Sistema Auxiliar de Denúncias Online

Projeto escolar desenvolvido para o Curso Técnico em Informática Integrado ao Ensino Médio.

> **Aviso:** este é um protótipo de demonstração. Ele **não recebe nem envia denúncias reais** e **não armazena relatos, anexos ou dados pessoais**. Em caso de risco, ligue **180** (Central de Atendimento à Mulher) ou **190** (Polícia Militar).

## Links

- **Site publicado:** https://lulufleck1901-a11y.github.io/Sistema-auxiliar-de-denuncias-online/
- **Repositório no GitHub:** https://github.com/lulufleck1901-a11y/Sistema-auxiliar-de-denuncias-online

## Descrição

O Sistema Auxiliar de Denúncias Online é um ambiente digital informativo, acolhedor e acessível, desenvolvido para mulheres que enfrentam situações de assédio, ameaças e violência nas plataformas digitais. O layout foi desenvolvido com base no protótipo elaborado no Figma.

## Objetivo

Oferecer, por meio de uma interface simples e intuitiva, informações sobre apoio, direitos e canais oficiais de atendimento, além de demonstrar como funcionaria o fluxo de registro e acompanhamento de um relato.

## Tecnologias utilizadas

- **HTML:** estrutura das telas e dos conteúdos.
- **CSS:** estilização, responsividade e modo escuro.
- **JavaScript:** navegação entre telas, interações, validações de formulários e armazenamento de dados demonstrativos no localStorage.

O projeto foi desenvolvido sem frameworks, bibliotecas ou backend.

## Funcionalidades

- Telas de boas-vindas, login e cadastro demonstrativos, sem menu, com as abas "Entrar" e "Criar conta". O nome digitado aparece na saudação, enquanto e-mail e senha não são armazenados.
- Tela inicial com acesso rápido às funcionalidades.
- Formulário demonstrativo de denúncia dividido em cinco etapas: Ocorrido, Detalhes, Anexos, Revisão e Conclusão.
- Acompanhamento de denúncias com linha do tempo simulada e protocolo fictício.
- Área de apoio, rede de apoio, direitos, canais oficiais e segurança digital, com checklist de dicas que permanece salvo.
- Perfil com avatar, alteração do nome de demonstração, progresso, modo claro e escuro, informações de privacidade e opção para apagar os dados armazenados.
- Cabeçalho com botão para abrir e fechar o menu e atalho para o Ligue 180.
- Menu inferior em dispositivos móveis e menu lateral em computadores.
- Navegação que mantém a tela atual no endereço do navegador (por exemplo, `#denuncia`), permitindo utilizar os botões de voltar e avançar e atualizar a página com F5.
- Recursos de acessibilidade, como link para pular diretamente ao conteúdo, foco automático nas etapas, navegação por teclado e respeito à preferência de modo escuro do dispositivo.
- Validações com mensagens claras, incluindo campos obrigatórios, impedimento de datas futuras e confirmação antes de apagar os dados.

## Estrutura de arquivos

```text
index.html   -> estrutura das telas
style.css    -> estilos e responsividade
script.js    -> funcionalidades e interações
escudo.png   -> logotipo do projeto
README.md    -> documentação
```

## Como executar

1. Baixe ou clone o repositório.
2. Mantenha os arquivos `index.html`, `style.css`, `script.js` e `escudo.png` na mesma pasta.
3. Abra o arquivo `index.html` no navegador ou utilize a extensão Live Server do Visual Studio Code.

## Como publicar no GitHub Pages

1. Crie um repositório público no GitHub e envie os arquivos do projeto.
2. Acesse **Settings > Pages**.
3. Em **Build and deployment**, escolha a opção de publicação pela branch `main` e pela pasta `/ (root)`.
4. Salve as configurações e aguarde a publicação.
5. Copie o endereço gerado e disponibilize o link da aplicação.

## Dados armazenados no navegador (localStorage)

O sistema utiliza o `localStorage` apenas para armazenar informações demonstrativas, permitindo que algumas preferências e dados simulados permaneçam salvos mesmo após atualizar a página.

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

A tabela apresenta os critérios de avaliação da aplicação e como cada um foi atendido
