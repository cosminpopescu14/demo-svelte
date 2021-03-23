<script>
    //this components will dispatch an event

    /*
    createEventDispatcher must be called when the component is first instantiated
    you can't do it later inside e.g. a setTimeout callback. This links dispatch to the component instance.

    Also the events can be forwarded. Useful for deeply components
     */
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher()

    function sayHello() {
        dispatch('greet', {
            text: 'Hello Cosmin!'
        })
    }
</script>


<button on:click={sayHello}>
    Click to say hello!
</button>