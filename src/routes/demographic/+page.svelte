<script lang="ts">
    import CenterStepper from "$lib/CenterStepper.svelte";
    import LockedStep from "$lib/LockedStep.svelte";
    import NumberQuestion from "$lib/NumberQuestion.svelte";

</script>

<CenterStepper>
    <LockedStep let:setLocked>
        <NumberQuestion {setLocked}/>
    </LockedStep>
    <LockedStep let:setLocked>
        <NumberQuestion {setLocked}/>
    </LockedStep>
</CenterStepper>