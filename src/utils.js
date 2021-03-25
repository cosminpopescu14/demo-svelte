import { onDestroy } from 'svelte'

//export the function for further usage
export function onInterval(callback, milliseconds) {
    const interval = setInterval(callback, milliseconds)

    //To run code when your component is destroyed, use onDestroy.
    // you can do clean up work
    // it doesn't matter where you call them from.
    onDestroy(() => {
        clearInterval(interval)
    })
}