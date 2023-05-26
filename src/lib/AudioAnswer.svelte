<script context="module" lang="ts">
    let current: HTMLAudioElement

</script>
<script lang="ts">
    import {ProgressRadial} from "@skeletonlabs/skeleton";
    import {onDestroy} from "svelte";
    import {dndzone} from "svelte-dnd-action";
    import type {AudioAnswerData} from "./data/AudioAnswerData";
    import AnswerOption from "./AnswerOption.svelte";
    import {browser} from "$app/environment";

    export let data: AudioAnswerData
    export let items: AnswerOption[] = []
    export let overflow: AnswerOption[] = []

    let progress = 0

    let isPlaying = false

    let audioElement: HTMLAudioElement
    // Server does not know the audio element, so this has to be done client side
    if (browser) {
        audioElement = new Audio(data.audioURL as string)
        audioElement.addEventListener("timeupdate", ()=>{
            updateProgress()
        })
        audioElement.onpause = ()=> {isPlaying = false}

        onDestroy(() => {
            audioElement.pause()
        });
    }
    function stopOthers() {
        if(current && current != audioElement) current.pause()
        current = audioElement

    }


    function playPause() {
        if (audioElement.paused) {
            stopOthers()
            audioElement.play();
            isPlaying = true
        } else {
            console.log("pause")
            audioElement.pause();
            isPlaying = false;
        }
    }

    function updateProgress() {
        progress = (audioElement.currentTime / audioElement.duration)*100
        if (audioElement.ended) {
            isPlaying = false
        }
    }

    function handleConsider(e) {
        items = e.detail.items
    }

    function handleFinalize(e) {
        items = e.detail.items
        if (items.length > 1) {
            let lastItem = items.pop();
            overflow = [lastItem]
        }

    }
    const dropTargetStyle = {"border-color": "green"}
</script>

<div class="flex items-center my-4 gap-4">
    <div class="relative">
        <div class="h-full w-full absolute grid place-content-center z-10">
            <button on:click={playPause} class="grid place-content-center">
                {#if isPlaying}
                    <iconify-icon height="2em" icon="material-symbols:pause-rounded"></iconify-icon>
                {:else}
                    <iconify-icon height="2em" icon="material-symbols:play-arrow-rounded"></iconify-icon>
                {/if}
            </button>
        </div>
        <div class="">
            <ProgressRadial value="{progress}" width="w-12" stroke={120}/>
        </div>
    </div>
<!--    <p class="mx-6">{data.answerText}</p>-->
    <div class=" border-2 border-secondary-500 w-60 h-10 rounded"
         use:dndzone={{items, dropTargetStyle}}
         on:consider={handleConsider}
         on:finalize={handleFinalize}
    >
        {#each items as item(item.id)}
            <AnswerOption text={item.text}/>
        {/each}
    </div>
</div>