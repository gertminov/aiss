<script lang="ts">
    import * as Tone from "tone"
    import {createEventDispatcher, onDestroy, onMount} from "svelte";
    import {browser} from "$app/environment";

    export let channel: "left" | "right" = "left"

    const pan = channel == "left" ? -1 : 1
    let playing = false

    const dispatch = createEventDispatcher()

    let osc
    onMount(() => {
        window.addEventListener("keypress", playPause)
    })


    if (browser) {
        onDestroy(() => {
            window.removeEventListener("keypress", playPause)
        })
    }

    function playPause(e: KeyboardEvent) {
        if (e.code == "Space") {
            if (!osc) setup()

            if (playing) {
                console.log(channel, osc.volume.value);
                osc.stop();
                playing = false
                dispatch("ready", {value: osc.volume.value})
            } else {
                playing = true
                play();
            }
        }
    }

    function setup() {
        const chan = new Tone.Channel(0, pan).toDestination()
        osc = new Tone.Oscillator()
        osc.connect(chan)
    }

    function play() {

        osc.volume.value = -70
        osc.volume.rampTo(0, 10)
        osc.start().stop("+11")
    }
</script>

<div class="h-8">
    {#if playing}
        <iconify-icon class="" height="2em" icon="material-symbols:pause-rounded"></iconify-icon>
    {:else}
        <iconify-icon class="" height="2em" icon="material-symbols:play-arrow-rounded"></iconify-icon>
    {/if}
</div>
