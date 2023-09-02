<script lang="ts">
  import type { PageData } from "./$types";
  import { goto } from "$app/navigation";
  import Button from "$components/base/Button.svelte";

  export let data: PageData;

  let email = "";
  let password = "";

  const handleLogin = async () => {
    const { error } = await data.supabase.auth.signInWithPassword({
      email,
      password
    });

    await goto("/");
  }
</script>

<main class="flex justify-center items-center h-full">
  <form on:submit|preventDefault={handleLogin} class="flex flex-col items-center">
    <input type="email" name="email" class="text-black" bind:value={email} />
    <input type="password" name="password" class="text-black" bind:value={password} />

    <Button type="submit">Login</Button>
  </form>
</main>
