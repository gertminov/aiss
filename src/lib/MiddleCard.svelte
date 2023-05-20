<script lang="ts">
    export let bg = true
    let background = bg ? "card": ""
</script>
<div class="h-full w-full flex  justify-center items-center">
    <div class="{background} max-w-screen-xl flex flex-col gap-4 flex-grow md:mx-8 p-4 ">
        <slot/>
    </div>
</div>
