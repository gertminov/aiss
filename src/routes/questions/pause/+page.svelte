<script lang="ts">
    import MiddleCard from "$lib/MiddleCard.svelte";
    import {onDestroy, onMount} from "svelte";
    import {ProgressRadial} from "@skeletonlabs/skeleton";
    import {tweened} from "svelte/motion";
    import {linear as easing} from "svelte/easing";
    import {goto} from "$app/navigation";
    import {draw} from "svelte/transition";

    let active = false

    const duration = 20
    let now = Date.now()
    let end = now + (duration * 1000)

    $: count = Math.round((end - now) / 1000)
    $: m = Math.floor(count / 60)
    $: s = count - m * 60
    $:{
        console.log(count)
    }

    let progress = tweened(0, {duration: 1000, easing})
    $: progress.set((1 - (count / duration)) * 100)

    function updateTimer() {
        now = Date.now()
    }

    let interval: number
    $: if (count <= 0) {
        active = true
        clearInterval(interval)
    }


    function handleStart() {
        now = Date.now()
        end = now + (duration * 1000)
        interval = setInterval(updateTimer, 1000)
    }

    onMount(() => {
        handleStart()
    })

    onDestroy(() => {
        clearInterval(interval)
    })

</script>

<MiddleCard>
    <div class="flex flex-col  items-center gap-8 ">
        <h3 class="h3 text-center">Machen Sie eine kurze Pause. Sie dürfen gerne ihr Handy benutzen. <br> Wir bitten Sie
            sitzen zu bleiben.</h3>
        <div class="relative h-24">
            <div class="absolute grid place-items-center w-24">
                <ProgressRadial value={$progress} width="w-24">

                    <!--{m}:{s}-->
                </ProgressRadial>
            </div>
            <div class="h-24 w-24 grid place-items-center">
                {#if active}
                    <iconify-icon icon="line-md:confirm" width="2.5em"></iconify-icon>
                {/if}
            </div>
        </div>
        <button on:click={()=> goto("/questions/metaphors")} disabled={!active}
                class="btn variant-filled-primary font-bold md:w-32 w-full">Weiter
        </button>
    </div>
</MiddleCard>
