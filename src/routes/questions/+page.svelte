<script lang="ts">
    import LockedStep from "$lib/LockedStep.svelte";
    import QuestionAndAnswer from "$lib/QuestionAndAnswer.svelte";
    import CenterStepper from "$lib/CenterStepper.svelte";
    import {audioQuestions} from "../../store";

    const data = $audioQuestions



</script>

<CenterStepper nextRoute="/questions/metaphors" completeName="Nächster Abschnitt">
    {#each data as entry }
        <LockedStep  let:setLocked>
            <QuestionAndAnswer data={entry} {setLocked} />
        </LockedStep>
    {/each}
</CenterStepper>
