<script>
    import MiddleCard from "$lib/MiddleCard.svelte";
    import {setContext} from "svelte";
    import {page} from "$app/stores";

    const toMartin = $page.url.searchParams.get("martin")
    if (toMartin === "metaphor") {
        setContext("isMartin", "metaphor");
    } else if (toMartin === "image") {
        setContext("isMarting", "image")
    } else {
        setContext("isMartin", undefined)
    }
</script>

<MiddleCard>
    <div class="flex flex-col items-center gap-4"><h1 class="h1">Willkommen zum Hörtest</h1>
        <div class="">
            <h3 class="h2 pb-2">Anleitung</h3>
            <ol class="list-decimal">
                <li>Drücken Sie die <span class="font-bold text-primary-500">Leertaste</span> zum Starten</li>
                <li>Drücken Sie die <span class="font-bold text-primary-500">Leertaste</span> erneut sobalt Sie einen
                    Ton hören
                </li>
            </ol>
        </div>

        <div class="flex flex-col items-center gap-4">
            <slot/>
        </div>
    </div>
</MiddleCard>
