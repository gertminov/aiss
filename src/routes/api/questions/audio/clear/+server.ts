import type {RequestHandler} from "@sveltejs/kit";
import {error, json} from "@sveltejs/kit";
import {addAudioQuestions} from "$lib/server/addQuestions";

/**
 * Needs ?auth=WirBildenAus!
 * @param url
 * @constructor
 */
export const GET: RequestHandler = async ({url})=>{
    console.log("generating")
    const auth = url.searchParams.get("auth");
    if (auth != "WirBildenAus!"){
        throw error(500, "no auth provided")
    }
    try {
        await addAudioQuestions()
    } catch (e) {
        console.log(e)
        throw error(500, "error while adding questions to DB")
    }
    console.log("generated")
    return json({message: "Created questions"})
}
