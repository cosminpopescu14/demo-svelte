<script>
    import Inner from './Inner.svelte'
    import CustomButton from './CustomButton.svelte';

    let m = { x: 0, y: 0 };

    function handleMousemove(event) {
        m.x = event.clientX
        m.y = event.clientY
    }

    function handleClick() {
        alert('no more alerts')
    }

    //consume the event from Inner
    function handleMessage(event) {
        alert(event.detail.text)
    }
</script>

<style>
    div { width: 100%; height: 100%; }
</style>

<div on:mousemove={handleMousemove}>
    The mouse position is {m.x} x {m.y}
</div>

<br/>



<p>
    Inline Event. See source
</p>
<div on:mousemove="{e => m = { x: e.clientX, y: e.clientY }}">
    The mouse position is {m.x} x {m.y}
</div>
<p>
    In some frameworks you may see recommendations to avoid inline event handlers for performance reasons, particularly inside loops.
    That advice doesn't apply to Svelte — the compiler will always do the right thing, whichever form you choose.
</p>

<article>
    DOM event handlers can have modifiers that alter their behaviour.
    For example, a handler with a once modifier will only run a single time:
    You can chain modifiers together
</article>
<button on:click|once={handleClick}>
    Click me
</button>

<article>
    Event from Inner component
    Events component is listening to the messages dispatched by Inner using on:message directive.
    The nam can be wherever, but iy must be the the same as in dispatch
</article>
<Inner on:greet={handleMessage}/>

<article>
    Event forwarding for DOM events
</article>
<CustomButton on:click={handleClick}/>