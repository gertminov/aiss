<script lang="ts">
    import LockedStep from "$lib/LockedStep.svelte";
    import QuestionAndAnswer from "$lib/QuestionAndAnswer.svelte";
    import CenterStepper from "$lib/CenterStepper.svelte";
    import {audioMetaphorQuestions} from "../../../store";

    const data = $audioMetaphorQuestions

    const tooManySteps = data.length > 25



</script>

<CenterStepper nextRoute="/end" {tooManySteps}>
    {#each data as entry }
        <LockedStep  let:setLocked>
            <QuestionAndAnswer data={entry} {setLocked} />
        </LockedStep>
    {/each}
</CenterStepper>
