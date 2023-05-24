import {sql} from "@vercel/postgres";
import {drizzle} from "drizzle-orm/vercel-postgres"
import {type NewQuestion, QuestionsTable} from "$lib/data/Question";
import * as sessions from "$lib/data/Session"
import {sql as drizzleSQL} from "drizzle-orm";




export async function createNewSessionInDB() {
    const result = await db.execute<{ id: number }>(drizzleSQL`
        INSERT INTO sessions (id, start_time)
        VALUES (DEFAULT, DEFAULT)
        returning *`)
    return result.rows.at(0)!.id
}


export const db = drizzle(sql, {schema: {...sessions}})
