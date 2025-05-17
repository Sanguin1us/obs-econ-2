# Observatório Econômico

Este repositório contém o código do site do **Observatório Econômico** da Prefeitura do Rio de Janeiro.
O objetivo é disponibilizar dados econômicos, publicações e informações sobre projetos que impactam o
 desenvolvimento da cidade.

## Visão Geral

- **Dados**: séries históricas de indicadores econômicos exibidas em gráficos interativos.
- **Publicações**: boletins, notas técnicas e estudos especiais produzidos pela equipe do Observatório.
- **Projetos**: iniciativas da Secretaria de Desenvolvimento Urbano e Econômico.
- **Responsivo**: layout adaptado para diferentes tamanhos de tela.

### Tech Stack

- [Next.js](https://nextjs.org/) 15 (React 19 + App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/) para visualizações gráficas
- Gerenciador de pacotes [pnpm](https://pnpm.io/)

## Getting Started

### Pré‑requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior
- [pnpm](https://pnpm.io/)

### Instalação

```bash
pnpm install
```

### Ambiente de desenvolvimento

```bash
pnpm dev
```

Abra `http://localhost:3000` no navegador para ver o site.

### Build de produção

```bash
pnpm build
pnpm start
```

Atualmente não são necessários variáveis de ambiente para executar o projeto. Futuramente poderão ser
incluídas configurações adicionais e serão documentadas aqui.

## Contribuindo

1. Faça um fork deste repositório e crie uma branch a partir da `main`:
   ```bash
   git checkout -b minha-contribuicao
   ```
2. Instale as dependências com `pnpm install`.
3. Siga o padrão de código TypeScript e utilize `eslint`/`prettier` se disponível.
4. Envie um Pull Request descrevendo suas alterações.

Ainda não possuímos suíte de testes ou CI configurados, mas eles estão no roadmap do projeto.
Sinta-se livre para sugerir melhorias!

## Roadmap

- Popular as páginas com dados reais e atualização automática.
- Adicionar testes automatizados e pipeline de CI.
- Implementar autenticação para conteúdos restritos, se necessário.

## English Overview

This project powers the **Economic Observatory** website of Rio de Janeiro's City Hall. It is built with
Next.js and Tailwind CSS and showcases local economic data, official publications and development
projects. To run locally, install dependencies with `pnpm install` and start the dev server using `pnpm dev`.
Contributions are welcome via pull requests.

