<script lang="ts">
    import {RadioGroup, RadioItem} from "@skeletonlabs/skeleton";
    import Question from "$lib/Question.svelte";

    export let options: string[]
    export let questionText

    export let nextRoute
    export let questionID:string
    export let vertical = false
    let orientation = vertical ? "flex-col" : "inline-flex"
    let rounded = vertical ? "rounded-container-token" : "rounded-token"
    let value: number
    $: active = value

    // go to next page when a value is selected
    let form: HTMLFormElement
    $: {
        if (active) {
            form.requestSubmit()
        }
    }


</script>

<Question
        {active}
        bind:form={form}
        text={questionText}
        next={nextRoute}
        listenForEnter={true}
        {questionID}
>
    <RadioGroup display={orientation} rounded={rounded} class="w-1/3" spacing="space-y-4">
        {#each options as option}
            <RadioItem bind:group={value} name="answer" value={option}>{option}</RadioItem>
        {/each}
    </RadioGroup>
</Question>
