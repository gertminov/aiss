import {pgTable, text, varchar} from "drizzle-orm/pg-core";
import type {InferModel} from "drizzle-orm";
import {createInsertSchema, createSelectSchema} from "drizzle-zod";

export const AudioAnswerTable = pgTable(
    "audioAnswers",
    {
        id: varchar('id').primaryKey(),
        audioURL: text('audioURL').notNull()
    }
)

export type AudioAnswerData = InferModel<typeof AudioAnswerTable>
export const insertAudioAnswerSchema = createInsertSchema(AudioAnswerTable)
export const selectAudioAnswerSchema = createSelectSchema(AudioAnswerTable)
