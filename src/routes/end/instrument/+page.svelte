<script lang="ts">
    import MiddleCard from "$lib/MiddleCard.svelte";
    import {Autocomplete, type AutocompleteOption, InputChip} from "@skeletonlabs/skeleton";
    import {onDestroy} from "svelte";
    import {sessionID} from "../../../store";
    import {browser} from "$app/environment";

    let inputChip = ""
    let inputChipList: string[] = []
    const instrumentOptions: AutocompleteOption[] = [
        {label: "Klavier", value: "klavier", keywords: "piano, klavier, keyboard"},
        {label: "Gitarre", value: "gitarre", keywords: "e-gitarre, guitar"},
        {label: "Geige", value: "Geige", keywords: "violine, strings"},
        {label: "Schlagzeug", value: "schlagzeug", keywords: "drums"},
        {label: "Saxophon", value: "saxophon", keywords: "saxophone"},
        {label: "Trompete", value: "trompete", keywords: "trumped, brass"},
        {label: "Bass", value: "bass", keywords: "e-bass"},
        {label: "Flöte", value: "floete", keywords: "flute, querflöte"},
        {label: "Klarinette", value: "klarinette", keywords: "clarinette"}
    ]

    function onInstrumentSelect(event: any) {
        if (inputChipList.includes(event.detail.value) === false) {
            inputChipList = [...inputChipList, event.detail.value];
            inputChip = '';
        }
    }

    onDestroy( async ()=>{
        if (browser) {
            await fetch("/api/results/instrument",{
                method: "POST",
                body: JSON.stringify({
                    sessionID: $sessionID,
                    instruments: inputChipList
                })
            });
        }
    })
</script>

<MiddleCard>
    <h3 class="h3">Welche Instrumente spielen sie?</h3>
    <p class="text-surface-500-400-token">Auch Instrumente die nicht in der Liste sind können eingetragen werden</p>
    <InputChip bind:input={inputChip} bind:value={inputChipList} name="chips" chips="variant-filled-primary" placeholder="Instrument eingeben ..."/>
    <div class="card w-full  max-h-48 overflow-y-auto">
        <Autocomplete
            bind:input={inputChip}
            options={instrumentOptions}
            denylist={inputChipList}
            on:selection={onInstrumentSelect}
        />
    </div>
    <div class="flex justify-center">
        <a href="/finish"  class="btn variant-filled-primary font-bold md:w-32 w-full">Weiter</a>
    </div>
</MiddleCard>
