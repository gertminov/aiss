<script lang="ts">
    import {ProgressRadial} from "@skeletonlabs/skeleton";

    export let type: "reset"| "button" | "submit" = "button"
    export let disabled = false
    export let loading = false
</script>
<button on:click
        type="{type}"
        disabled="{disabled}"
        class="btn variant-filled-primary font-bold md:w-32 w-full">
    {#if loading}
        <ProgressRadial width="w-6" value={undefined} />
    {:else}
        <slot/>
    {/if}
</button>