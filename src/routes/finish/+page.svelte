<script lang="ts">
    import {browser} from "$app/environment";
    import AudioResult from "$lib/data/AudioResult";
    import {audioResultsStore, clearAllStores} from "../../store";
    import type {NewAudioResultModel} from "$lib/data/AudioResult.js";
    import MiddleCard from "$lib/MiddleCard.svelte";
    //@ts-ignore
    import {Confetti} from "svelte-confetti"
    import {onMount} from "svelte";


    let responseError = false
    let waitingForResponse = true
    let responseSuccess = false

    onMount(() => {
        let audioResults = Object.values($audioResultsStore).map(val => AudioResult.fromData(val).toDrizzle())

        sendData(audioResults)
    })

    async function sendData(audioResults: NewAudioResultModel[]) {
        console.log("audioData")
        console.log(audioResults)
        setTimeout(() => {
            if (!responseSuccess){
                responseError = true;
                console.log("timeOut")
            }
        }, 5000)
        console.log("before Fetch")
        const res = await fetch("/api/results/audio", {
            method: "POST",
            body: JSON.stringify(audioResults)
        })
        console.log("after Fetch")
        if (res.ok) {
            console.log("res ok")
            waitingForResponse = false
            responseSuccess = true
            clearAllStores()
        } else {
            responseError = true
            console.log("Error:")
            console.log("status:", res.status)
            console.log("statusText:", res.statusText)
        }
    }

</script>
<div class="h-full w-full  grid place-content-center">
    <div class="h-0 flex justify-center">
        <Confetti x={[-1.3, 1.3]} y={[0.25, 1]}/>
    </div>
    <MiddleCard>
        <div class="card-header"><h1 class="h1 font-bold">Danke fürs mitmachen</h1></div>
        {#if !responseError}
            {#if waitingForResponse}
                <section class="flex flex-col items-center">
                    <p>Daten werden Gesendet, Fenster bitte nicht schließen</p>
                    <iconify-icon width="2.5em" icon="line-md:loading-loop"></iconify-icon>
                </section>
            {:else}
                <section class="p-5 text-center">Sie könnnen das Fenster jetzt schließen</section>
            {/if}
        {:else}
            <section class="p-5 text-center">⚠️Es gab ein kleines technisches Problem.⚠️<br>Bitte geben sie der Versuchsleitung Bescheid
            </section>
        {/if}
    </MiddleCard>
</div>