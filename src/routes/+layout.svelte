<script lang='ts'>
    // The ordering of these imports is critical to your app working properly
    // import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
    // import "../theme.pcss"
    import "../theme2.pcss"
    // If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
    import '@skeletonlabs/skeleton/styles/skeleton.css';
    // Most of your app wide CSS should be put in this file
    import '../app.pcss';
    import {AppBar, AppShell} from "@skeletonlabs/skeleton";
    import Footer from "$lib/Footer.svelte";
    import "iconify-icon"
    import {onMount} from "svelte";
    import {audioQuestions, setSessionTotal} from "../store";
    import {Fetcher} from "$lib/fetcher";
    import {page} from "$app/stores";
    import {setExpoContext} from "$lib/expoContext";

    const isTest = $page.url.searchParams.get("test")

    const path = $page.url.pathname
    setExpoContext(path.includes("expo"))


    onMount(async () => {
        console.log("Mount Layout")
        const demographicPromise = Fetcher.demographicQuestions()
        const sessionPromise = Fetcher.sessionID(isTest == 'true');
        const audioPromise = Fetcher.audioQuestions()
        const metaphorPromise = Fetcher.audioMetaphorQuestions()
        await sessionPromise
        await Promise.all([demographicPromise, audioPromise, metaphorPromise])
        setSessionTotal()
        const urls = $audioQuestions.flatMap(quest => [quest.question.answer1Obj.audioURL, quest.question.answer2Obj.audioURL]) as string[];
        const promises = urls.map(url => fetch(url))
        await Promise.all([promises])
    })
</script>

<!--<pre>{JSON.stringify($sessionIDStore)}</pre>-->

<AppShell>
    <svelte:fragment slot="header">
        <AppBar>
            <svelte:fragment slot="lead">
                <p class="p-0 leading-tight">
                    <b>PSY</b><br> ERGO
                </p>
            </svelte:fragment>
            <svelte:fragment slot="trail">
                {#if path.includes("expo")}
                    <p class="text-lg font-bold">EXPO</p>
                {/if}
            </svelte:fragment>
        </AppBar>
    </svelte:fragment>
    <slot/>
    <svelte:fragment slot="footer">
        <Footer/>
    </svelte:fragment>
</AppShell>
