<script lang="ts">
  export let headline = "AirWise";
  export let description =
    "Smart loyalty ROI insights. Model earning rates, elite status projections, and redemption value across major carriers.";
</script>

<div class="relative flex min-h-screen flex-col overflow-hidden bg-[#070b1a] text-slate-100">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(42,92,255,0.18),transparent_55%)]"></div>
  <div class="pointer-events-none absolute -bottom-48 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent-mint/10 blur-3xl"></div>

  <header class="border-b border-white/5 bg-slate-950/40 backdrop-blur-xl">
    <div class="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
      <a href="/" class="font-heading text-2xl font-semibold text-white">AirWise</a>
      <nav class="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
        <a class="transition hover:text-white" href="/">Calculator</a>
        <a class="transition hover:text-white" href="/#programs">Programs</a>
        <a class="transition hover:text-white" href="/#about">About</a>
      </nav>
      <a
        href="https://github.com/ugur10/airwise"
        class="hidden rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-brand-300/60 hover:text-white md:inline-flex"
        rel="noreferrer"
        target="_blank"
      >
        GitHub
      </a>
    </div>
  </header>

  <main class="flex-1">
    <section class="relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-16 lg:px-10 lg:py-20">
      <div class="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-start">
        <div class="max-w-3xl space-y-6">
          <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-slate-200">
          Loyalty Intelligence
        </span>
          <h1 class="font-heading text-4xl font-semibold leading-tight text-white md:text-5xl">
            {headline}
          </h1>
          <p class="text-lg text-slate-300 md:text-xl">
            {description}
          </p>
          <div class="grid gap-4 pt-4 text-sm text-slate-300 md:grid-cols-2">
            <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p class="font-heading text-base text-white">Airline ROI Insights</p>
              <p class="mt-2 leading-relaxed text-slate-300">
                Model elite progress, earnings and redemption value using transparent assumptions tuned for frequent flyers.
              </p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p class="font-heading text-base text-white">VC-ready polish</p>
              <p class="mt-2 leading-relaxed text-slate-300">
                A refined experience with motion, gradients, and balanced spacing to help AirWise feel like a funded product.
              </p>
            </div>
          </div>
        </div>
        <div class="space-y-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_60px_120px_-80px_rgba(26,64,158,0.65)] backdrop-blur">
          <p class="text-sm uppercase tracking-[0.3em] text-brand-200">Live metrics</p>
          <h2 class="font-heading text-2xl font-semibold text-white">What we project</h2>
          <ul class="space-y-4 text-sm text-slate-300">
            <li class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-brand-300"></span>
              <span>Dynamic point earnings based on cabin, route mix, and average spend with alliance insights baked in.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-accent-mint"></span>
              <span>Forward-looking tier projections with remaining distance to next status and expected ROI.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-accent-amber"></span>
              <span>Highlight reels to easily compare experiential perks, redemptions, and partner network advantages.</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-12">
        <slot name="primary" />
      </div>
      <div class="mt-12">
        <slot name="secondary" />
      </div>
    </section>
  </main>

  <footer class="border-t border-white/10 bg-slate-950/40 py-6 text-center text-xs text-slate-500 backdrop-blur">
    AirWise © {new Date().getFullYear()} · Crafted for loyalty strategists & frequent flyers
  </footer>
</div>
