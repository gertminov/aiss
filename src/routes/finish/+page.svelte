<script lang="ts">
    import {browser} from "$app/environment";
    import AudioResult from "$lib/data/AudioResult";
    import {audioResultsStore, clearAllStores} from "../../store";
    import type {NewAudioResultModel} from "$lib/data/AudioResult.js";

    if (browser) {
        let audioResults: NewAudioResultModel[] = []
        audioResults = Object.values($audioResultsStore).map(val => AudioResult.fromData(val).toDrizzle())

        sendData(audioResults)

    }

    async function sendData(audioResults: NewAudioResultModel[]) {
        console.log("audioData")
        console.log(audioResults)
        const res = await fetch("/api/results/audio", {
            method: "POST",
            body: JSON.stringify(audioResults)
        })
        if (res.ok) {
            clearAllStores()
        }
    }

</script>
<div class="h-full w-full  grid place-content-center">
    <div class="card">
        <div class="card-header"><h1>Danke fürs mitmachen</h1></div>
        <section class="p-4">Du kannst das fenster jetzt schließen</section>
    </div>
</div>