export type EconomicIndicator = {
  name: string
  data: { month: string; value: number }[]
}

export const economicIndicators: EconomicIndicator[] = [
  {
    name: "Crescimento do PIB (YoY)",
    data: [
      { month: "Jan", value: 2.3 },
      { month: "Feb", value: 2.1 },
      { month: "Mar", value: 2.4 },
      { month: "Apr", value: 2.2 },
      { month: "May", value: 2.5 },
      { month: "Jun", value: 2.8 },
      { month: "Jul", value: 2.6 },
      { month: "Aug", value: 2.7 },
      { month: "Sep", value: 3.1 },
      { month: "Oct", value: 2.9 },
      { month: "Nov", value: 2.8 },
      { month: "Dec", value: 3.2 },
    ],
  },
  {
    name: "Inflação (YoY)",
    data: [
      { month: "Jan", value: 0.53 },
      { month: "Feb", value: 0.84 },
      { month: "Mar", value: 0.93 },
      { month: "Apr", value: 0.61 },
      { month: "May", value: 0.47 },
      { month: "Jun", value: 0.26 },
      { month: "Jul", value: 0.12 },
      { month: "Aug", value: 0.23 },
      { month: "Sep", value: 0.32 },
      { month: "Oct", value: 0.45 },
      { month: "Nov", value: 0.58 },
      { month: "Dec", value: 0.62 },
    ],
  },
  {
    name: "Desemprego",
    data: [
      { month: "Jan", value: 11.6 },
      { month: "Feb", value: 11.8 },
      { month: "Mar", value: 11.5 },
      { month: "Apr", value: 11.3 },
      { month: "May", value: 11.2 },
      { month: "Jun", value: 11.0 },
      { month: "Jul", value: 10.9 },
      { month: "Aug", value: 10.8 },
      { month: "Sep", value: 10.7 },
      { month: "Oct", value: 10.5 },
      { month: "Nov", value: 10.6 },
      { month: "Dec", value: 10.4 },
    ],
  },
]