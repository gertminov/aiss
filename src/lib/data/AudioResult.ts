import type AudioChoice from "./AudioChoice";
import {integer, pgTable, serial, varchar} from "drizzle-orm/pg-core";
import type {InferModel} from "drizzle-orm";
import {AudioAnswerTable} from "./AudioAnswerData";
import {SessionTable} from "./Session";
import type {AudioQuestionData} from "./AudioQuestion";
import {AudioQuestionTable} from "./AudioQuestion";
import {createInsertSchema} from "drizzle-zod";

export const AudioResultTable = pgTable(
    "audioresult",
    {
        id: serial('id').primaryKey(),
        time: integer('time'),
        questionID: varchar('question_id').references(() => AudioQuestionTable.id).notNull(),
        choice1Answer: varchar('choice1_answer').references(() => AudioAnswerTable.id).notNull(),
        choice1Option: varchar('choice1_option').notNull(),
        choice2Answer: varchar('choice2_answer').references(() => AudioAnswerTable.id).notNull(),
        choice2Option: varchar('choice2_option').notNull(),
        sessionID: integer("session_id").references(() => SessionTable.id).notNull()
    }
)

type AudioResultModel = InferModel<typeof AudioResultTable>
export type NewAudioResultModel = InferModel<typeof AudioResultTable, 'insert'>

export const insertAudioResultSchema = createInsertSchema(AudioResultTable)

export interface AudioResultData {
    time: number
    choiceOne: AudioChoice
    choiceTwo: AudioChoice
    sessionID: number
    question: AudioQuestionData
}
export default class AudioResult implements AudioResultData {



    constructor(
        public time: number,
        public question: AudioQuestionData,
        public choiceOne: AudioChoice,
        public choiceTwo: AudioChoice,
        public sessionID: number
    ) {
    }

    static fromData(data: AudioResultData) {
        return new AudioResult(
            data.time,
            data.question,
            data.choiceOne,
            data.choiceTwo,
            data.sessionID
        )
    }

    toDrizzle(): NewAudioResultModel {
        return {
            time: this.time,
            questionID: this.question.id,
            choice1Answer: this.choiceOne.audioAnswer.id,
            choice1Option: this.choiceOne.option.text,
            choice2Answer: this.choiceTwo.audioAnswer.id,
            choice2Option: this.choiceTwo.option.text,
            sessionID: this.sessionID
        }
    }
}