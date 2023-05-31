<script lang="ts">
    import MiddleCard from "$lib/MiddleCard.svelte";
    import NumberQuestion from "$lib/NumberQuestion.svelte";
    import {surveyProgress} from "../../../store";
    import {onMount} from "svelte";

    let nextRoute = "/demographic/gender"
    let questionID = "age"
    onMount(()=>{$surveyProgress.current ++})

</script>

<MiddleCard bg={false}>
    <NumberQuestion text="Wie alt sind Sie?" {nextRoute} {questionID}/>
</MiddleCard>