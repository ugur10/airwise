<script lang="ts">
  import clsx from "clsx";

export let headline: string | null = null;
export let description: string | null = null;
export let padding: "sm" | "md" | "lg" = "lg";
export let border = true;
export let as: "section" | "article" | "div" = "section";
  export let highlight = false;

  const paddingClass = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  }[padding];

</script>

<svelte:element
  this={as}
  class={clsx(
    "relative flex flex-col gap-5 rounded-3xl bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent backdrop-blur-xl",
    paddingClass,
    border && "border border-white/10",
    highlight && "border-brand-300/40 shadow-[0_45px_120px_-80px_rgba(34,139,255,0.8)]"
  )}
>
  <div class="pointer-events-none absolute -top-16 right-10 h-32 w-32 rounded-full bg-brand-500/20 blur-3xl"></div>

  <slot name="eyebrow" />

  {#if headline}
    <div class="space-y-2">
      <h3 class="font-heading text-xl font-semibold text-white">{headline}</h3>
      {#if description}
        <p class="text-sm leading-relaxed text-slate-300">{description}</p>
      {/if}
    </div>
  {/if}

  <slot />
</svelte:element>
