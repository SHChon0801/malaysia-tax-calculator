import { TaxTable } from "@/utils/taxCalculator";

export const taxTable2025: TaxTable = [
  { limit: 5000, rate: 0.0 },
  { limit: 15000, rate: 0.01 },
  { limit: 15000, rate: 0.03 },
  { limit: 15000, rate: 0.06 },
  { limit: 20000, rate: 0.11 },
  { limit: 30000, rate: 0.19 },
  { limit: 300000, rate: 0.25 },
  { limit: 200000, rate: 0.26 },
  { limit: 1400000, rate: 0.28 },
  { limit: Infinity, rate: 0.3 },
];
