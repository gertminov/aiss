import type {AudioAnswerData} from "$lib/data/AudioAnswerData";

export default interface AudioChoice {
    audioAnswer: AudioAnswerData,
    option: AnswerOptionData
}