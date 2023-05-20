<script lang="ts">
    import MiddleCard from "$lib/MiddleCard.svelte";
    import {SlideToggle} from "@skeletonlabs/skeleton";
    import BigButton from "$lib/BigButton.svelte";
    import {goto} from "$app/navigation";

    let agreed = false
    $: disabled = !agreed

</script>

<MiddleCard>
    <h1 class="h1">Datenschutz</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi ducimus facere illo, magnam minus molestiae,
        mollitia, nam neque nesciunt nihil officia possimus praesentium quasi quis reprehenderit sequi sint tempora.</p>
    <div class="flex flex-col gap-4 items-center pt-4">
        <SlideToggle bind:checked={agreed} required>
            <p class:text-primary-500={agreed} class:text-warning-500={!agreed}>
                Ich stimme den Datenschutzbedingungen zu
            </p>
        </SlideToggle>
    </div>
    <div class="flex justify-end">
        <BigButton bind:disabled={disabled} on:click={()=>{goto("/demographic/age")}}>
            Weiter
        </BigButton>
    </div>

</MiddleCard>