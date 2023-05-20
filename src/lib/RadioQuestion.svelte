<script lang="ts">
    import {RadioGroup, RadioItem} from "@skeletonlabs/skeleton";
    import Question from "$lib/Question.svelte";
    import {onMount} from "svelte";
    export let options: string[]
    let value:number
    $: active = value

    let form:HTMLFormElement
    onMount(()=>{
        window.addEventListener("keydown",()=>{
            form.requestSubmit()
        })
    })
</script>

<Question {active} bind:form={form}>
    <RadioGroup>
        {#each options as option}
            <RadioItem bind:group={value} name="justify" value={option}>{option}</RadioItem>
        {/each}
    </RadioGroup>
</Question>
