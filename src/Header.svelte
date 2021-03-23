<script>
    import Users from "./Users.svelte";
    import Dog from "./Dog.svelte";
    import Reactivity from "./Reactivity.svelte";
    import Props from "./Props.svelte"
    import Logic from "./Logic.svelte";
    import Events from "./Events.svelte";
    import Bindings from "./Bindings.svelte";

    export let menu = 1;
</script>

<style>
    ul#menu li{
        display : inline;
    }
</style>

<ul id="menu">
    <li><a href="Dog.svelte" on:click|preventDefault={() => (menu = 1)}>Dog</a></li> |
    <li><a href="Users.svelte" on:click|preventDefault={() => (menu = 2)}>Users</a></li> |
    <li><a href="Reactivity.svelte" on:click|preventDefault={() => (menu = 3)}>Reactivity button</a></li> |
    <li><a href="Props.svelte" on:click|preventDefault={() => (menu = 4)}>Props</a></li> |
    <li><a href="Logic.svelte" on:click|preventDefault={() => (menu = 5)}>Logic</a></li> |
    <li><a href="Events.svelte" on:click|preventDefault={() => (menu = 6)}>Events</a></li> |
    <li><a href="Bindings.svelte" on:click|preventDefault={() => (menu = 7)}>Bindings</a></li>
</ul>

{#if menu === 1}
    <Dog />
{:else if menu === 2}
    <Users />
{:else if menu === 3}
    <Reactivity/>
{:else if menu === 4}
    <Props/>
{:else if menu === 5}
    <Logic/>
{:else if menu === 6}
    <Events/>
{:else if menu === 7}
    <Bindings/>
{:else}
    <h1>
        Page Not Found
    </h1>
{/if}
