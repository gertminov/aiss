
<script lang="ts">
    import {Step} from "@skeletonlabs/skeleton";
    import type QuestionAndAnswerData from "./data/QuestionAndAnswerData";
    import QuestionAndAnswer from "$lib/QuestionAndAnswer.svelte";
    export let data: QuestionAndAnswerData
    let locked:boolean


</script>

<Step {locked} >
    <QuestionAndAnswer {data} bind:locked={locked}/>
</Step>