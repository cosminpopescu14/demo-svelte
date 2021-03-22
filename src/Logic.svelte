<script>
    let user = {
        loggedIn: false
    }

    function toggle() {
        user.loggedIn = !user.loggedIn
    }

    let cats = [
        { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
        { id: 'z_AbfPXTKms', name: 'Maru' },
        { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
    ];

    async function getRandomNumber() {
        const res = await fetch(`https://svelte.dev/tutorial/random-number`)
        const text = res.text()

        if (res.ok) {
            return text;
        } else {
            throw new Error(await text);
        }
    }

    let promise = getRandomNumber();

    function handleClick() {
        promise = getRandomNumber();
    }
</script>

{#if user.loggedIn}
<button on:click={toggle}>
    Log out
</button>
<!--{/if}-->

<!--{#if !user.loggedIn}-->
{:else}
<button on:click={toggle}>
    Log in
</button>
{/if}

<h1>The Famous Cats of YouTube</h1>

<ul>
    <!-- open each block -->
    {#each cats as cat}
    <li><a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
        {cat.name}
    </a></li>
    <!-- close each block -->
    {/each}
</ul>

<button on:click={handleClick}>
    generate random number
</button>

<p>Only the most recent promise is considered, meaning you don't need to worry about race conditions.</p>
{#await promise}
    <p>...waiting</p>
{:then number}
    <p>The number is {number}</p>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

<p>
    If you know that your promise can't reject, you can omit the catch block.
    You can also omit the first block if you don't want to show anything until the promise resolves:
</p>
{#await promise then value}
    <p>the value is {value}</p>
{/await}