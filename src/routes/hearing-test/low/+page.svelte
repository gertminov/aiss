<script>

    import SineSweep from "../SineSweep.svelte";
    import {hearingTestResultStore} from "../../../store.ts";
    import {goto} from "$app/navigation";

    let active = false
    function writeToStore(e) {
        active = true
        console.log(e.detail.value)
        $hearingTestResultStore.lowFreq = Math.round(e.detail.value)
    }
</script>

<SineSweep on:ready={writeToStore}/>
<p>Frage 3/4</p>
<button on:click={()=>{goto("high")}}  disabled={!active} class="btn font-bold md:w-32 w-full variant-filled-primary">Weiter</button>
