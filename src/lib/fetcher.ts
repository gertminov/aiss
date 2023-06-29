import {audioMetaphorQuestions, audioQuestions, demographicQuestions, sessionID as sessionIDStore} from "../store";
import {get} from "svelte/store";
import type {Question} from "$lib/data/Question";
import type {AudioQuestionData} from "$lib/data/AudioQuestion";
import {QuestionAndAnswerClass} from "$lib/data/QuestionAndAnswerData";

export class Fetcher {
    static async sessionID(isTest: boolean) {
        if (get(sessionIDStore) < 1) {
            const sessionJson = await (await fetch("/api/sessions", {
                method: "POST",
                body: JSON.stringify({test: isTest})
            })).json()
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
            const shuffeled = await this.getAudioQuestions("scheme");
            audioQuestions.set(shuffeled)
            console.log("got AudioQuestions")
        }
    }

    static async audioMetaphorQuestions() {
        if (get(audioMetaphorQuestions).length == 0) {
            const shuffeled = await this.getAudioQuestions("metaphor")
            audioMetaphorQuestions.set(shuffeled)
            console.log("got MethaphorQuestions")
        }
    }

    private static async getAudioQuestions(type: "scheme" | "metaphor") {
        const audioJson = await (await fetch("/api/questions/audio?type=" + type)).json() as AudioQuestionData[]
        const qAndA = audioJson.map(quest => new QuestionAndAnswerClass(quest))
        const shuffeled = this.shuffleArray(qAndA)
        return shuffeled;
    }

    /**
     * Shuffeles an array with the Fisher-Yates algorith
     * @param array Input array
     * @private
     */
    private static shuffleArray<T>(array: T[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    }
}