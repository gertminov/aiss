import type {RequestHandler} from "@sveltejs/kit";
import {json} from "@sveltejs/kit";
import {AudioQuestions, QuestionsWithMetaphors} from "$lib/server/AudioQuestionsList";

export const GET: RequestHandler = async ({request}) => {

    return json({schemata: AudioQuestions, with_metaphors: QuestionsWithMetaphors} )
}
