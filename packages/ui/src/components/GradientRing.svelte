<script lang="ts">
  import clsx from "clsx";

  export let size: "sm" | "md" | "lg" = "md";
  export let accent: "sky" | "mint" | "amber" = "sky";

  const sizing = {
    sm: "h-20 w-20",
    md: "h-28 w-28",
    lg: "h-36 w-36"
  };

  const gradients = {
    sky: "from-brand-200 via-brand-400 to-accent-sky",
    mint: "from-accent-mint via-brand-300 to-accent-sky",
    amber: "from-accent-amber via-brand-400 to-accent-mint"
  };
</script>

<div
  class={clsx(
    "relative grid place-items-center overflow-hidden rounded-full",
    sizing[size]
  )}
>
  <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-white/2 to-transparent"></div>
  <div
    class={clsx(
      "absolute inset-[2px] rounded-full bg-slate-950/90 backdrop-blur",
      "shadow-[0_0_40px_rgba(92,165,255,0.3)]"
    )}
  ></div>
  <div
    aria-hidden="true"
    class={clsx(
      "absolute inset-0 rounded-full border border-white/10",
      "before:absolute before:inset-[2px] before:rounded-full before:bg-slate-950",
      "after:absolute after:inset-0 after:animate-[spin_12s_linear_infinite] after:rounded-full",
      "after:bg-gradient-conic after:from-transparent after:via-transparent",
      `after:${gradients[accent]}`
    )}
  ></div>
  <slot />
</div>
