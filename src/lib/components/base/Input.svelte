<script lang="ts">
  import { cn } from "$lib/utils"

  export let message = "";
  export let value = "";

  let className = "";
  export { className as class };
</script>

<input
  class={cn(
    "p-2 outline-none bg-neutral-darkest text-white rounded-sm",
    className,
  )}
  bind:value={value}
  {...$$restProps} />

<small class="text-error">{message}</small>
