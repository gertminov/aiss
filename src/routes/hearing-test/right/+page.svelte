<script>
import OneSideVolume from "../OneSideVolume.svelte";
import {hearingTestResultStore} from "../../../store.ts";
import {goto} from "$app/navigation";
let active = false
function writeToStore(e) {
    active = true
    console.log(e.detail.value)
    $hearingTestResultStore.volRight = Math.round(e.detail.value)
}
</script>

<OneSideVolume channel="right" on:ready={writeToStore}/>
<p>Frage 2/4</p>
<button on:click={()=>{goto("low")}}  disabled={!active} class="btn font-bold md:w-32 w-full variant-filled-primary">Weiter</button>
