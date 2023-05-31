<script lang="ts">
    import {Stepper} from "@skeletonlabs/skeleton";
    import {surveyProgress} from "../store.js";
    import {goto} from "$app/navigation";

    export let nextRoute = "/finish"

    function onStepHandler(e: { detail: { step: number, state: { current: number, total: number } } }): void {
        if ($surveyProgress.localLast > e.detail.state.current) {
            $surveyProgress.current = $surveyProgress.current - 1;
        } else {
            $surveyProgress.current = $surveyProgress.current +1
        }
        $surveyProgress.localLast = e.detail.state.current
    }

    function onCompleteHandler(e: Event) {
        $surveyProgress.current ++
        goto(nextRoute)
    }
</script>

<div class="h-full w-full grid content-center">
    <div class="flex justify-center">
        <div class="card p-4 md:w-8/12">
            <Stepper on:step={onStepHandler}
                     on:complete={onCompleteHandler}
                     gap="gap-1 md:gap-2 lg:gap-4"
                     badge="hidden md:inline variant-filled-surface"
                     stepTerm="Frage"
            >
                <slot/>
            </Stepper>
        </div>
    </div>
</div>
