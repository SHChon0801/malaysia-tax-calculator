export type TaxBracket = {
  limit: number;
  rate: number;
};

export type TaxTable = TaxBracket[];

/**
 * Calculates the chargeable income after deducting total reliefs from total income.
 * @param totalIncome
 * @param totalReliefs
 * @returns
 */
export function calculateChargeableIncome(
  totalIncome: number,
  totalReliefs: number
): number {
  const chargeable = totalIncome - totalReliefs;
  return chargeable > 0 ? chargeable : 0;
}

/**
 * Calculates the tax owed based on chargeable income and the provided tax table.
 * @param chargeableIncome
 * @param taxTable
 * @returns
 */
export function calculateTax(
  chargeableIncome: number,
  taxTable: TaxTable
): number {
  let remainingIncome = chargeableIncome;
  let taxOwed = 0;

  for (const bracket of taxTable) {
    if (remainingIncome <= 0) return 0.0;
    const incomeInBracket = Math.min(remainingIncome, bracket.limit);
    taxOwed += incomeInBracket * bracket.rate;
    remainingIncome -= incomeInBracket;
  }

  return taxOwed;
}
