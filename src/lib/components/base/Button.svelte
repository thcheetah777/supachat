<script lang="ts">
  import { cn } from "$lib/utils";

  export let outline = false;

  export { className as class };
  let className: string;
</script>

<button
  class={cn(
    "btn px-6 py-2 rounded-sm text-sm duration-150",
    {
      "bg-primary hover:bg-secondary active:bg-tertiary": !outline,
      "bg-transparent hover:bg-primary active:bg-secondary border-primary border-[1px]": outline,
    },
    className
  )}>
  <slot />
</button>
