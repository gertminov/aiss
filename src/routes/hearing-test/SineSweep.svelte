<script lang="ts">
    import * as Tone from 'tone'

    import {createEventDispatcher, onDestroy, onMount} from "svelte";
    import {browser} from "$app/environment";


    export let direction: "up" | "down" = "up"

    const startFreq = direction == "up" ? "20Hz" : "20000Hz"
    const endFreq = direction == "up" ? "20000Hz" : "20Hz"

    let synth: Tone.Synth
    let playing = false

    const dispatch = createEventDispatcher()

    onMount(() => {
        window.addEventListener("keypress", playPause)
    })


    if (browser) {
        onDestroy(() => {
            window.removeEventListener("keypress", playPause)
        })
    }

    async function playPause(e: KeyboardEvent) {
        if (e.code == "Space") {
            if (!synth) await setup()

            if (playing) {
                synth.triggerRelease()
                playing = false
                dispatch("ready", {value: synth.frequency.value})
            } else {
                playing = true
                play()
            }
        }
    }

    async function setup() {
        synth = new Tone.Synth({
            oscillator: {
                type: "sine",
            },
            envelope: {
                attack: direction == "up" ? 0.4 : 0.04,
                sustain: 1,
                release: 0.2
            }
        }).toDestination()
        await Tone.start()
    }

    function play() {
        synth.frequency.value = startFreq
        // osc.frequency.value = startFreq
        // ramp to "C2" over 2 seconds
        // osc.frequency.rampTo(endFreq, 20);

        synth.triggerAttack(startFreq)
        synth.frequency.rampTo(endFreq, 20)
        synth.triggerRelease(Tone.now() + 20)
        // start the oscillator for 2 seconds
        // osc.start().stop("+20")
    }
</script>

<div class="h-8">
    {#if playing}
        <iconify-icon class="" height="2em" icon="material-symbols:pause-rounded"></iconify-icon>
    {:else}
        <iconify-icon class="" height="2em" icon="material-symbols:play-arrow-rounded"></iconify-icon>
    {/if}
</div>