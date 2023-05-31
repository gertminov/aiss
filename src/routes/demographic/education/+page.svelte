<script lang="ts">
    import MiddleCard from "$lib/MiddleCard.svelte";
    import RadioQuestion from "$lib/RadioQuestion.svelte";
    import {onMount} from "svelte";
    import {surveyProgress} from "../../../store";

    let options = ["Hauptschule", "Abitur", "Bachelor Studium", "Master Studium"]
    let questionText = "Was ist ihr höchster Bildungsabschluss"
    let nextRoute = "/demographic/work"
    const questionID = "education"
    onMount(()=>{$surveyProgress.current++})
</script>

<MiddleCard bg={false}>
    <RadioQuestion {nextRoute}
                   {options}
                   {questionText}
                   {questionID}
                   vertical={true}/>
</MiddleCard>
