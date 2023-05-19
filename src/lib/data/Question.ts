import {pgTable, serial, text} from "drizzle-orm/pg-core";
import type {InferModel} from "drizzle-orm";

export const QuestionsTable = pgTable(
    "questions",
    {
        id: serial('id').primaryKey(),
        text: text("question").notNull(),
    })

export type Question = InferModel<typeof QuestionsTable>
export type NewQuestion = InferModel<typeof QuestionsTable, 'insert'>