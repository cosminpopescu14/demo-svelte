<script>
    let name = 'world'

    let a = 1
    let b = 2

    let yes = false

    let scoops = 1
    let flavours = ['Mint choc chip']

    let menu = [
        'Cookies and cream',
        'Mint choc chip',
        'Raspberry ripple'
    ]

    function join(flavours) {
        if (flavours.length === 1) {
            return flavours[0]
        }
        return `${flavours.slice(0, -1).join(', ')} and ${flavours[flavours.length - 1]}`
    }

    let questions = [
        { id: 1, text: `Where did you go to school?` },
        { id: 2, text: `What is your mother's name?` },
        { id: 3, text: `What is another personal fact that an attacker could easily find with Google?` }
    ]

    let selected
    let answer = ''

    function handleSubmit() {
        alert(`answered question ${selected.id} (${selected.text}) with "${answer}"`)
    }

    let html = '<p>Write some text!</p>'

    let todos = [
        { done: false, text: 'finish Svelte tutorial' },
        { done: false, text: 'build an app' },
        { done: false, text: 'world domination' }
    ]

    function add() {
        todos = todos.concat({ done: false, text: '' })
    }

    function clear() {
        todos = todos.filter(t => !t.done)
    }

    $: remaining = todos.filter(t => !t.done).length
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


<p>
    bind:group - inputs relating to the same value
    Radio inputs in the same group are mutually exclusive; checkbox inputs in the same group form an array of selected values.
</p>
<h2>Size</h2>

<label>
    <input type=radio bind:group={scoops} value={1}>
    One scoop
</label>

<label>
    <input type=radio bind:group={scoops} value={2}>
    Two scoops
</label>

<label>
    <input type=radio bind:group={scoops} value={3}>
    Three scoops
</label>

<h2>Flavours</h2>

<select multiple bind:value={flavours}>
    {#each menu as flavour}
        <option value={flavour}>
            {flavour}
        </option>
    {/each}
</select>
<!--{#each menu as flavour}-->
<!--    <label>-->
<!--        <input type=checkbox bind:group={flavours} value={flavour}>-->
<!--        {flavour}-->
<!--    </label>-->
<!--{/each}-->


{#if flavours.length === 0}
    <p>Please select at least one flavour</p>
{:else if flavours.length > scoops}
    <p>Can't order more flavours than scoops!</p>
{:else}
    <p>
        You ordered {scoops} {scoops === 1 ? 'scoop' : 'scoops'}
        of {join(flavours)}
    </p>
{/if}

<style>
    input { display: block; width: 500px; max-width: 100%; }
    [contenteditable] {
        padding: 0.5em;
        border: 1px solid #eee;
        border-radius: 4px;
    }
    .done {
        opacity: 0.4;
    }
</style>



<p>
    bind:select
    Note that the option values are objects rather than strings. Svelte doesn't mind.
    Because we haven't set an initial value of selected, the binding will set it to the default value (the first in the list) automatically.
    Be careful though — until the binding is initialised, selected remains undefined, so we can't blindly reference e.g. selected.id in the template.
</p>
<h2>Insecurity questions</h2>

<form on:submit|preventDefault={handleSubmit}>
    <select bind:value={selected} on:change="{() => answer = ''}">
        {#each questions as question}
            <option value={question}>
                {question.text}
            </option>
        {/each}
    </select>

    <input bind:value={answer}>

    <button disabled={!answer} type=submit>
        Submit
    </button>
</form>

<p>selected question {selected ? selected.id : '[waiting...]'}</p>

<p>
    Elements with a contenteditable="true" attribute support textContent and innerHTML bindings:
</p>
<div contenteditable="true" bind:innerHTML={html}></div>

<pre>{html}</pre>


<p>
    we can use bind inside each blocks.
</p>
<h1>Todos</h1>

{#each todos as todo}
    <div class:done={todo.done}>
        <input
                type=checkbox
                bind:checked={todo.done}
        >

        <input
                placeholder="What needs to be done?"
                bind:value={todo.text}
        >
    </div>
{/each}

<p>{remaining} remaining</p>

<button on:click={add}>
    Add new
</button>

<button on:click={clear}>
    Clear completed
</button>