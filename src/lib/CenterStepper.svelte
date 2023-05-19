<script lang="ts">
    import {Stepper} from "@skeletonlabs/skeleton";
    import {surveyProgress} from "../store.js";
    import {goto} from "$app/navigation";

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
            <Stepper on:step={onStepHandler} on:complete={onCompleteHandler} >
                <slot />
            </Stepper>
        </div>
    </div>
</div>
