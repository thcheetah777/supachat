<script lang="ts">
  import { cn } from "$lib/utils";

  export let outline = false;

  let className = "";
  export { className as class };
</script>

<button
  class={cn(
    "btn px-6 py-2 rounded-sm text-sm duration-150",
    (
      outline ?
      "bg-transparent hover:bg-primary active:bg-secondary border-primary border-[1px]" :
      "bg-primary hover:bg-secondary active:bg-tertiary disabled:bg-neutral-dark"
    ),
    className,
  )} {...$$restProps} on:click>
  <slot />
</button>
