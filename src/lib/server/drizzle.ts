import {sql} from "@vercel/postgres";
import {drizzle} from "drizzle-orm/vercel-postgres"
import {type NewQuestion, QuestionsTable} from "$lib/data/Question";


export  async function insertQuestion(question: string) {
    const newQuest: NewQuestion = {
        question
    }
    const insertedQuestion = await db.insert(QuestionsTable).values(newQuest).returning()
    console.log(insertedQuestion);
}

export const db = drizzle(sql)
