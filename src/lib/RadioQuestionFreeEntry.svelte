<script lang="ts">
    import {RadioGroup, RadioItem} from "@skeletonlabs/skeleton";
    import Question from "$lib/Question.svelte";
    import {onMount} from "svelte";
    export let options: string[]
    let value:number
    $: active = value

    let form:HTMLFormElement
    onMount(()=>{
        window.addEventListener("keydown",(e)=>{
            if (e.key == "Enter") {
                form.requestSubmit();
            }
        })
    })
    let freeText
</script>

<Question {active} bind:form={form}>
    <RadioGroup display="flex-col" rounded="rounded-container-token" >
        {#each options as option}
            <RadioItem bind:group={value} name="justify" value={option}>{option}</RadioItem>
        {/each}
        <RadioItem bind:group={value} name="justify" value={freeText}>
            <input type="text"  bind:value={freeText} class="text-white w-full border-0 bg-surface-700" placeholder="Andere Option">
        </RadioItem>
    </RadioGroup>
</Question>
