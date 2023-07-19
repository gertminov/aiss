<script lang="ts">
    import MiddleCard from "$lib/MiddleCard.svelte";
    //@ts-ignore
    import {Confetti} from "svelte-confetti"
</script>

<MiddleCard>
    <div class="flex flex-col items-center gap-4">
        <div class="h-0 flex justify-center">
            <Confetti x={[-1.3, 1.3]} y={[0.25, 1]}/>
        </div>
        <h1 class="h2 font-bold text-center">Vielen Dank fürs Mitmachen</h1>
        <p>Viel Spaß auf der Expo 😊</p></div>
</MiddleCard>