import {pgTable, serial, text} from "drizzle-orm/pg-core";
import type {InferModel} from "drizzle-orm";

export const AudioAnswerTable = pgTable(
    "audioAnswers",
    {
        id: serial('id').primaryKey(),
        audioURL: text('audioURL').notNull()
    }
)

export type AudioAnswerData = InferModel<typeof AudioAnswerTable>