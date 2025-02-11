// /lib/datasetData.ts

// This file maps each dataset name to an array of {month, value} data.
// Use the exact strings that appear on the "Dados" page as keys.
const sharedData = [
    { month: "Jan", value: 10 },
    { month: "Feb", value: 12 },
    { month: "Mar", value: 18 },
    { month: "Apr", value: 9 },
    { month: "May", value: 14 },
    { month: "Jun", value: 16 },
    { month: "Jul", value: 13 },
    { month: "Aug", value: 15 },
    { month: "Sep", value: 20 },
    { month: "Oct", value: 22 },
    { month: "Nov", value: 17 },
    { month: "Dec", value: 24 },
  ]
  
  export const datasetData: Record<string, { month: string; value: number }[]> = {
    "Índice de Atividade Econômica (IAE-Rio)": sharedData,
    "Pesquisa Mensal de Serviços (PMS) - Volume": sharedData,
    "Pesquisa Mensal de Serviços (PMS) - Turismo": sharedData,
    "Pesquisa Mensal de Serviços (PMS) - Receita Nominal": sharedData,
    "Pesquisa Mensal de Comércio (PMC) - Volume": sharedData,
    "Pesquisa Mensal de Comércio (PMC) - Receita Nominal": sharedData,
    "Pesquisa Industrial Mensal - Produção Física (PIM-PF)": sharedData,
    "Índice de Atividade Econômica Regional (IBCR-RJ)": sharedData,
    "Índice Nacional de Preços ao Consumidor Amplo (IPCA)": sharedData,
    "Índice Nacional de Preços ao Consumidor Amplo 15 (IPCA-15)": sharedData,
    "Índice Nacional de Preços ao Consumidor (INPC)": sharedData,
    "Núcleos de Inflação IPCA": sharedData,
    "Dados de Mercado de Trabalho (Pnad Contínua/IBGE) - Município do Rio de Janeiro": sharedData,
    "Taxa de Desemprego Retropolada do Rio (2002-2011)": sharedData,
    "Cadastro Geral de Empregados e Desempregados (CAGED) - Estado do Rio de Janeiro": sharedData,
    "Cadastro Geral de Empregados e Desempregados (CAGED) - Município do Rio de Janeiro": sharedData,
    "Contas Regionais - Município do Rio de Janeiro": sharedData,
    "Contas Regionais - Estado do Rio de Janeiro": sharedData,
    // etc. (Add as many as needed matching the exact strings from /app/dados/page.tsx)
  }
  