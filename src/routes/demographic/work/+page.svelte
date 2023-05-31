<script lang="ts">
    import MiddleCard from "$lib/MiddleCard.svelte";
    import RadioQuestion from "$lib/RadioQuestion.svelte";
    import {onMount} from "svelte";
    import {surveyProgress} from "../../../store";

    let options = [ "Schüler","Student", "Berufstätig", "Rentner"]
    let questionText = "Was beschreibt ihre momentane Tätigkeit"
    let nextRoute = "/questions/tutorial"
    const questionID = "work"
    onMount(()=>{$surveyProgress.current++})
</script>

<MiddleCard bg={false}>
    <RadioQuestion {questionText}
                   {options}
                   {nextRoute}
                   {questionID}
                   vertical={true}/>
</MiddleCard>
