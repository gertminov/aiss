<script>
import OneSideVolume from "../OneSideVolume.svelte";
import {hearingTestResultStore} from "../../../store.ts";
let active = false
function writeToStore(e) {
    active = true
    console.log(e.detail.value)
    $hearingTestResultStore.volRight = Math.round(e.detail.value)
}
</script>

<OneSideVolume channel="right" on:ready={writeToStore}/>
<p>Frage 2/4</p>
<a href="low" class:bg-surface-300={!active} class:variant-filled-primary={active} class="btn font-bold md:w-32 w-full">Weiter</a>
