<script lang="ts">
    import AudioAnswer from "./AudioAnswer.svelte";
    import {dndzone} from "svelte-dnd-action";
    import type QuestionAndAnswerData from "./data/QuestionAndAnswerData";
    import type {AudioAnswerData} from "./data/AudioAnswerData"
    import type AnswerPair from "./data/AnswerPair";
    import AnswerOption from "./AnswerOption.svelte";


    export let locked = true
    export let data: QuestionAndAnswerData
    let items = data.answerOptions || [{id: 0, text: "error"}]
    let answers: AnswerPair = data.answers
    let answerOneItems: DndItem[]
    let answerOneOverflow: DndItem[] = []

    let answerTwoItems: DndItem[]
    let answerTwoOverflow: DndItem[] = []

    $: {
        if (answerOneOverflow.length > 0) {
            answerTwoItems = answerOneOverflow
            answerOneOverflow = []
        } else if (answerTwoOverflow.length > 0) {
            answerOneItems = answerTwoOverflow
            answerTwoOverflow = []
        }
    }


    function handleConsider(e) {
        items = e.detail.items
    }

    function handleFinalize(e) {
        items = e.detail.items
        if (answerOneItems.length > 0) {
            answerTwoItems = items
            items = []
        }else if (answerTwoItems.length > 0) {
            answerOneItems = items
            items = []
        }
        locked = false
    }

    const dropTargetStyle = {"border-color": "green"}
</script>


<div class="mx-2">
    <p>{data.question}</p>
    <section use:dndzone={{items, dropTargetStyle}}
             on:consider={handleConsider}
             on:finalize={handleFinalize}
             class="flex justify-around h-10 my-4"
    >
        {#each items as item(item.id)}
            <AnswerOption text={item.text}/>
        {/each}
    </section>
    <div class="border-b border-white/10 my-2"></div>
    <AudioAnswer data={answers.one} bind:items={answerOneItems} bind:overflow={answerOneOverflow}/>
    <AudioAnswer data={answers.two} bind:items={answerTwoItems} bind:overflow={answerTwoOverflow}/>
</div>