<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "$components/base/Button.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  const handleLogOut = async () => {
    await data.supabase.auth.signOut();

    await goto("/");
  }
</script>

<h1>Welcome, {data.session?.user.email ?? "random person"}!</h1>

<Button outline on:click={handleLogOut}>Log out</Button>
