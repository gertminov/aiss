<script lang="ts">
    import AudioAnswer from "./AudioAnswer.svelte";
    import type {DndEvent} from "svelte-dnd-action";
    import {dndzone} from "svelte-dnd-action";
    import type QuestionAndAnswerData from "./data/QuestionAndAnswerData";
    import type AnswerPair from "./data/AnswerPair";
    import {onDestroy, onMount} from "svelte";
    import AnswerOption from "$lib/AnswerOption.svelte";
    import {type AudioResultData} from "$lib/data/AudioResult";
    import type {AnswerOptionData, DndItem} from "$lib/data/AnswerOptionData";
    import {audioResultsStore, sessionID} from "../store";


    // export let locked = true
    export let setLocked = (state: boolean) => {
        ""
    }

    export let data: QuestionAndAnswerData
    let items: DndItem[] = data.options || [{id: "error", text: "error"}]
    let answers: AnswerPair = data.answers
    let answerOneItems: AnswerOptionData[]
    let answerOneOverflow: AnswerOptionData[] = []

    let answerTwoItems: AnswerOptionData[]
    let answerTwoOverflow: AnswerOptionData[] = []

    $: { // if two answer options get dragged intro one slot, the old one will be switched to the other slot
        if (answerOneOverflow.length > 0) {
            answerTwoItems = answerOneOverflow
            answerOneOverflow = []
        } else if (answerTwoOverflow.length > 0) {
            answerOneItems = answerTwoOverflow
            answerTwoOverflow = []
        }
    }

    // Time Tracking pro Frage
    let startTime: Date
    onMount(() => {
        startTime = new Date()
        // get stored Data from local storage
        const localRes = $audioResultsStore["" + data.question.id]
        // const localRes = JSON.parse(sessionStorage.getItem(StorageKeys.QUESTION + data.question.id)) as AudioResultData
        if (localRes) {
            // if an option is already set, put it int the D&D container
            if (localRes.choiceOne.option) answerOneItems = [localRes.choiceOne.option]
            if (localRes.choiceTwo.option) answerTwoItems = [localRes.choiceTwo.option]
            // filter the already set options out of the not set containter
            items = items.filter(item => item.id != localRes.choiceOne.option?.id && item.id != localRes.choiceTwo.option?.id)
            // if all items are placed, unlock the next button
            if (items.length == 0) {
                setLocked(false)
            }
        }

    })

    onDestroy(() => {
        if (!startTime) return // I think it's a dev problem, but when the component is destroyed before its mounted the calculation does not work
        let endTime = new Date()
        const time = (endTime.getTime() - startTime.getTime())


        const res: AudioResultData = {
            time,
            question: data.question,
            choiceOne: {
                audioAnswer: answers.one,
                option: answerOneItems[0]
            },
            choiceTwo: {
                audioAnswer: answers.two,
                option: answerTwoItems[0]
            },
            sessionID: $sessionID
        }

        $audioResultsStore["" + res.question.id] = res
    })


    function handleConsider(e) {
        items = e.detail.items
    }

    function handleFinalize(e: CustomEvent<DndEvent>) {
        const eventItems = e.detail.items as DndItem[]

        if (items.length == 1 && items[0].isDndShadowItem) { // put item back to answeroptions
            items = eventItems
            return
        }

        items = eventItems
        if (answerOneItems.length > 0) { // answerOne got moved, answerTwo will be moved automatically
            answerTwoItems = items
            items = []
        } else if (answerTwoItems.length > 0) { // answerTwo got moved answerOne will be moved automatically
            answerOneItems = items
            items = []
        }
        setLocked(false)
    }

    // const dropTargetStyle = {"border-color": "green"}

    const dropTargetStyle = {}
</script>


<div class="mx-2">
    <p>{@html data.question.text}</p>
    <section use:dndzone={{items, dropTargetStyle}}
             on:consider={handleConsider}
             on:finalize={handleFinalize}
             class="flex justify-around  md:h-10  my-4 "
    >
        {#each items as item(item.id)}
            <AnswerOption text={item.text}/>
        {/each}
    </section>
    <div class="border-b border-white/10 my-2"></div>
    <AudioAnswer data={answers.one} bind:items={answerOneItems} bind:overflow={answerOneOverflow}/>
    <AudioAnswer data={answers.two} bind:items={answerTwoItems} bind:overflow={answerTwoOverflow}/>
</div>