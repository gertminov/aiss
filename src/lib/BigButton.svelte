<script lang="ts">
    export let type: "reset"| "button" | "submit" = "button"
</script>
<button on:click
        type="{type}"
        class="btn variant-filled font-bold md:w-32 w-full">
    <slot/>
</button>