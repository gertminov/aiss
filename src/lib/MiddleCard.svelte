<script lang="ts">
    export let bg = true
    let background = bg ? "card": ""
</script>
<div class="h-full w-full flex  justify-center items-center ">
    <div class="{background} max-w-screen-xl flex flex-col gap-4 flex-grow mx-2 md:mx-8 p-4 px-8 ">
        <slot/>
    </div>
</div>
