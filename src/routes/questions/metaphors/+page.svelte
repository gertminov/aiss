<script lang="ts">
    import LockedStep from "$lib/LockedStep.svelte";
    import QuestionAndAnswer from "$lib/QuestionAndAnswer.svelte";
    import CenterStepper from "$lib/CenterStepper.svelte";
    import {audioMetaphorQuestions} from "../../../store";

    const data = $audioMetaphorQuestions



</script>

<CenterStepper nextRoute="/end">
    {#each data as entry }
        <LockedStep  let:setLocked>
            <QuestionAndAnswer data={entry} {setLocked} />
        </LockedStep>
    {/each}
</CenterStepper>
