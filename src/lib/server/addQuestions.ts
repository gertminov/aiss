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
        AudioQuestion.generate({
            id: "big_small",
            answer1: {
                id: "big",
                audioURL: "big-small/combined/bs-big.mp3"
            },
            answer2: {
                id: "small",
                audioURL: "big-small/combined/bs-small.mp3"
            },
            option1: "Groß",
            option2: "Klein"
        }),
        AudioQuestion.generate({
            answer1: {
                id: "bright",
                audioURL: "bright-dark/birght-dark-noise/bd-bright-noise.mp3"
            },
            answer2: {
                id: "dark",
                audioURL: "bright-dark/birght-dark-noise/bd-dark-noise.mp3"
            },
            option1: "Hell",
            option2: "Dunkel"
        }),
        AudioQuestion.generate({
            answer1: {
                id: "center",
                audioURL: "center-perifery/diffuse_pan-mono/cp-center.mp3"
            },
            answer2: {
                id: "perifery",
                audioURL: "center-perifery/diffuse_pan-mono/cp-perifery.mp3"
            },
            option1: "Zentrum",
            option2: "Peripherie"
        }),
        AudioQuestion.generate({
            answer1: {
                id: "clean",
                audioURL: "clean-dirty/sine-fm/cd-clean.mp3"
            },
            answer2: {
                id: "dirty",
                audioURL: "clean-dirty/sine-fm/cd-dirty-fm.mp3"
            },
            option1: "Sauber",
            option2: "Dreckig"
        }),
        AudioQuestion.generate({
            answer1: {
                id: "fast",
                audioURL: "fast-slow/8th-16th/fs-fast-note.mp3"
            },
            answer2: {
                id: "slow",
                audioURL: "fast-slow/8th-16th/fs-slow-note.mp3"
            },
            option1: "Langsam",
            option2: "Schnell"
        }),
        AudioQuestion.generate({
            answer1: {
                id: "hard",
                audioURL: "hard-soft/fast-slow-adsr/hs-hard.mp3"
            },
            answer2: {
                id: "soft",
                audioURL: "hard-soft/fast-slow-adsr/hs-soft.mp3"
            },
            option1: "Hart",
            option2: "Weich"
        }),
        AudioQuestion.generate({
            answer1: {
                id: "heavy",
                audioURL: "heavy-light/808-plug/hl-heavy-sine-noise.mp3"
            },
            answer2: {
                id: "light",
                audioURL: "heavy-light/808-plug/hl-light-sine.mp3"
            },
            option1: "Schwer",
            option2: "Leicht"
        }),
        AudioQuestion.generate({
            answer1: {
                id: "different",
                audioURL: "mathing-nonmatching/different-same-sound/mn-difference.mp3"
            },
            answer2: {
                id: "matching",
                audioURL: "mathing-nonmatching/different-same-sound/mn-same-sine.mp3"
            },
            option1: "Zusammengehörig",
            option2: "Nicht Zusammengehörig"
        }),
        AudioQuestion.generate({
            answer1: {
                id: "diverging",
                audioURL: "merging/me-diverging.mp3"
            },
            answer2: {
                id: "merging",
                audioURL: "mathing-nonmatching/different-same-sound/mn-same-sine.mp3"
            },
            option1: "Zusammen-kommend",
            option2: "Auseinander-gehend"
        }),
        AudioQuestion.generate({
            answer1: {
                id: "far",
                audioURL: "near-far/nf-far.mp3"
            },
            answer2: {
                id: "near",
                audioURL: "near-far/nf-near.mp3"
            },
            option1: "Nah",
            option2: "Entfernt"
        }),
        AudioQuestion.generate({
            answer1: {
                id: "part",
                audioURL: "part-whole/ph-part.mp3"
            },
            answer2: {
                id: "whole",
                audioURL: "part-whole/ph-whole.mp3"
            },
            option1: "Ganz",
            option2: "Teile"
        }),
        AudioQuestion.generate({
            answer1: {
                id: "rough",
                audioURL: "smooth-rough/smooth-chopped/sr-rough.mp3"
            },
            answer2: {
                id: "smooth",
                audioURL: "smooth-rough/smooth-chopped/sr-smooth.mp3"
            },
            option1: "Weich",
            option2: "Rau"
        }),
        AudioQuestion.generate({
            answer1: {
                id: "crooked",
                audioURL: "straight-crooked/sc-bendy-pitch.mp3"
            },
            answer2: {
                id: "straight",
                audioURL: "straight-crooked/sc-straight.mp3"
            },
            option1: "Gerade",
            option2: "Krumm"
        }),
        AudioQuestion.generate({
            answer1: {
                id: "down",
                audioURL: "up-down/ud-down.mp3"
            },
            answer2: {
                id: "up",
                audioURL: "up-down/ud-up.mp3"
            },
            option1: "Hoch",
            option2: "Runter"
        }),
        AudioQuestion.generate({
            answer1: {
                id: "cold",
                audioURL: "warm-cold/chord-plug/wc-cold-sound.mp3"
            },
            answer2: {
                id: "warm",
                audioURL: "warm-cold/chord-plug/wc-warm-sound.mp3"
            },
            option1: "Warm",
            option2: "Kalt"
        }),
    ]
    const answers = questions.map(quest => quest.getAnswers())
    const flatAnswers = answers.flat()
    await db.insert(AudioAnswerTable).values(flatAnswers).onConflictDoNothing()
    await db.insert(AudioQuestionTable).values(questions).onConflictDoNothing()
}

