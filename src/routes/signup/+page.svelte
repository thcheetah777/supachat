<script lang="ts">
  import type { PageData } from "./$types";
  import { goto } from "$app/navigation";
  import Button from "$components/base/Button.svelte";

  export let data: PageData;

  let email = "";
  let password = "";

  const handleSignUp = async () => {
    const { error } = await data.supabase.auth.signUp({
      email,
      password,
    });

    await goto("/");
  }
</script>

<main class="flex justify-center items-center h-full">
  <form on:submit|preventDefault={handleSignUp} class="flex flex-col items-center">
    <input type="email" name="email" class="text-black" bind:value={email} />
    <input type="password" name="password" class="text-black" bind:value={password} />

    <Button type="submit">Sign Up</Button>
  </form>
</main>
