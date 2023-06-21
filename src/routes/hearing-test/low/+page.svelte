<script>

    import SineSweep from "../SineSweep.svelte";
    import {hearingTestResultStore} from "../../../store.ts";

    let active = false
    function writeToStore(e) {
        active = true
        console.log(e.detail.value)
        $hearingTestResultStore.lowFreq = Math.round(e.detail.value)
    }
</script>

<SineSweep on:ready={writeToStore}/>
<p>Frage 3/4</p>
<a href="high" class:bg-surface-300={!active} class:variant-filled-primary={active}
   class="btn font-bold md:w-32 w-full">Weiter</a>
