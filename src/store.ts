import {type Writable, writable} from "svelte/store";
import type {Question} from "$lib/data/Question";
import type QuestionAndAnswerData from "$lib/data/QuestionAndAnswerData";
import type {AudioResultData} from "$lib/data/AudioResult";
import {localStorageStore} from "@skeletonlabs/skeleton";


export const surveyProgress = writable({total: 1, current: 0})
export const sessionID = localStorageStore("sessionID", -1, {storage: "session"})

export const demographicQuestions: Writable<Question[]> = localStorageStore("demographicQuestions", [])


export const audioQuestions: Writable<QuestionAndAnswerData[]> = localStorageStore("audioQuestions", [])

export const audioResultsStore: Writable<Record<string, AudioResultData>> = localStorageStore("audioResults", {}, {storage: "session"})


export function clearAllStores() {
    surveyProgress.set({total: 1, current: 0})
    sessionID.set(-1)
    demographicQuestions.set([])
    audioQuestions.set([])
    audioResultsStore.set({})
}
