<script lang="ts">
    import MiddleCard from "$lib/MiddleCard.svelte";

    const content = [
        {heading: "Inhalt", content: "Das ist ein Ausschnitt des Fragebogens für meine Studie"},
        {heading: "Ablauf", content: "Sie werden Attribute zu Audiosequenzen zuordnen"},
    ]
    const ready = "Ready?"
</script>

<MiddleCard>
    <header class="card-header">
        <h1 class="h1 text-center font-bold">Willkommen</h1>
    </header>
    <section class="p-4 md:px-12  flex flex-col gap-6 divide-y">
        {#each content as section}
            <div class=" border-surface-200-700-token pt-4 flex flex-col md:flex-row">
                <h2 class="h2 mb-4 font-bold flex-1">{section.heading}</h2>
                <p class="flex-1">{section.content}</p>
            </div>

        {/each}
    </section>
    <footer class="card-footer flex justify-center py-4">
        <a href="questions/tutorial" class="btn variant-filled-primary font-bold md:w-32 w-full">{ready}</a>
    </footer>
</MiddleCard>