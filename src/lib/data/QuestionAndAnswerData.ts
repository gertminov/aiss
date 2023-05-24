import type AnswerPair from "$lib/data/AnswerPair";
import type {AnswerOptionData} from "$lib/data/AnswerOptionData";
import type {AudioQuestionData} from "$lib/data/AudioQuestion";


export default interface QuestionAndAnswerData {
    question: AudioQuestionData
    options: AnswerOptionData[]
    answers: AnswerPair
}

export class QuestionAndAnswerClass implements QuestionAndAnswerData {
    answers: AnswerPair;
    options: AnswerOptionData[];
    question: AudioQuestionData;

    constructor(data: AudioQuestionData) {
        this.question = data
        this.options = [{id: "1", text: data.option1}, {id: "2", text: data.option2}]
        this.answers = {
            one: data.answer1Obj,
            two: data.answer2Obj
        }
    }
}