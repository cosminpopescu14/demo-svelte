<script>
    import { onMount } from 'svelte'
    import { onInterval } from './utils.js';
    import { tick } from 'svelte';

    let photos = []

    //runs after the component is first rendered to the DOM.
    onMount( async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`)
        photos = await res.json()
    })

    let seconds = 0;
    onInterval(() => seconds += 1, 1000)

    //tick lifecycle
    let text = `Select some text and hit the tab key to toggle uppercase`

    async function handleKeydown(event) {
        if (event.key !== 'Tab')
            return;

        event.preventDefault()
        const {selectionStart, selectionEnd, value} = this
        const selection = value.slice(selectionStart, selectionEnd)

        const replacement = /[a-z]/.test(selection)
            ? selection.toUpperCase()
            : selection.toLowerCase();

        text = (value.slice(0, selectionStart) + replacement + value.slice(selectionEnd))

        // https://svelte.dev/tutorial/tick
        await tick()
        this.selectionStart = selectionStart
        this.selectionEnd = selectionEnd
    }


</script>

<style>
    .photos {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 8px;
    }

    figure, img {
        width: 100%;
        margin: 0;
    }
    textarea {
        width: 100%;
        height: 200px;
    }
</style>

<h1>Photo album (onMount)</h1>
<p>
    Inspect element for onMount
</p>
<div class="photos">
    {#each photos as photo}
        <figure>
            <img src={photo.thumbnailUrl} alt={photo.title}>
            <figcaption>{photo.title}</figcaption>
        </figure>
    {:else}
        <!-- this block renders when photos.length === 0 -->
        <p>loading...</p>
    {/each}
</div>

<p>
    The page has been open for
    {seconds} {seconds === 1 ? 'second' : 'seconds'}
</p>

<textarea value={text} on:keydown={handleKeydown}></textarea>