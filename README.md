
---
# Portfólio Frontend

## Sobre o Projeto
Este repositório contém o código do **portfólio profissional** desenvolvido em **React + TypeScript**, utilizando **Vite** como bundler.  
O objetivo do portfólio é apresentar de forma clara e organizada minhas experiências profissionais, projetos, habilidades técnicas e comportamentais, formação acadêmica e idiomas.  
Ele funciona como uma vitrine digital do meu currículo, permitindo que recrutadores e empresas tenham acesso rápido às minhas informações.

## Estrutura do Projeto
O projeto está dividido em camadas bem definidas:

- **Types**: Interfaces e tipos TypeScript que estruturam os dados consumidos pela aplicação.
- **Services**: Responsáveis por realizar chamadas à API e retornar os dados tipados.
- **Components**:
  - **Contents**: Componentes que exibem cada seção do portfólio (Skills, Idiomas, Projetos, Experiências, Formação Acadêmica).
  - **Base**: Componentes reutilizáveis como Accordion e Header.
  - **Layout**: Estrutura principal que organiza o Header e o Main.
  - **Main**: Responsável por agrupar os conteúdos em seções expansíveis.
- **App**: Ponto de entrada da aplicação, que renderiza o Layout.

### Estrutura de Pastas

```text
portfolio/
├── public/                 # Arquivos públicos (favicon, imagens estáticas)
├── src/
│   ├── components/
│   │   ├── base/           # Componentes reutilizáveis (Header, Accordion)
│   │   ├── contents/       # Conteúdos principais (Skills, Projects, Languages, Academic, Professional)
│   │   ├── Layout/         # Estrutura principal (Header + Main)
│   │   └── Main/           # Agrupamento das seções em Accordions
│   ├── services/           # Chamadas à API (axios + endpoints)
│   ├── types/              # Definições de interfaces e tipos TypeScript
│   ├── App.tsx             # Ponto de entrada da aplicação
│   └── main.tsx            # Inicialização do React + Vite
├── package.json            # Configuração de dependências e scripts
├── tsconfig.json           # Configuração do TypeScript
└── vite.config.ts          # Configuração do Vite
```

## API
Este portfólio consome dados de uma API própria, desenvolvida em **Node.js + TypeScript** e hospedada no **Vercel**.

- **Endpoint público da API:**  
  [https://node-js-ts-portfolio-api.vercel.app/api/list](https://node-js-ts-portfolio-api.vercel.app/api/list)

- **Repositório da API:**  
  [https://github.com/TiagoLeopoldo/node.js-ts-portfolio-api](https://github.com/TiagoLeopoldo/node.js-ts-portfolio-api)

A API fornece os seguintes dados:
- Informações pessoais (perfil)
- Skills técnicas e comportamentais
- Idiomas
- Experiências profissionais
- Projetos
- Formação acadêmica

## Instalação e Execução

### Pré-requisitos
- Node.js (versão atual LTS)
- npm ou yarn

### Passos
1. Clone este repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd portfolio
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn install
   ```
4. Execute em modo desenvolvimento:
   ```bash
   npm run dev
   ```
5. Para gerar o build de produção:
   ```bash
   npm run build
   ```
6. Para visualizar o build:
   ```bash
   npm run preview
   ```

## Scripts Disponíveis
- `dev`: inicia o servidor Vite em modo desenvolvimento.
- `build`: compila o TypeScript e gera o bundle de produção.
- `lint`: executa o ESLint para verificar a qualidade do código.
- `preview`: inicia um servidor para visualizar o build final.

## Dependências Principais
- **React** e **React-DOM** (versão 19)
- **Axios** para chamadas HTTP

## Dependências de Desenvolvimento
- **TypeScript**
- **Vite**
- **ESLint** com plugins para React e Hooks
- **@vitejs/plugin-react**
- Tipos para Node, React e React-DOM

## Finalidade do Portfólio
Este portfólio foi criado para apresentar minha trajetória profissional e acadêmica, destacando minhas competências técnicas e comportamentais, além dos projetos que desenvolvi.  
Ele serve como uma ferramenta de apoio em processos seletivos, permitindo que recrutadores tenham uma visão completa e organizada do meu perfil.

## Portfólio
Para conhecer mais sobre meus trabalhos e projetos, visite meu portfólio online:  
[www.tiagonldev.com.br](http://www.tiagonldev.com.br)

## Licença
Este projeto utiliza a licença MIT, permitindo uso, modificação e distribuição, desde que mantidos os devidos créditos.

---

