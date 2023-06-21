<script>
    import OneSideVolume from "../OneSideVolume.svelte";
    import {hearingTestResultStore} from "../../../store.ts";
    let active = false
    function writeToStore(e) {
        active = true
        console.log(e.detail.value)
        $hearingTestResultStore.volLeft = Math.round(e.detail.value)
    }
</script>

<OneSideVolume channel="left" on:ready={writeToStore}/>
<p>Frage 1/4</p>
<a href="right" class:bg-surface-300={!active} class:variant-filled-primary={active} class="btn font-bold md:w-32 w-full">Weiter</a>
