"use client";

import { useState } from "react";
import { InputField } from "@/components/InputField";
import ResultCard from "@/components/ResultCard";

export default function Home() {
  const [income, setIncome] = useState("");
  const [relief, setRelief] = useState("");

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-4">
        <h1 className="text-2xl font-bold mb-6">
          Malaysia LHDN Tax Calculator
        </h1>

        <InputField
          label="Total Income (RM)"
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="Enter your total income"
        />

        <InputField
          label="Total Reliefs (RM)"
          type="number"
          value={relief}
          onChange={(e) => setRelief(e.target.value)}
          placeholder="Enter your total reliefs"
        />

        <div className="mt-6 space-y-4">
          <ResultCard
            label="Chargeable Income"
            value={
              Math.max(0, Number(income || 0) - Number(relief || 0))
            }
          />
        </div>
      </div>
    </main>
  );
}
