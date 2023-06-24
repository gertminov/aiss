import {error, redirect, type RequestHandler} from "@sveltejs/kit";
import {db} from "$lib/server/drizzle";
import {HearingResultRable, hearingResultSchema} from "$lib/data/HearingResult";


export const POST: RequestHandler = async ({request}) => {
    const body = await request.json()

    const form = hearingResultSchema.safeParse(body)
    console.log(form)
    if (!form.success) {
        throw error(501, "invalid form Data" + form.error)
    }

    try {
        await db.insert(HearingResultRable).values(form.data)
    } catch (e) {
        console.log(e)
        throw error(500, "error writing result to db")
    }

    throw redirect(303, "/demographic/age")
}
