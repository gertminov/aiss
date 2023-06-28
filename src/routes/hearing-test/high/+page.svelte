<script>

    import SineSweep from "../SineSweep.svelte";
    import {hearingTestResultStore, sessionID} from "../../../store.ts";
    import {getContext} from "svelte";
    import {goto} from "$app/navigation";

    const toMartin = getContext("isMartin")

    let nextPage = "/"

    if (toMartin === "image") {
        nextPage = "https://audiometapher.limesurvey.net/255898?lang=de-easy"
    } else if (toMartin === "metaphor") {
        nextPage = "https://audiometapher.limesurvey.net/2?lang=de-easy"
    }


    let active = false

    async function writeToStore(e) {
        active = true
        console.log(e.detail.value)
        $hearingTestResultStore.highFreq = Math.round(e.detail.value)
        $hearingTestResultStore.sessionID = $sessionID
        await fetch("/api/hearing-test", {
            method: "POST",
            body: JSON.stringify($hearingTestResultStore)
        })

    }
</script>

<SineSweep direction="down" on:ready={writeToStore}/>
<p>Frage 4/4</p>
<button on:click={()=>{goto(nextPage)}}  disabled={!active} class="btn font-bold md:w-32 w-full variant-filled-primary">Weiter</button>
