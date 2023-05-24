import {error, json, type RequestHandler} from "@sveltejs/kit";
import {db} from "$lib/server/drizzle";
import {AudioQuestion, AudioQuestionTable as questions} from "$lib/data/AudioQuestion";
import {AudioAnswerTable} from "$lib/data/AudioAnswerData";
import {eq} from "drizzle-orm";
import {alias} from "drizzle-orm/pg-core";

export const GET: RequestHandler = async ({request}) => {
    console.log("getting audio Questions")
    try {
        const answer2 = alias(AudioAnswerTable, "answer2")
        const answer1 = alias(AudioAnswerTable, "answer1")
        const res = await db.select().from(questions).leftJoin(answer1, eq(questions.answer1ID, answer1.id)).leftJoin(answer2, eq(questions.answer2ID, answer2.id))
        const audioquestions = res.map(row => {
            const {audio_question, answer1, answer2} = row
            if (audio_question && answer1 && answer2) {
               return  AudioQuestion.fromDB(audio_question, answer1, answer2);
            } else {
                throw error(500, "error while fetching audio Questions could not get everything for question: " + audio_question.id)
            }
        })

        return json(audioquestions)
    } catch (e) {
        console.log(e)
        throw error(500, "unable to get demographic questions from Database")
    }
}
