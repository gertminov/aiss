<script lang="ts">
    import NumberQuestion from "$lib/NumberQuestion.svelte";
    import MiddleCard from "$lib/MiddleCard.svelte";
    import RadioQuestion from "$lib/RadioQuestion.svelte";
    import RadioQuestionFreeEntry from "$lib/RadioQuestionFreeEntry.svelte";
    let options = ["eins", "zwei", "drei"]
</script>

<MiddleCard>
<!--    <NumberQuestion/>-->
<!--    <RadioQuestion {options}/>-->
    <RadioQuestionFreeEntry {options} />
</MiddleCard>