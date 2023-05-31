<script lang="ts">

import MiddleCard from "$lib/MiddleCard.svelte";
</script>

<MiddleCard>
    <h3 class="h3 text-center">Spielen sie ein Instrument?</h3>
    <div class="flex justify-center gap-8">
        <a href="/end/instrument" class="btn variant-filled-surface">Ja</a>
        <a href="/finish" class="btn variant-filled-surface">Nein</a>
    </div>
</MiddleCard>
