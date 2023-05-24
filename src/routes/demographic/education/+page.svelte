<script lang="ts">
    import MiddleCard from "$lib/MiddleCard.svelte";
    import RadioQuestion from "$lib/RadioQuestion.svelte";

    let options = ["Hauptschule", "Abitur", "Bachelor Studium", "Master Studium"]
    let questionText = "Was ist ihr höchster Bildungsabschluss"
    let nextRoute = "/questions"
    const questionID = "education"
</script>

<MiddleCard bg={false}>
    <RadioQuestion {nextRoute}
                   {options}
                   {questionText}
                   {questionID}
                   vertical={true}/>
</MiddleCard>
