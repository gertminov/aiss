import {pgEnum, pgTable, text, varchar} from "drizzle-orm/pg-core";
import type {InferModel} from "drizzle-orm";


export const questionsType = pgEnum("questiontype", ["demographic", "default"])
export const QuestionsTable = pgTable(
    "questions",
    {
        id: varchar('id').primaryKey(),
        text: text("question").notNull(),
        type: questionsType("type").notNull().default("default")
    })

export type Question = InferModel<typeof QuestionsTable>
export type NewQuestion = InferModel<typeof QuestionsTable, 'insert'>
