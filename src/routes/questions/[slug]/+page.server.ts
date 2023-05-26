import type {PageServerLoad} from "./$types"
import {db} from "$lib/server/drizzle";
import {QuestionsTable} from "$lib/data/Question";
import {eq} from "drizzle-orm";

export const load: PageServerLoad = async ({params}) => {
    console.log(params)
    const results = await db.select().from(QuestionsTable).where(eq(QuestionsTable.id, params.slug))
    if (results.length > 0) {
        return  results[0]
    } else {
        return {error: "keine Frage mit der ID"}
    }
}
