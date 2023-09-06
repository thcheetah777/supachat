<script lang="ts">
  import type { PageData } from "./$types";
  import { goto } from "$app/navigation";
  import Button from "$components/base/Button.svelte";
  import Input from "$components/base/Input.svelte";

  export let data: PageData;

  let email = "";
  let password = "+layout";

  async function handleLogin() {
    const { error } = await data.supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log(error);
      return;
    }

    await goto("/");
  }
</script>

<main class="flex justify-center items-center h-full">
  <form on:submit|preventDefault={handleLogin} class="flex flex-col items-center space-y-2">
    <Input
      type="email"
      name="email"
      placeholder="Your email..."
      bind:value={email} />
    <Input
      type="password"
      name="password"
      placeholder="Your password..."
      bind:value={password} />

    <Button type="submit" disabled={!(email && password)}>Login</Button>
  </form>
</main>
