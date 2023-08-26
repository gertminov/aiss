import {error, json, type RequestHandler} from "@sveltejs/kit";
import {AudioQuestionsList} from "$lib/server/AudioQuestionsList";

export const GET: RequestHandler = async () => {
    const qMap = new Map<string, { variant: string, type: string, is: string }>
    AudioQuestionsList.forEach(q => {
        if (q.isID) {
            qMap.set(q.id, {variant: q.variant || "", type: q.type|| "noType", is: q.isID})
        }else {
            throw error(404, "no image schema id for" + q.id)
        }
    })
    console.log(qMap)

    return json(Object.fromEntries(qMap))
}
