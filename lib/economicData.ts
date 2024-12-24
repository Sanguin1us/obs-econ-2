export type EconomicIndicator = {
  name: string;
  data: { month: string; value: number }[];
};

export const economicIndicators: EconomicIndicator[] = [
  {
    name: "Crescimento do PIB",
    data: [
      { month: "Jan", value: 2.1 },
      { month: "Feb", value: 2.3 },
      { month: "Mar", value: 2.5 },
      { month: "Apr", value: 2.4 },
      { month: "May", value: 2.6 },
      { month: "Jun", value: 2.7 },
      { month: "Jul", value: 2.8 },
      { month: "Aug", value: 2.9 },
      { month: "Sep", value: 3.0 },
      { month: "Oct", value: 3.1 },
      { month: "Nov", value: 3.2 },
      { month: "Dec", value: 3.3 },
    ],
  },
  {
    name: "Inflação",
    data: [
      { month: "Jan", value: 1.5 },
      { month: "Feb", value: 1.6 },
      { month: "Mar", value: 1.7 },
      { month: "Apr", value: 1.8 },
      { month: "May", value: 1.9 },
      { month: "Jun", value: 2.0 },
      { month: "Jul", value: 2.1 },
      { month: "Aug", value: 2.2 },
      { month: "Sep", value: 2.3 },
      { month: "Oct", value: 2.4 },
      { month: "Nov", value: 2.5 },
      { month: "Dec", value: 2.6 },
    ],
  },
  {
    name: "Desemprego",
    data: [
      { month: "Jan", value: 14.5 },
      { month: "Feb", value: 14.3 },
      { month: "Mar", value: 14.1 },
      { month: "Apr", value: 13.9 },
      { month: "May", value: 13.7 },
      { month: "Jun", value: 13.5 },
      { month: "Jul", value: 13.3 },
      { month: "Aug", value: 13.1 },
      { month: "Sep", value: 12.9 },
      { month: "Oct", value: 12.7 },
      { month: "Nov", value: 12.5 },
      { month: "Dec", value: 12.3 },
    ],
  },
];

