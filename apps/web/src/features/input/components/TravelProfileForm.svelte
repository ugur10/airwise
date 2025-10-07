<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import clsx from "clsx";
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

  const routeButtonClasses = "rounded-2xl border px-4 py-3 text-sm font-medium transition-colors hover:border-sky-500/60 hover:bg-sky-500/10";
  const cabinButtonClasses = "rounded-2xl border px-4 py-3 text-sm font-medium transition-colors hover:border-amber-500/60 hover:bg-amber-500/10";

  const emitChange = () => {
    dispatch("change", profile);
  };

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    dispatch("submit", profile);
  };
</script>

<form class="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur" onsubmit={handleSubmit}>
  <header class="space-y-2">
    <h2 class="font-heading text-2xl font-semibold tracking-tight text-white">Your flying pattern</h2>
    <p class="text-sm text-slate-300">
      We’ll use these inputs to model earning rates and elite projections across each airline.
    </p>
  </header>

  <div class="grid gap-5 md:grid-cols-2">
    <label class="space-y-2">
      <span class="text-sm font-medium text-slate-200">Home airport</span>
      <select
        class="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm font-medium text-white focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
        bind:value={profile.homeAirport}
        onchange={emitChange}
      >
        {#each airportOptions as code}
          <option value={code}>{code}</option>
        {/each}
      </select>
    </label>

    <label class="space-y-2">
      <span class="text-sm font-medium text-slate-200">Flights per year</span>
      <input
        class="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm font-medium text-white focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
        type="number"
        min="0"
        max="200"
        bind:value={profile.annualFlights}
        oninput={emitChange}
      />
      <div class="flex items-center justify-between text-xs text-slate-400">
        <span>0</span>
        <span>200+</span>
      </div>
    </label>
  </div>

  <div class="grid gap-5 md:grid-cols-2">
    <fieldset class="space-y-3">
      <legend class="text-sm font-medium text-slate-200">Typical route mix</legend>
      <div class="grid gap-3 sm:grid-cols-3">
        <button
          type="button"
          class={clsx(routeButtonClasses, {
            "border-sky-500 bg-sky-500/10 text-white": profile.routeType === "domestic",
            "border-white/10 text-slate-200": profile.routeType !== "domestic"
          })}
          onclick={() => {
            profile.routeType = "domestic";
            emitChange();
          }}
        >
          Domestic
        </button>

        <button
          type="button"
          class={clsx(routeButtonClasses, {
            "border-sky-500 bg-sky-500/10 text-white": profile.routeType === "international",
            "border-white/10 text-slate-200": profile.routeType !== "international"
          })}
          onclick={() => {
            profile.routeType = "international";
            emitChange();
          }}
        >
          International
        </button>

        <button
          type="button"
          class={clsx(routeButtonClasses, {
            "border-sky-500 bg-sky-500/10 text-white": profile.routeType === "mixed",
            "border-white/10 text-slate-200": profile.routeType !== "mixed"
          })}
          onclick={() => {
            profile.routeType = "mixed";
            emitChange();
          }}
        >
          Mixed
        </button>
      </div>
    </fieldset>

    <fieldset class="space-y-3">
      <legend class="text-sm font-medium text-slate-200">Cabin preference</legend>
      <div class="grid gap-3 sm:grid-cols-3">
        <button
          type="button"
          class={clsx(cabinButtonClasses, {
            "border-amber-400 bg-amber-500/10 text-white": profile.cabinClass === "economy",
            "border-white/10 text-slate-200": profile.cabinClass !== "economy"
          })}
          onclick={() => {
            profile.cabinClass = "economy";
            emitChange();
          }}
        >
          Economy
        </button>

        <button
          type="button"
          class={clsx(cabinButtonClasses, {
            "border-amber-400 bg-amber-500/10 text-white": profile.cabinClass === "premiumEconomy",
            "border-white/10 text-slate-200": profile.cabinClass !== "premiumEconomy"
          })}
          onclick={() => {
            profile.cabinClass = "premiumEconomy";
            emitChange();
          }}
        >
          Premium
        </button>

        <button
          type="button"
          class={clsx(cabinButtonClasses, {
            "border-amber-400 bg-amber-500/10 text-white": profile.cabinClass === "business",
            "border-white/10 text-slate-200": profile.cabinClass !== "business"
          })}
          onclick={() => {
            profile.cabinClass = "business";
            emitChange();
          }}
        >
          Business
        </button>
      </div>
    </fieldset>
  </div>

  <div class="flex items-center justify-between">
    <p class="text-xs text-slate-400">
      AirWise will soon support multi-airport home bases and partner airline weighting.
    </p>
    <button
      type="submit"
      class="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/25 transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-400/60"
    >
      Calculate ROI
    </button>
  </div>
</form>
