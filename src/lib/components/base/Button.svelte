<script lang="ts">
  import { cn } from "$lib/utils";

  export let outline = false;

  export { className as class };
  let className: string;
</script>

<button
  class={cn(
    "btn bg-primary px-6 py-2 rounded-sm text-sm border-primary",
    {
      "bg-transparent": outline,
      "border": outline,
    },
    className
  )}>
  <slot />
</button>
