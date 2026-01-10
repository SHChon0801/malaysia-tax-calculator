"use client";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl rounded-lg bg-white p-12 shadow-sm dark:bg-[#0b0b0b]">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">Malaysia LHDN Tax Calculator</h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Estimate personal income tax (placeholder UI).</p>
        </header>

        <section>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Annual Chargeable Income (RM)</label>
              <input
                type="number"
                placeholder="e.g. 60000"
                className="mt-1 w-full rounded-md border border-zinc-200 px-3 py-2 shadow-sm focus:border-sky-500 focus:outline-none dark:bg-[#0f0f0f] dark:border-zinc-700 dark:text-zinc-50"
                aria-label="Annual Chargeable Income"
                disabled
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">EPF Contribution (%)</label>
              <input
                type="number"
                placeholder="e.g. 11"
                className="mt-1 w-full rounded-md border border-zinc-200 px-3 py-2 shadow-sm focus:border-sky-500 focus:outline-none dark:bg-[#0f0f0f] dark:border-zinc-700 dark:text-zinc-50"
                aria-label="EPF Contribution"
                disabled
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Number of Dependents</label>
              <input
                type="number"
                placeholder="0"
                className="mt-1 w-full rounded-md border border-zinc-200 px-3 py-2 shadow-sm focus:border-sky-500 focus:outline-none dark:bg-[#0f0f0f] dark:border-zinc-700 dark:text-zinc-50"
                aria-label="Dependents"
                disabled
              />
            </div>

            <div className="pt-4">
              <button
                type="button"
                disabled
                className="w-full rounded-md bg-zinc-900 px-4 py-2 text-white disabled:opacity-60"
              >
                Calculate (UI placeholder)
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
