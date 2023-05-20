<script lang="ts">
    import {StorageKeys} from "$lib/data/storageKeys";
    import {onMount} from "svelte";
    import MiddleCard from "$lib/MiddleCard.svelte";

    onMount(() => {
        const id = Math.floor(Math.random() * 101);
        sessionStorage.setItem(StorageKeys.SESSION_ID, "" + id)
    })
</script>

<MiddleCard>
    <header class="card-header">
        <h1 class="h1">Willkommen bei der Studie</h1>
    </header>
    <section class="p-4">
        <p>
            Hi, wir machen heute sachen
        </p>
    </section>
    <footer class="card-footer flex justify-center">
        <a href="questions" class="btn variant-filled font-bold md:w-32 w-full">Ready?</a>
    </footer>
</MiddleCard>
