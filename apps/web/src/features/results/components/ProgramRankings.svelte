<script lang="ts">
  import type { ProgramRanking } from "../types";

  export let loading = false;
  export let data: ProgramRanking[] | null = null;
</script>

<section class="space-y-6">
  <header class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <h2 class="font-heading text-xl font-semibold text-white">Program rankings</h2>
      <p class="text-sm text-slate-300">
        See how each airline stacks up by total value, predicted elite tier, and ROI on your spend.
      </p>
    </div>
    {#if loading}
      <span class="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-slate-200">
        <span class="h-2 w-2 animate-pulse rounded-full bg-sky-400"></span>
        Calculating
      </span>
    {/if}
  </header>

    {#if data && data.length > 0}
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {#each data as program}
        <article
          class="group flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-slate-900/10 p-6 shadow-lg shadow-black/20 backdrop-blur transition-transform hover:-translate-y-1 hover:border-white/20"
          style={`--program-accent:${program.brandColor}`}
        >
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="font-heading text-lg font-semibold text-white">{program.programName}</h3>
                <p class="text-xs uppercase tracking-wide text-slate-400">{program.alliance}</p>
              </div>
              <span
                class="inline-flex items-center rounded-full border border-white/10 bg-[var(--program-accent)]/20 px-3 py-1 text-xs font-semibold text-[var(--program-accent)]"
              >
                {program.predictedTier.currentTier}
              </span>
            </div>

            <dl class="grid gap-4 text-sm text-slate-200">
              <div class="space-y-1">
                <dt class="font-medium text-slate-300">Estimated value</dt>
                <dd class="text-2xl font-semibold text-white">${program.estimatedValue.toLocaleString()}</dd>
              </div>
              <div class="space-y-1">
                <dt class="font-medium text-slate-300">Points earned</dt>
                <dd class="font-mono text-base text-slate-200">
                  {program.estimatedPoints.toLocaleString()} pts
                </dd>
              </div>
              <div class="flex items-center justify-between text-xs text-slate-300">
                <span>
                  Next tier
                  {#if program.predictedTier.nextTier}
                    <strong class="ml-1 font-semibold text-white">{program.predictedTier.nextTier}</strong>
                  {:else}
                    <strong class="ml-1 font-semibold text-sky-300">Top tier achieved</strong>
                  {/if}
                </span>
                <span>
                  {program.predictedTier.pointsToNext
                    ? `${Math.max(program.predictedTier.pointsToNext, 0).toLocaleString()} pts`
                    : "—"}
                </span>
              </div>
              <div class="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  class="h-full rounded-full bg-[var(--program-accent)] transition-[width]"
                  style={`width: ${Math.min(program.predictedTier.progressToNext * 100, 100)}%`}
                ></div>
              </div>
            </dl>
          </div>

          <ul class="space-y-2 text-sm text-slate-300">
            {#each program.highlights as item}
              <li class="flex items-start gap-2">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--program-accent)]"></span>
                <span>{item}</span>
              </li>
            {/each}
          </ul>
        </article>
      {/each}
    </div>
  {:else if loading}
    <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {#each [0, 1, 2] as index}
        <div
          class="h-56 animate-pulse rounded-3xl bg-white/5"
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
