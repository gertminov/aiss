<script lang="ts">
    import {StorageKeys} from "$lib/data/storageKeys";
    import type Session from "$lib/data/Session";
    import {browser} from "$app/environment";
    import type AudioResult from "$lib/data/AudioResult";
    import {onMount} from "svelte";

    onMount(async ()=>{

    })
    if (browser) {
        const id = parseInt(sessionStorage.getItem(StorageKeys.SESSION_ID));

        const audioResults = []
        for (let i = 0; i < sessionStorage.length; i++) {
            let key = sessionStorage.key(i);
            //filter out all session storage entries, that are not questions
            if (!key.startsWith("quest")) continue

            let value = JSON.parse(sessionStorage.getItem(key)) as AudioResult
            audioResults.push(value)
        }

        const session: Session = {
            id,
            results : audioResults
        }
        async function sendData() {
            const res = await fetch("/api/results",{
                method: "POST",
                body: JSON.stringify(session)
            })
            if (res.ok) {
                console.log("alles gut")
                sessionStorage.clear()
            }
        }
        sendData()

    }

</script>
<div class="h-full w-full  grid place-content-center">
    <div class="card">
        <div class="card-header"><h1>Danke fürs mitmachen</h1></div>
        <section class="p-4" >Du kannst das fenster jetzt schließen</section>
    </div>
</div>