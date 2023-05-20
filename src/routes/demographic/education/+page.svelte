<script lang="ts">
    import MiddleCard from "$lib/MiddleCard.svelte";
    import RadioQuestion from "$lib/RadioQuestion.svelte";

    let options = ["Hauptschule", "Abitur", "Bachelor Studium", "Master Studium"]
    let questionText = "Was ist ihr höchster Bildungsabschluss"
    let nextRoute = "/questions"
</script>

<MiddleCard bg={false}>
    <RadioQuestion {questionText} {options} {nextRoute} vertical={true}/>
</MiddleCard>
