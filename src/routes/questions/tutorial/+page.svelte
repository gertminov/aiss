<script lang="ts">
    import MiddleCard from "$lib/MiddleCard.svelte";
    import {getExpoContext} from "$lib/expoContext";

    const isExpo = getExpoContext();
</script>

<MiddleCard>
    <h1 class="h1">Bedienung der Fragen</h1>
    <div class="grid  md:grid-cols-3 grid-cols-1 md:p-4">
        <div class="pt-2 flex flex-col gap-4 md:pr-4">
            <ol class="list">
                <li class="relative">
                    <span class="top-0 absolute">1.</span>
                    <span>Sie können sich pro Frage zwei Audiosequenzen anhören</span>
                </li>
                <li class="relative">
                    <span class="absolute top-0">2.</span>
                    <span>
                        Ziehen Sie per drag & drop das Attribut, dass am besten passt, auf den Kasten neben der entsprechenden Sequenz
                    </span>
                </li>
            </ol>
            <p class="pt-2">
                Versuchen sie intuitiv ohne viel nachdenken zu entscheiden
            </p>
            {#if !isExpo}
                <p>Der Fragebogen besteht aus <span class="text-primary-500">zwei Teilen</span>, <br> wundern Sie sich
                    also nicht wenn sie die gleichen Töne mehrmals hören.</p>
            {:else}
                <div class="w-full">
                    <div class="w-full flex justify-center">
                        <iconify-icon class="text-2xl" icon="material-symbols:headphones"></iconify-icon>
                    </div>
                    <p>Falls sie Kopfhörer haben können sie diese gerne verwenden</p></div>
            {/if}
            <div class="h-full"></div>
            <div class="flex justify-center px-8">
                <a href="/questions" class="btn variant-filled-primary font-bold md:w-32 w-full">Weiter</a>
            </div>
        </div>
        <div class="col-span-2 order-first md:order-last">
            <video autoplay loop controls muted class="object-fill w-full ">
                <source src="/tutorial.webm" type="video/webm">
            </video>
        </div>
    </div>
</MiddleCard>

