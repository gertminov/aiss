<script lang="ts">
    import MiddleCard from "$lib/MiddleCard.svelte";
    import RadioQuestion from "$lib/RadioQuestion.svelte";

    let options = ["Student", "Schüler", "Berufstätig", "Rentner"]
    let questionText = "Was beschreibt ihre momentane Tätigkeit"
    let nextRoute = "/questions"
    const questionID = "work"
</script>

<MiddleCard bg={false}>
    <RadioQuestion {questionText}
                   {options}
                   {nextRoute}
                   {questionID}
                   vertical={true}/>
</MiddleCard>
