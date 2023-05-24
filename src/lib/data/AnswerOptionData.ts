import {pgTable, text, varchar} from "drizzle-orm/pg-core";
import type {InferModel} from "drizzle-orm";
import {createInsertSchema, createSelectSchema} from "drizzle-zod";

export const AnswerOptionTable = pgTable(
    "answerOptions",
    {
        id: varchar('id').primaryKey(),
        text: text('text').notNull()
    }
)

export type AnswerOptionData = InferModel<typeof AnswerOptionTable>

export const selectAnswerOptionSchema = createSelectSchema(AnswerOptionTable)
export const insertAnswerOptionSchema = createInsertSchema(AnswerOptionTable)

export type DndItem = {
    isDndShadowItem?: boolean
} & AnswerOptionData

