<script lang="ts">
    import {Stepper} from "@skeletonlabs/skeleton";
    import {surveyProgress} from "../../store";
    import {goto} from "$app/navigation";
    import {questions} from "$lib/data/Questions";
    import LockedStep from "$lib/LockedStep.svelte";

    const data = questions

    function onStepHandler(e: { detail: { step: number, state: { current: number, total: number } } }): void {
        console.log("event:step", e.detail.state.current)
        $surveyProgress = e.detail.state
    }

    function onCompleteHandler(e: Event) {
        $surveyProgress = {total: 1, current: 1}
        goto("/finish")
    }

</script>


<div class="h-full w-full grid content-center ">
    <div class="flex justify-center">
        <div class="card p-4 w-8/12">
            <!--            <Stepper on:step={onStepHandler} on:complete={onCompleteHandler} badge="hidden" active="hidden">-->
            <Stepper on:step={onStepHandler} on:complete={onCompleteHandler} >
                {#each data as entry }
                    <LockedStep data={entry}/>
                {/each}
            </Stepper>
        </div>
    </div>

</div>