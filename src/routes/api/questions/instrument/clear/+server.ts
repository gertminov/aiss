import type {RequestHandler} from "@sveltejs/kit";
import {error} from "@sveltejs/kit";
import {addInstrumentQuestion} from "$lib/server/addQuestions";

export const GET: RequestHandler = async (e)=>{
    console.log("generating")
    try {
        await addInstrumentQuestion()
    } catch (e) {
        throw error(500, "error while adding questions to DB")
    }
    console.log("generated")
    return new Response()
}
