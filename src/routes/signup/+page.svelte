<script lang="ts">
  import type { PageData } from "./$types";
  import { goto } from "$app/navigation";
  import Button from "$components/base/Button.svelte";
  import Input from "$components/base/Input.svelte";

  export let data: PageData;

  let email = "";
  let password = "";

  async function handleSignUp() {
    const { error } = await data.supabase.auth.signUp({
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
  <form on:submit|preventDefault={handleSignUp} class="flex flex-col items-center space-y-2">
    <Input type="email" name="email" class="text-black" bind:value={email} />
    <Input type="password" name="password" class="text-black" bind:value={password} />

    <Button type="submit">Sign Up</Button>
  </form>
</main>
