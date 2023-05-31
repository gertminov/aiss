<script lang="ts">
    import MiddleCard from "$lib/MiddleCard.svelte";
    import RadioQuestion from "$lib/RadioQuestion.svelte";
    import {onMount} from "svelte";
    import {surveyProgress} from "../../../store";

    let options = ["männlich", "weiblich", "divers", "keine Angabe"]
    let questionText = "Welchem Geschlecht fühlen sie sich zugehörig?"
    let nextRoute = "/demographic/education"
    const questionID = "gender"
    onMount(()=>{$surveyProgress.current++})
</script>

<MiddleCard bg={false}>
    <RadioQuestion {questionText}
                   {options}
                   {nextRoute}
                   {questionID}
                   vertical={true}/>
</MiddleCard>
