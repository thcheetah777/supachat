<script lang="ts">
  import { cn } from "$lib/utils";

  export let outline = false;
</script>

<button
  class={cn(
    "btn px-6 py-2 rounded-sm text-sm duration-150",
    (
      outline ?
      "bg-primary hover:bg-secondary active:bg-tertiary" :
      "bg-transparent hover:bg-primary active:bg-secondary border-primary border-[1px]"
    ),
    $$restProps.class,
  )} {...$$restProps} on:click|preventDefault>
  <slot />
</button>
