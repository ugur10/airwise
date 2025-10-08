<script lang="ts">
  import clsx from "clsx";

  const sizeClass = {
    md: "text-sm px-5 py-2.5",
    lg: "text-base px-6 py-3"
  };

  const intentClass = {
    primary:
      "bg-gradient-to-r from-brand-200 via-brand-400 to-accent-mint text-slate-950 shadow-[0_18px_60px_-28px_rgba(31,133,255,0.8)]",
    outline: "border border-white/20 bg-white/[0.03] text-white",
    ghost: "text-slate-200 hover:bg-white/[0.06]"
  };

  export let size: keyof typeof sizeClass = "md";
  export let intent: keyof typeof intentClass = "primary";
  export let loading = false;
  export let disabled = false;
  export let type: "button" | "submit" = "button";

  $: classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-200",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-200",
    "hover:-translate-y-0.5",
    sizeClass[size],
    intentClass[intent],
    (loading || disabled) && "pointer-events-none opacity-70"
  );
</script>

<button class={classes} disabled={disabled || loading} type={type}>
  <slot name="icon" />
  <slot />
</button>
