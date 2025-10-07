<script lang="ts">
  export let headline = "AirWise";
  export let description =
    "Smart loyalty ROI insights. Model earning rates, elite status projections, and redemption value across major carriers.";
</script>

<div class="flex min-h-screen flex-col bg-slate-950 text-slate-100">
  <header class="border-b border-white/10 bg-slate-950/60 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <div>
        <a href="/" class="font-heading text-2xl font-semibold text-white">AirWise</a>
      </div>
      <nav class="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
        <a class="transition hover:text-white" href="/">Calculator</a>
        <a class="transition hover:text-white" href="/#programs">Programs</a>
        <a class="transition hover:text-white" href="/#about">About</a>
      </nav>
      <a
        href="https://github.com/ugur10/airwise"
        class="hidden rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-white/30 hover:text-white md:inline-flex"
        rel="noreferrer"
        target="_blank"
      >
        GitHub
      </a>
    </div>
  </header>

  <main class="flex-1">
    <section class="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:py-16">
      <div class="max-w-3xl space-y-6">
        <span class="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300">
          Loyalty Intelligence
        </span>
        <h1 class="font-heading text-4xl font-semibold leading-tight text-white md:text-5xl">
          {headline}
        </h1>
        <p class="text-lg text-slate-300 md:text-xl">
          {description}
        </p>
      </div>
      <div class="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <slot name="primary" />
        <slot name="secondary" />
      </div>
    </section>
  </main>

  <footer class="border-t border-white/10 bg-slate-950/80 py-6 text-center text-xs text-slate-500">
    AirWise © {new Date().getFullYear()} · Crafted for loyalty strategists & frequent flyers
  </footer>
</div>
