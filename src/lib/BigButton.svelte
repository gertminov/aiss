<script lang="ts">
    export let type: "reset"| "button" | "submit" = "button"
    export let disabled = true
</script>
<button on:click
        type="{type}"
        disabled="{disabled}"
        class="btn variant-filled font-bold md:w-32 w-full">
    <slot/>
</button>