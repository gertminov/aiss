<script lang="ts">
    import LockedStep from "$lib/LockedStep.svelte";
    import QuestionAndAnswer from "$lib/QuestionAndAnswer.svelte";
    import CenterStepper from "$lib/CenterStepper.svelte";
    import {audioMetaphorQuestions} from "../../../store";
    import {getExpoContext} from "$lib/expoContext";

    let data = $audioMetaphorQuestions

    const tooManySteps = data.length > 25


    const expoQuestions = [
        {answer: "smooth:smooth-chopped", option: "Unproblematisch",},
        {answer: "bright:harmonic-high-cut", option: "Fröhlich"},
        {answer: "straight", option: "Moralisch"},
        {answer: "heavy:808-plug", option: "Sicher"},
        {answer: "matching:different-same-sound", option: "Ruhig"}
    ]


    const isExpo = getExpoContext();
    if (isExpo) {
        let expoData = []
        for (let datum of data) {
            for (let expoQuestion of expoQuestions) {
                if (datum.answers.one.id == expoQuestion.answer && datum.options[0].text == expoQuestion.option) {
                    expoData.push(datum)
                }
            }
        }
        data = expoData
    }
    console.log(data.length)
    const nextRoute = isExpo ? "/finish/expo" : "end"


</script>

<CenterStepper {nextRoute} {tooManySteps}>
    {#each data as entry }
        <LockedStep let:setLocked>
            <QuestionAndAnswer data={entry} {setLocked}/>
        </LockedStep>
    {/each}
</CenterStepper>
