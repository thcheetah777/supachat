<script lang="ts">
  import type { PageData } from "./$types";
  import { goto } from "$app/navigation";

  export let data: PageData;

  let email = "";
  let password = "";

  const handleSignUp = async () => {
    const { error } = await data.supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.log(error.status);
      return;
    }

    await goto("/");
  }
</script>

<form on:submit|preventDefault={handleSignUp}>
  <input type="email" name="email" class="text-black" bind:value={email} />
  <input type="password" name="password" class="text-black" bind:value={password} />

  <button type="submit">Sign Up</button>
</form>
