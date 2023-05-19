import type Result from "$lib/data/Result";
import type AudioChoice from "$lib/data/AudioChoice";
import type Question from "$lib/data/Question";

export default class AudioResult implements Result {
    choiceOne: AudioChoice
    choiceTwo: AudioChoice
    question: Question;
    time: number;

    constructor(time: number, question: Question, choiceOne: AudioChoice, choiceTwo: AudioChoice) {
        this.choiceOne = choiceOne;
        this.choiceTwo = choiceTwo;
        this.question = question;
        this.time = time;
    }

    toPrisma(): Record<string, any> {
        return {message: "not implemented"};
    }
}