"use client";

import { useState } from "react";
import { InputField } from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import { taxTable2025 } from "@/taxTable";
import { calculateChargeableIncome, calculateTax } from "@/utils/taxCalculator";

export default function Home() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalReliefs, setTotalReliefs] = useState(0);

  const chargeableIncome = calculateChargeableIncome(totalIncome, totalReliefs);
  const taxOwed = calculateTax(chargeableIncome, taxTable2025);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-4">
        <h1 className="text-2xl font-bold mb-6">
          Malaysia LHDN Tax Calculator
        </h1>

        <InputField
          label="Total Income (RM)"
          type="number"
          value={totalIncome}
          onChange={(e) => setTotalIncome(Number(e.target.value))}
          placeholder="Enter your total income"
        />

        <InputField
          label="Total Reliefs (RM)"
          type="number"
          value={totalReliefs}
          onChange={(e) => setTotalReliefs(Number(e.target.value))}
          placeholder="Enter your total reliefs"
        />

        <div className="mt-6 space-y-4">
          <ResultCard
            totalIncome={totalIncome}
            totalReliefs={totalReliefs}
            chargeableIncome={chargeableIncome}
            taxOwed={taxOwed}
          />
        </div>
      </div>
    </main>
  );
}
