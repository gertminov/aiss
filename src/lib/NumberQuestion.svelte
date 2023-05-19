<script lang="ts">
    export let setLocked: (state: boolean)=> void
    export let nextStep: ()=> void
    function onSubmit(e) {
        const formData = new FormData(e.target);
        for (let field of formData) {
            const [key, value] = field;
            console.log(value)
        }
        nextStep()
        setLocked(false)
    }
</script>
<form on:submit|preventDefault={onSubmit} class="p-4 flex flex-col gap-4">
    <label for="age" class="h3">Wie alt sind Sie?</label>
    <input class="input" name="age" id="age" title="Input (number)" type="number"/>
    <div class="flex justify-end items-center">
        <span class="px-4 md:inline hidden text-white/40">Enter für weiter</span>
<!--        <BigButton type="submit">Weiter</BigButton>-->
    </div>
</form>
