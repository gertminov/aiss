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
    <h3 class="h3">Welche Daten werden erhoben?</h3>
    <ul class="list">
        <li>Alter</li>
        <li>Geschlecht</li>
        <li>Bildungsabschluss</li>
        <li>Beruf</li>
        <li>Meinung zu gezeigten Audio samples</li>
    </ul>
    <p>
        Die Erhebung und Verarbeitung Ihrer oben beschriebenen persönlichen Daten erfolgt anonym. <br>
        Damit ist es niemandem möglich, die erhobenen Daten mit Ihnen in Verbindung zu bringen.<br>
        Eine Löschung der Daten ist daher nur vor beenden der Studie möglich. <br>
        Die anonymisierten Daten werden mindestens 10 Jahre gespeichert.
    </p>
    <a href="datapolicy/long/" class="anchor">Ausführliche Version</a>
    <div class="flex flex-col gap-4 items-center pt-4">
        <SlideToggle bind:checked={agreed} required active="bg-primary-500">
            <p class:text-primary-500={agreed} class:text-warning-700-200-token={!agreed}>
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