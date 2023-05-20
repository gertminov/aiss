<script lang="ts">
    import Question from "$lib/Question.svelte";
    import {ne} from "drizzle-orm";

    export let text = "no Question Text Given"
    export let nextRoute

    let active
    function unlockButton(e) {
        let inputValue = e.target.value
        active = !!inputValue;

    }
</script>
<Question {text} {active} next={nextRoute}>
    <input on:input={unlockButton} class="input" name="age" id="age" title="Input (number)" type="number"/>
</Question>
