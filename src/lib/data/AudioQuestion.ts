import {pgEnum, pgTable, text, varchar} from "drizzle-orm/pg-core";
import {type AudioAnswerData, AudioAnswerTable} from "./AudioAnswerData";
import type {InferModel} from "drizzle-orm";


export const audioQuestionType = pgEnum("audio_question_type", ["scheme", "metaphor"])




export const AudioQuestionTable = pgTable(
    "audio_question",
    {
        id: varchar('id').primaryKey(),
        text: text('text').notNull(),
        answer1ID: varchar('answer_1_id').references(() => AudioAnswerTable.id),
        answer2ID: varchar('answer_2_id').references(() => AudioAnswerTable.id),
        option1: varchar('option_1').notNull(),
        option2: varchar('option_2').notNull(),
        type: audioQuestionType('question_type').notNull().default("scheme")
    }
)

type AudioQuestionModel = InferModel<typeof AudioQuestionTable>
type NewAudioQuestionModel = InferModel<typeof AudioQuestionTable, "insert">

export interface AudioQuestionData extends NewAudioQuestionModel {
    answer1Obj: AudioAnswerData
    answer2Obj: AudioAnswerData
}

type questionOptions = {
    id?: string,
    option1: string,
    option2: string,
    answer1: AudioAnswerData,
    answer2: AudioAnswerData,
    type?: "metaphor" | "scheme"
}

export class AudioQuestion implements AudioQuestionData {
    public answer1ID
    public answer2ID

    constructor(
        public id: string,
        public text: string,
        public answer1Obj: AudioAnswerData,
        public answer2Obj: AudioAnswerData,
        public option1: string,
        public option2: string,
        public type?: "scheme" | "metaphor"
    ) {
        this.answer1ID = answer1Obj.id
        this.answer2ID = answer2Obj.id
    }

    getAnswers() {
        return [this.answer1Obj, this.answer2Obj]
    }

    static fromDB(quesion: AudioQuestionModel, answer1: AudioAnswerData, answer2: AudioAnswerData) {
        return new AudioQuestion(
            quesion.id,
            quesion.text,
            answer1,
            answer2,
            quesion.option1,
            quesion.option2
        )
    }

    static generate(options: questionOptions) {
        const {id, option1, option2, answer1, answer2, type} = options

        const questionText = `Welches Sample klingt <b>${option1.toLowerCase()}</b> und welches <b>${option2.toLowerCase()}</b>`

        const baseURL = "https://pub-13948fdeb125422a88ab9aa10251729c.r2.dev/"

        const genID = id || answer1.audioURL.split("/")[0]

        answer1.audioURL = baseURL + answer1.audioURL
        answer2.audioURL = baseURL + answer2.audioURL


        return new AudioQuestion(
            genID,
            questionText,
            answer1,
            answer2,
            option1,
            option2,
            type
        )
    }

    static generateWithMetaphors(options: questionOptions & { metaphors: { option1: string, option2: string }[]}){
        const audioQuestion = this.generate(options);
        const metaphorQuestions = options.metaphors.map(metaphor => {
            console.log(options)
            console.log("-------------")
            const option: questionOptions = {
                id: audioQuestion.id +"_" + metaphor.option1[0] + metaphor.option2[0],
                option1: metaphor.option1,
                option2: metaphor.option2,
                answer1: {id: options.answer1.id, audioURL: options.answer1.audioURL},
                answer2: {id: options.answer2.id, audioURL: options.answer2.audioURL},
                type: "metaphor"
            }
            return this.generate(option)
        });
        return [audioQuestion, ...metaphorQuestions]
    }

}
