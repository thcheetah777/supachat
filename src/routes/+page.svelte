<script lang="ts">
  import { goto } from "$app/navigation";
  import type { PageData } from "./$types";

  export let data: PageData;

  const handleLogOut = async () => {
    await data.supabase.auth.signOut();

    await goto("/");
  }
</script>

<h1>Welcome, {data.session?.user.email ?? "Random person"}!</h1>

<button on:click|preventDefault={handleLogOut}>Log out</button>
