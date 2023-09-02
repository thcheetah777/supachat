<script lang="ts">
  import { cn } from "$lib/utils"

  let className = "";
  export { className as class };
</script>

<input
  class={cn(
    "p-2 outline-none bg-neutral-darkest text-white rounded-sm",
    className,
  )} {...$$restProps} />
