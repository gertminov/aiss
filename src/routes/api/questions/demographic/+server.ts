import type {RequestHandler} from "@sveltejs/kit";
import {error, json} from "@sveltejs/kit";
import {db} from "$lib/server/drizzle";
import {QuestionsTable as questions} from "$lib/data/Question";
import {eq} from "drizzle-orm";

export const GET: RequestHandler = async ({request}) => {
    console.log("getting Demographic Questions")
    try {
        const res = await db.select().from(questions).where(eq(questions.type, "demographic")        );

        return json(res)
    } catch (e) {
        throw error(500, "unable to get demographic questions from Database")
    }
}

