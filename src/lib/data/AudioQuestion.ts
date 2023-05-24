import {pgTable, text, varchar} from "drizzle-orm/pg-core";
import {type AudioAnswerData, AudioAnswerTable} from "./AudioAnswerData";
import type {InferModel} from "drizzle-orm";

export const AudioQuestionTable = pgTable(
    "audio_question",
    {
        id: varchar('id').primaryKey(),
        text: text('text').notNull(),
        answer1ID: varchar('answer_1_id').references(() => AudioAnswerTable.id),
        answer2ID: varchar('answer_2_id').references(() => AudioAnswerTable.id),
        option1: varchar('option_1').notNull(),
        option2: varchar('option_2').notNull(),
    }
)

export type AudioQuestionModel = InferModel<typeof AudioQuestionTable>
export type NewAudioQuestionModel = InferModel<typeof AudioQuestionTable, "insert">

export interface AudioQuestionData extends AudioQuestionModel {
    answer1Obj: AudioAnswerData
    answer2Obj: AudioAnswerData
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
        public option2: string
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

}
