<script lang="ts">
  import clsx from "clsx";

  export let label: string;
  export let value: string | number;
  export let tone: "brand" | "mint" | "amber" = "brand";

  const toneStyles = {
    brand: "border-brand-300/40 bg-brand-500/10 text-brand-200",
    mint: "border-[#5CF5D7]/30 bg-[#5CF5D7]/10 text-[#B3FFE9]",
    amber: "border-[#FFC169]/30 bg-[#FFC169]/10 text-[#FFE3B0]"
  };
</script>

<div
  class={clsx(
    "inline-flex min-w-[6rem] items-center justify-between gap-3 rounded-full border px-3 py-1.5 text-xs font-semibold",
    toneStyles[tone]
  )}
>
  <span class="uppercase tracking-wide">{label}</span>
  <span class="font-mono text-sm">{value}</span>
</div>
