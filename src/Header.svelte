<script>
    import Users from "./Users.svelte";
    import Dog from "./Dog.svelte";

    export let menu = 1;
</script>

<style>
    ul#menu li{
        display : inline;
    }
</style>

<ul id="menu">
    <li><a href="Dog.svelte" on:click|preventDefault={() => (menu = 1)}>Dog</a></li> |
    <li><a href="Users.svelte" on:click|preventDefault={() => (menu = 2)}>Users</a></li>
</ul>

{#if menu === 1}
    <Dog />
{:else if menu === 2}
    <Users />
{:else}
    <h1>
        Page Not Found
    </h1>
{/if}
