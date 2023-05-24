import type {RequestHandler} from "@sveltejs/kit";
import {error} from "@sveltejs/kit";
import {db} from "$lib/server/drizzle"
import {AudioResultTable, insertAudioResultSchema} from "$lib/data/AudioResult";
import {z} from "zod";


const audioResults = z.array(insertAudioResultSchema)
export const POST: RequestHandler = async event =>{
    const data = await event.request.json();
    const res = audioResults.safeParse(data)
    if (!res.success) {
        console.log(res.error)
        throw error(500, "something went wrong with the answer Data")
    }
    if (res.data.length == 0){
        throw error(500, "no audioAnswers submitted")
    }

    try {
        await db.insert(AudioResultTable).values(res.data)
    } catch (e) {
        console.log(e)
        throw error(500, "error while inserting audioAnswers into Database")
    }

    return  new Response("", {status: 200})
}