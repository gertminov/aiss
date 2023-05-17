import type {AudioAnswerData} from "./AudioAnswerData";

export default interface QuestionAndAnswerData {
    question: string
    answerOptions: DndItem[]
    answers: {one: AudioAnswerData, two: AudioAnswerData}

}