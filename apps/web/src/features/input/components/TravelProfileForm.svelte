<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import clsx from "clsx";
  import { SurfaceCard, Button, MetricPill } from "@ui/components";
  import type { TravelProfile } from "../types";

  const dispatch = createEventDispatcher<{
    submit: TravelProfile;
    change: TravelProfile;
  }>();

  const profile = $state<TravelProfile>({
    homeAirport: "JFK",
    annualFlights: 12,
    routeType: "mixed",
    cabinClass: "premiumEconomy"
  });

  const airportOptions = ["ATL", "DFW", "DEN", "JFK", "LAX", "ORD", "SFO", "SEA"];

  const emitChange = () => {
    dispatch("change", profile);
  };

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    dispatch("submit", profile);
  };
</script>

<SurfaceCard
  description="Dial in your travel profile to see which airline loyalty ecosystem accelerates status and maximizes redemption value."
  headline="Your flying pattern"
  highlight
>
  <form class="space-y-10" onsubmit={handleSubmit}>
    <div class="grid gap-8 xl:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
      <div class="space-y-6 rounded-2xl border border-white/10 bg-white/[0.05] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <span class="text-xs uppercase tracking-[0.3em] text-brand-200">Snapshot</span>
        <div class="space-y-5">
          <label class="space-y-2">
            <span class="text-sm font-medium text-slate-200">Home airport</span>
            <div class="relative">
              <select
                class="w-full appearance-none rounded-2xl border border-white/15 bg-slate-950/70 px-4 py-3 text-sm font-medium text-white shadow-inner shadow-black/20 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-300/40"
                bind:value={profile.homeAirport}
                onchange={emitChange}
              >
                {#each airportOptions as code}
                  <option value={code}>{code}</option>
                {/each}
              </select>
            </div>
          </label>

          <label class="space-y-2">
            <span class="text-sm font-medium text-slate-200">Flights per year</span>
            <div class="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 shadow-inner shadow-black/20">
              <input
                class="w-full bg-transparent text-sm font-medium text-white focus:outline-none"
                type="number"
                min="0"
                max="200"
                bind:value={profile.annualFlights}
                oninput={emitChange}
              />
            </div>
            <div class="flex items-center justify-between text-xs text-slate-400">
              <span>0</span>
              <span>200+</span>
            </div>
          </label>

          <div class="mt-6 grid gap-3 text-xs text-slate-300">
            <MetricPill label="Status focus" value={profile.routeType === "international" ? "Global network" : "Domestic hubs"} />
            <MetricPill label="Cabin mix" tone="amber" value={profile.cabinClass === "business" ? "Premium-heavy" : "Blended"} />
          </div>
        </div>
      </div>

      <div class="space-y-8">
        <fieldset class="space-y-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <legend class="text-sm font-medium uppercase tracking-[0.2em] text-slate-300">Typical route mix</legend>
          <p class="text-sm text-slate-400">
            Choose the route pattern that best mirrors your yearly flying and we’ll weight international bonuses accordingly.
          </p>
          <div class="grid gap-3 sm:grid-cols-3">
            {#each [
              { label: "Domestic", value: "domestic" },
              { label: "International", value: "international" },
              { label: "Mixed", value: "mixed" }
            ] as option}
              <button
                type="button"
                class={clsx(
                  "rounded-2xl border px-4 py-3 text-sm font-medium transition-all",
                  profile.routeType === option.value
                    ? "border-brand-400/70 bg-brand-400/15 text-white"
                    : "border-white/15 text-slate-300 hover:border-brand-400/40 hover:text-white"
                )}
                onclick={() => {
                  profile.routeType = option.value as typeof profile.routeType;
                  emitChange();
                }}
              >
                {option.label}
              </button>
            {/each}
          </div>
        </fieldset>

        <fieldset class="space-y-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <legend class="text-sm font-medium uppercase tracking-[0.2em] text-slate-300">Cabin preference</legend>
          <p class="text-sm text-slate-400">
            Cabin class directly influences both elite qualification and the baseline value of your points.
          </p>
          <div class="grid gap-3 sm:grid-cols-3">
            {#each [
              { label: "Economy", value: "economy" },
              { label: "Premium", value: "premiumEconomy" },
              { label: "Business", value: "business" }
            ] as option}
              <button
                type="button"
                class={clsx(
                  "rounded-2xl border px-4 py-3 text-sm font-medium transition-all",
                  profile.cabinClass === option.value
                    ? "border-amber-300/70 bg-amber-400/10 text-white"
                    : "border-white/15 text-slate-300 hover:border-amber-300/45 hover:text-white"
                )}
                onclick={() => {
                  profile.cabinClass = option.value as typeof profile.cabinClass;
                  emitChange();
                }}
              >
                {option.label}
              </button>
            {/each}
          </div>
        </fieldset>
      </div>
    </div>

    <div class="flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-5 py-4 text-xs text-slate-400">
      <span>Coming soon: multi-origin profiles, partner preference weightings, and credit card boosts.</span>
      <Button intent="primary" size="lg" type="submit">
        Calculate ROI
      </Button>
    </div>
  </form>
</SurfaceCard>
