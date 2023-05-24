import type {NewQuestion} from "$lib/data/Question";
import {QuestionsTable} from "$lib/data/Question";
import {db} from "$lib/server/drizzle";
import {eq} from "drizzle-orm";
import {AudioQuestion, AudioQuestionTable} from "$lib/data/AudioQuestion";
import {AudioAnswerTable} from "$lib/data/AudioAnswerData";

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
    const questions: AudioQuestion[] = [
        new AudioQuestion(
            "big_small",
            "Welches Sample klingt groß und welches klein?",
            {
                id: "big",
                audioURL: "audio/Big-Small_Big_Low-Loud-Reverb_1.mp3"
            },
            {
                id: "small",
                audioURL: "audio/Big-Small_Small_High-Quiet-Dry_1.mp3"
            },
            "Groß",
            "Klein"
        ),
        new AudioQuestion(
            "center_peref",
            "Welches Sample klingt Mitting und welches außen?",
            {
                id: "center",
                audioURL: "audio/Center-Perifery_Center_1.mp3"
            },
            {
                id: "perifery",
                audioURL: "audio/Center-Perifery_Perifery_Randome-Pan_1.mp3"
            },
            "Mitte",
            "Außen"
        ),
        new AudioQuestion(
            "bright_dark",
            "Welches Sample Hell und welches Dunkel?",
            {
                id: "bright",
                audioURL: "audio/Bright-Dark_Bright_Noise_High-Cut_1.mp3",
            },
            {
                id: "dark",
                audioURL: "audio/Bright-Dark_Dark_Noise_Low-Cut_1.mp3",
            },
            "Hell",
            "Dunkel"
        )
    ]
    const answers = questions.map(quest => quest.getAnswers())
    const flatAnswers = answers.flat()
    await db.insert(AudioAnswerTable).values(flatAnswers).onConflictDoNothing()
    await db.insert(AudioQuestionTable).values(questions).onConflictDoNothing()
}

