import type AnswerPair from "$lib/data/AnswerPair";
import type Question from "$lib/data/Question";

export default interface QuestionAndAnswerData {
    question: Question
    answerOptions: AnswerOptionData[]
    answers: AnswerPair

}