<script>
    import OneSideVolume from "../OneSideVolume.svelte";
    import {hearingTestResultStore} from "../../../store.ts";
    import {goto} from "$app/navigation";
    let active = false
    function writeToStore(e) {
        active = true
        console.log(e.detail.value)
        $hearingTestResultStore.volLeft = Math.round(e.detail.value)
    }
</script>

<OneSideVolume channel="left" on:ready={writeToStore}/>
<p>Frage 1/4</p>
<button on:click={()=>{goto("right")}}  disabled={!active} class="btn font-bold md:w-32 w-full variant-filled-primary">Weiter</button>
