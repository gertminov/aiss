<script lang="ts">
    import type {PageData} from './$types'

    export let data: PageData
</script>

<div class="h-full grid place-content-center">
    {#if data.error}
        <h1 class="h1">{data.error}</h1>
    {:else}
        <h1>{JSON.stringify(data)}</h1>
    {/if}
</div>