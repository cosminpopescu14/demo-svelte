<script>
    let name = 'world'

    let a = 1
    let b = 2

    let yes = false
</script>

<article>
    The value of the text will be updated as we write in the textbox bellow
</article>
<input bind:value={name}>

<h1>Hello {name}!</h1>


<article>
    In the DOM, everything is a string.
    That's unhelpful when you're dealing with numeric inputs — type="number" and type="range" — as it means you have to remember to coerce input.value before using it.
</article>
<label>
    <input type=number bind:value={a} min=0 max=10>
    <input type=range bind:value={a} min=0 max=10>
</label>

<label>
    <input type=number bind:value={b} min=0 max=10>
    <input type=range bind:value={b} min=0 max=10>
</label>

<p>{a} + {b} = {a + b}</p>


<p>
    Bind checkbox for spam 😁
</p>
<label>
    <input type=checkbox bind:checked={yes}>
    Yes! Send me regular email spam
</label>

{#if yes}
    <p>Thank you. We will bombard your inbox and sell your personal details.</p>
{:else}
    <p>You must opt in to continue. If you're not paying, you're the product.</p>
{/if}

<button disabled={!yes}>
    Subscribe
</button>