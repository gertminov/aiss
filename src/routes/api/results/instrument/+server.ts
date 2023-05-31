import {error, type RequestHandler} from "@sveltejs/kit";
import {db} from "$lib/server/drizzle";
import {z} from "zod";
import type {NewResult} from "$lib/data/Result";
import {ResultTable} from "$lib/data/Result";

const instrumentSchema = z.object({
    sessionID: z.number(),
    instruments: z.array(z.string())
})

export const POST: RequestHandler = async event =>{
    const data = await event.request.json();
    const safeJson = instrumentSchema.safeParse(data);

    if (!safeJson.success) {
        console.log(safeJson.error)
        throw error(500, "something went wrong with the answer Data")
    }

    const res: NewResult = {
        sessionID: safeJson.data.sessionID,
        answer: safeJson.data.instruments.join(","),
        questionID: "instruments"
    }
    try {
        await db.insert(ResultTable).values(res)
        console.log("inserted Instruments")
    } catch (e) {
        console.log(e)
        throw error(500, "error while inserting audioAnswers into Database")
    }

    return  new Response("", {status: 200})
}
