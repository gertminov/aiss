import type {AudioAnswerData} from "$lib/data/AudioAnswerData";
import type {AnswerOptionData} from "$lib/data/AnswerOptionData";

export default interface AudioChoice {
    audioAnswer: AudioAnswerData,
    option: AnswerOptionData
}