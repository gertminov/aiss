<script lang="ts">

    import {goto} from "$app/navigation";
    import BigButton from "$lib/BigButton.svelte";
    import {onMount} from "svelte";
    import {enhance} from "$app/forms";
    import {StorageKeys} from "$lib/data/storageKeys";
    import {sessionID} from "../store";

    export let next = ""
    export let text = "empty Question Text"

    export let questionID: string


    export let form

    export let listenForEnter = false


    export let active = false
    $: disabled = active ? "" : "true"


    onMount(() => {
        if (listenForEnter) {
            window.addEventListener("keydown", (e) => {
                if (e.key == "Enter") {
                    form.requestSubmit();
                }
            })
        }
    })

</script>
<div class="flex flex-col gap-4">
    <div class="flex justify-center"><p class="px-4 h3">{@html text}</p></div>
    <form bind:this={form}
          method="post"
          action="/demographic?/submit"
          use:enhance
          class="p-4 flex flex-col gap-4 items-center">
        <slot/>
        <input type="hidden" name="nextRoute" value={next}>
        <input type="hidden" name={StorageKeys.SESSION_ID} value={$sessionID}>
        <input type="hidden" name="questionID" value={questionID}>
        <div class="flex justify-end items-center">
            <span class="px-4 md:inline hidden text-white/40">Enter für weiter</span>
            <BigButton bind:disabled={disabled} type="submit">Weiter</BigButton>
        </div>
    </form>
</div>
