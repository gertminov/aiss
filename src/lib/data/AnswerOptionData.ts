import {pgTable, serial, text} from "drizzle-orm/pg-core";
import type {InferModel} from "drizzle-orm";

export const AnswerOptionTable = pgTable(
    "answerOptions",
    {
        id: serial('id').primaryKey(),
        text: text('text').notNull()
    }
)

export type AnswerOptionData = InferModel<typeof AnswerOptionTable>

export type DndItem = {
    isDndShadowItem?: boolean
} & AnswerOptionData

