<script lang="ts">
    import {questions} from "$lib/data/Questions";
    import LockedStep from "$lib/LockedStep.svelte";
    import QuestionAndAnswer from "$lib/QuestionAndAnswer.svelte";
    import CenterStepper from "$lib/CenterStepper.svelte";

    const data = questions



</script>

<CenterStepper>
    {#each data as entry }
        <LockedStep  let:setLocked>
            <QuestionAndAnswer data={entry} {setLocked} />
        </LockedStep>
    {/each}
</CenterStepper>
