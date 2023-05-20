<script lang="ts">
    import MiddleCard from "$lib/MiddleCard.svelte";
    import RadioQuestion from "$lib/RadioQuestion.svelte";

    let options = ["männlich", "weiblich", "divers", "keine Angabe"]
    let questionText = "Welchem Geschlecht fühlen sie sich zugehörig?"
    let nextRoute = "/demographic/education"
</script>

<MiddleCard bg={false}>
    <RadioQuestion {questionText} {options} {nextRoute} vertical={true}/>
</MiddleCard>
