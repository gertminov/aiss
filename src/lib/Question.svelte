<script lang="ts">

    import {goto} from "$app/navigation";
    import BigButton from "$lib/BigButton.svelte";
    import {onMount} from "svelte";

    export let next = ""
    export let text = "empty Question Text"

    export let form

    export let listenForEnter = false

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
    <form bind:this={form} on:submit|preventDefault={onSubmit} class="p-4 flex flex-col gap-4 items-center">
        <slot/>
        <div class="flex justify-end items-center">
            <span class="px-4 md:inline hidden text-white/40">Enter für weiter</span>
            <BigButton bind:disabled={disabled} type="submit">Weiter</BigButton>
        </div>
    </form>
</div>
