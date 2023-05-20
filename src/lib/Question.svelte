<script lang="ts">

    import {goto} from "$app/navigation";
    import BigButton from "$lib/BigButton.svelte";

    export let next = ""
    export let text = "empty Question Text"

    export let form
    function onSubmit(e) {
        console.log("submit")
        const formData = new FormData(e.target);
        for (let field of formData) {
            const [key, value] = field;
            console.log(value)
        }
        goto(next)
    }
    export let active = false
    $: disabled = active? "": "true"

</script>
<div class="flex flex-col gap-4">
   <p class="px-4">{@html text}</p>
    <form bind:this={form} on:submit|preventDefault={onSubmit} class="p-4 flex flex-col gap-4">
        <slot/>
        <div class="flex justify-end items-center">
            <span class="px-4 md:inline hidden text-white/40">Enter für weiter</span>
            <BigButton bind:disabled={disabled} type="submit">Weiter</BigButton>
        </div>
    </form>
</div>
