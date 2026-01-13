/**
 * Formats a number as a currency string.
 * @param amount The numeric amount to format.
 * @param currency The currency code (default is 'MYR').
 * @returns A formatted currency string.
 */
export function formatCurrency(amount: number, currency: string = 'MYR'): string {
    return new Intl.NumberFormat('en-MY', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(amount);
}

/**
 * Parses a currency string back to a number.
 * @param value The currency string to parse.
 * @returns The numeric amount.
 */
export function parseCurrency(value: string): number {
    return parseFloat(value.replace(/[^\d.-]/g, ''));
}