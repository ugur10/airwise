<script lang="ts">
  import { SurfaceCard, MetricPill, GradientRing, Button } from "@ui/components";
  import { formatCurrency, formatNumber } from "@ui/utils";
  import type { ProgramRanking } from "../types";

  export let loading = false;
  export let data: ProgramRanking[] | null = null;
</script>

<section class="space-y-6">
  <header class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
    <div class="space-y-2">
      <h2 class="font-heading text-xl font-semibold text-white md:text-2xl">Program rankings</h2>
      <p class="max-w-xl text-sm text-slate-300">
        Compare elite progress, expected value, and signature perks. We weigh spend, route bonuses, and cabin multipliers to surface the best fit.
      </p>
    </div>
    {#if loading}
      <MetricPill label="Status" tone="mint" value="Crunching" />
    {/if}
  </header>

  {#if data && data.length > 0}
    <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {#each data as program, index}
        <SurfaceCard
          as="article"
          border={index !== 0}
          headline={program.programName}
          description={`${program.alliance} · ${formatNumber(program.assumedAnnualSpend)} assumed spend`}
          highlight={index === 0}
        >
          <div class="flex items-start justify-between">
            <MetricPill label="Tier" tone="brand" value={program.predictedTier.currentTier} />
            <GradientRing accent={index === 0 ? "mint" : index === 1 ? "sky" : "amber"} size="sm">
              <span class="font-heading text-sm font-semibold text-white">
                {Math.round(program.effectiveEarnRate * 100)}%
              </span>
            </GradientRing>
          </div>

          <dl class="grid gap-4 text-sm text-slate-200">
            <div class="space-y-1">
              <dt class="text-slate-300">Estimated value</dt>
              <dd class="text-3xl font-semibold text-white">{formatCurrency(program.estimatedValue)}</dd>
            </div>
            <div class="grid grid-cols-2 gap-3 text-xs">
              <MetricPill label="Points" value={`${formatNumber(program.estimatedPoints)} pts`} tone="brand" />
              <MetricPill
                label="To next"
                value={program.predictedTier.pointsToNext ? `${formatNumber(program.predictedTier.pointsToNext)} pts` : "Maxed"}
                tone="amber"
              />
            </div>
            <div class="space-y-3">
              <div class="flex items-center justify-between text-xs text-slate-300">
                <span>
                  Next tier
                  {#if program.predictedTier.nextTier}
                    <strong class="ml-1 text-white">{program.predictedTier.nextTier}</strong>
                  {:else}
                    <strong class="ml-1 text-brand-200">Top tier achieved</strong>
                  {/if}
                </span>
                <span>{Math.round(program.predictedTier.progressToNext * 100)}%</span>
              </div>
              <div class="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  class="h-full rounded-full bg-brand-300 transition-all"
                  style={`width: ${Math.min(program.predictedTier.progressToNext * 100, 100)}%`}
                ></div>
              </div>
            </div>
          </dl>

          <ul class="space-y-2 text-sm text-slate-300">
            {#each program.highlights as item}
              <li class="flex items-start gap-2">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-brand-300"></span>
                <span>{item}</span>
              </li>
            {/each}
          </ul>

          <div class="flex justify-end pt-1">
            <Button intent="ghost" size="md">View details</Button>
          </div>
        </SurfaceCard>
      {/each}
    </div>
  {:else if loading}
    <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {#each [0, 1, 2] as index}
        <div
          class="h-64 animate-pulse rounded-3xl bg-white/5"
          style={`animation-delay: ${index * 120}ms`}
        ></div>
      {/each}
    </div>
  {:else}
    <div class="rounded-3xl border border-dashed border-white/10 bg-white/5 p-10 text-center text-sm text-slate-400">
      Submit your travel profile to see which loyalty ecosystem delivers the strongest ROI for you.
    </div>
  {/if}
</section>
