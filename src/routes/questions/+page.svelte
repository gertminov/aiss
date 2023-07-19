<script lang="ts">
    import LockedStep from "$lib/LockedStep.svelte";
    import QuestionAndAnswer from "$lib/QuestionAndAnswer.svelte";
    import CenterStepper from "$lib/CenterStepper.svelte";
    import {audioQuestions} from "../../store";
    import {getExpoContext} from "$lib/expoContext";

    let data = $audioQuestions

    const expoQuestions = [
        "hard:fast-slow_adsr",
        "matching:repetition",
        "clean:sine-fm",
        "fast:8th-16th",
        "warm:chord-plug"
    ]

    const isExpo = getExpoContext();
    if (isExpo) {
        data = data.filter(entry => expoQuestions.includes(entry.answers.one.id as string))
    }

    const nextRoute = isExpo ? "/questions/metaphors" : "questions/pause"

</script>

<CenterStepper {nextRoute} completeName="Nächster Abschnitt">
    {#each data as entry }
        <LockedStep  let:setLocked>
            <QuestionAndAnswer data={entry} {setLocked} />
        </LockedStep>
    {/each}
</CenterStepper>
