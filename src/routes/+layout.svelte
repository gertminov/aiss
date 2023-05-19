<script lang='ts'>
    // The ordering of these imports is critical to your app working properly
    import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
    // If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
    import '@skeletonlabs/skeleton/styles/skeleton.css';
    // Most of your app wide CSS should be put in this file
    import '../app.pcss';
    import {AppBar, AppShell} from "@skeletonlabs/skeleton";
    import Footer from "$lib/Footer.svelte";
    import "iconify-icon"
</script>


<AppShell>
    <svelte:fragment slot="header">
        <AppBar>ImageSchemata</AppBar>
    </svelte:fragment>
    <slot />
    <svelte:fragment slot="footer">
        <Footer/>
    </svelte:fragment>
</AppShell>
