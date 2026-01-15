import { formatCurrency } from "@/utils/helpers";

interface ResultCardProps {
  totalIncome: number;
  totalReliefs: number;
  chargeableIncome: number;
  taxOwed: number;
}

export default function ResultCard({
  totalIncome,
  totalReliefs,
  chargeableIncome,
  taxOwed,
}: ResultCardProps) {
  return (
    <div className="rounded-lg border p-4 space-y-2">
      <div>Total Income: {formatCurrency(totalIncome)}</div>
      <div>Total Reliefs: {formatCurrency(totalReliefs)}</div>
      <div className="font-semibold">
        Chargeable Income: {formatCurrency(chargeableIncome)}
      </div>
      <div className="font-semibold">
        Total Tax Owed: {formatCurrency(taxOwed)}
      </div>
    </div>
  );
}
