import {json, type RequestHandler} from "@sveltejs/kit";
import {AudioQuestionsList} from "$lib/server/AudioQuestionsList";

export const GET: RequestHandler = async () => {
    const matchList: Record<string, string[]> = {}
    AudioQuestionsList.forEach(q => {
        const key1 = q.answer1ID
        const key2 = q.answer2ID

        const key1Entry = matchList[key1];
        if (key1Entry) {
            key1Entry.push(q.option1)
        }else {
            matchList[key1] = [q.option1]
        }

        const key2Entry = matchList[key2];
        if (key2Entry) {
            key2Entry.push(q.option2)
        }else {
            matchList[key2] = [q.option2]
        }
    })

    return json(matchList )
}
