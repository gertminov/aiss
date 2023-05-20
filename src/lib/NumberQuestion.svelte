<script lang="ts">
    import BigButton from "$lib/BigButton.svelte";
    import {goto} from "$app/navigation";

    function onSubmit(e) {
        const formData = new FormData(e.target);
        for (let field of formData) {
            const [key, value] = field;
            console.log(value)
        }
        goto("questions")
    }

    let disabled = "true"
    function unlockButton(e) {
        let inputValue = e.target.value
        if (inputValue) {
            disabled = "";
        } else {
            disabled= "true"
        }

    }
</script>
<form on:submit|preventDefault={onSubmit} class="p-4 flex flex-col gap-4">
    <label for="age" class="h3">Wie alt sind Sie?</label>
    <input on:input={unlockButton} class="input" name="age" id="age" title="Input (number)" type="number"/>
    <div class="flex justify-end items-center">
        <span class="px-4 md:inline hidden text-white/40">Enter für weiter</span>
        <BigButton bind:disabled={disabled} type="submit">Weiter</BigButton>
    </div>
</form>
