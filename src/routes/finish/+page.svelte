<script lang="ts">
    import {browser} from "$app/environment";
    import AudioResult from "$lib/data/AudioResult";
    import {audioResultsStore, clearAllStores} from "../../store";
    import type {NewAudioResultModel} from "$lib/data/AudioResult.js";
    import MiddleCard from "$lib/MiddleCard.svelte";
    //@ts-ignore
    import {Confetti} from "svelte-confetti"

    if (browser) {
        let audioResults = Object.values($audioResultsStore).map(val => AudioResult.fromData(val).toDrizzle())

        sendData(audioResults)

    }

    let responseError = false

    async function sendData(audioResults: NewAudioResultModel[]) {
        console.log("audioData")
        console.log(audioResults)
        const res = await fetch("/api/results/audio", {
            method: "POST",
            body: JSON.stringify(audioResults)
        })
        if (res.ok) {
            clearAllStores()
        }else{
            responseError = true
            console.log("Error:")
            console.log("status:", res.status)
            console.log("statusText:",res.statusText)
        }
    }

</script>
<div class="h-full w-full  grid place-content-center">
    <div class="h-0 flex justify-center">
        <Confetti x={[-1.3, 1.3]} y={[0.25, 1]} />
    </div>
    <MiddleCard>
        <div class="card-header"><h1 class="h1 font-bold">Danke fürs mitmachen</h1></div>
        {#if !responseError}
            <section class="p-5 text-center">Sie könnnen das Fenster jetzt schließen</section>
        {:else}
            <section>⚠️ Es gab ein kleines technisches Problem ⚠️. Bitte geben sie der Versuchsleitung bescheit</section>
        {/if}
    </MiddleCard>
</div>