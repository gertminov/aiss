<script lang="ts">
    import NumberQuestion from "$lib/NumberQuestion.svelte";
    import MiddleCard from "$lib/MiddleCard.svelte";
    import RadioQuestion from "$lib/RadioQuestion.svelte";
    import RadioQuestionFreeEntry from "$lib/RadioQuestionFreeEntry.svelte";
    let options = ["männlich", "weiblich", "divers", "keine Angabe"]
</script>

<MiddleCard>
<!--    <NumberQuestion/>-->
    <RadioQuestion questionText="Welchem geschlecht fühlen sie sich zugehörig?" {options} vertical={true}/>
<!--    <RadioQuestionFreeEntry {options} />-->
</MiddleCard>