<script lang="ts">
    import MiddleCard from "$lib/MiddleCard.svelte";
    import RadioQuestion from "$lib/RadioQuestion.svelte";

    let options = ["Student", "Schüler", "Berufstätig", "Rentner"]
    let questionText = "Was beschreibt ihre momentane Tätigkeit"
    let nextRoute = "/demographic/age"
</script>

<MiddleCard bg={false}>
    <RadioQuestion {questionText} {options} {nextRoute} vertical={true}/>
</MiddleCard>
