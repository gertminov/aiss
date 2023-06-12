import type {NewQuestion} from "$lib/data/Question";
import {QuestionsTable} from "$lib/data/Question";
import {db} from "$lib/server/drizzle";
import {eq} from "drizzle-orm";
import {AudioQuestionTable} from "$lib/data/AudioQuestion";
import {AudioAnswerTable} from "$lib/data/AudioAnswerData";
import {AudioQuestionsList} from "$lib/server/AudioQuestionsList";
import {AudioResultTable} from "$lib/data/AudioResult";

export async function addDemographicQuestions() {
    const questions: NewQuestion[] = [
        {
            id: "age",
            text: "age",
            type: "demographic"
        },
        {
            id: "gender",
            text: "gender",
            type: "demographic"
        },
        {
            id: "education",
            text: "education",
            type: "demographic"
        },
        {
            id: "work",
            text: "work",
            type: "demographic"
        }
    ]

    await db.insert(QuestionsTable).values(questions)
}

export async function clearAndInsertDemographicQuestions() {
    await db.delete(QuestionsTable).where(eq(QuestionsTable.type, "demographic"))
    await addDemographicQuestions()
}

export async function addAudioQuestions() {
    await db.delete(AudioResultTable)
    await db.delete(AudioQuestionTable)
    await db.delete(AudioAnswerTable)

    const questions = AudioQuestionsList
    const answers = questions.map(quest => quest.getAnswers())
    const flatAnswers = answers.flat()
    await db.insert(AudioAnswerTable).values(flatAnswers).onConflictDoNothing()
    await db.insert(AudioQuestionTable).values(questions).onConflictDoNothing()
}

export async function addInstrumentQuestion() {
    const instrumentQuestion: NewQuestion = {
        id: "instruments",
        text: "Welche Instrumente spielen Sie",
        type: "instrument"
    }

    await db.insert(QuestionsTable).values(instrumentQuestion)
    console.log("inserted Instrument Question")
}



