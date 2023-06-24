<script lang="ts">
    import MiddleCard from "$lib/MiddleCard.svelte";
    import {goto} from "$app/navigation";
    import {onDestroy} from "svelte";
    import {browser} from "$app/environment";
    import {sessionID} from "../../store";

    let playsInstrument = false
    let timePlaying
    $: next = !timePlaying || timePlaying <= 0

    onDestroy(async () => {
        if (browser) {
            await fetch("/api/results/instrument", {
                method: "POST",
                body: JSON.stringify({
                    sessionID: $sessionID,
                    timePlaying: timePlaying || 0
                })
            });
        }
    })
</script>

<MiddleCard>
    <div class="flex flex-col justify-center gap-8 h-44">
        {#if !playsInstrument}
            <h3 class="h3 text-center">Spielen sie ein Instrument?</h3>
            <div class="flex  justify-center gap-8">
                <button on:click={()=> playsInstrument = true} class="btn variant-filled-surface">Ja</button>
                <!--        <a href="/end/instrument" class="btn variant-filled-surface">Ja</a>-->
                <a href="/finish" class="btn variant-filled-surface">Nein</a>
            </div>
        {:else}
            <h3 class="h3 text-center">Wie viele Jahre spielen Sie schon ein Instrument?</h3>
            <form
                    class="flex flex-col gap-8"
                    action="/finish"
            >
                <input type="number" class="input" bind:value={timePlaying}>
                <div class="flex justify-center">
                    <button type="submit" disabled={next} class="btn variant-filled-primary">Weiter
                    </button>
                </div>
            </form>
        {/if}
    </div>
</MiddleCard>
