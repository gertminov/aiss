import {audioQuestions, demographicQuestions, sessionID as sessionIDStore} from "../store";
import {get} from "svelte/store";
import type {Question} from "$lib/data/Question";
import type {AudioQuestionData} from "$lib/data/AudioQuestion";
import {QuestionAndAnswerClass} from "$lib/data/QuestionAndAnswerData";

export class Fetcher {
    static async sessionID() {
        if (get(sessionIDStore) < 1) {
            const sessionJson = await (await fetch("/api/sessions")).json()
            sessionIDStore.set(sessionJson.id)
        }
    }

    static async demographicQuestions() {
        const demQuesitons = get(demographicQuestions)
        if (demQuesitons.length == 0) {
            const demographicJson = await (await fetch("/api/questions/demographic")).json();
            const demographicQuestionsFromDB = demographicJson as Question []
            demographicQuestions.set(demographicQuestionsFromDB)
        }
    }

    static async audioQuestions() {
        if (get(audioQuestions).length == 0) {
            const audioJson = await (await fetch("/api/questions/audio")).json() as AudioQuestionData[]
            const qAndA = audioJson.map(quest => new QuestionAndAnswerClass(quest))
            audioQuestions.set(qAndA)
            console.log("got AudioQuestions")
        }
    }
}