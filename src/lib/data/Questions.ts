import type QuestionAndAnswerData from "./QuestionAndAnswerData";

export const questions: QuestionAndAnswerData[] = [
    {
        question: {
            id: 1,
            text: "Welches Sample klingt groß und welches klein?"
        },
        answers: {
            one: {id: 1, audioURL: "audio/Big-Small_Big_Low-Loud-Reverb_1.mp3"},
            two: {id: 2, audioURL: "audio/Big-Small_Small_High-Quiet-Dry_1.mp3"}
        },
        answerOptions: [{id: 1, text: "groß"}, {id: 2, text: "klein"}]
    },
    {
        question: {
            id: 2,
            text: "Welches Sample klingt Mitting und welches außen?"
        },
        answers: {
            one: {id: 3, audioURL: "audio/Center-Perifery_Center_1.mp3"},
            two: {id: 4, audioURL: "audio/Center-Perifery_Perifery_Randome-Pan_1.mp3"}
        },
        answerOptions: [{id: 5, text: "Mitte"}, {id: 6, text: "außen"}]
    },
    {
        question: {
            id: 3,
            text: "Welches Sample Hell und welches Dunkel?"
        },
        answers: {
            one: {
                id: 5, audioURL: "audio/Bright-Dark_Bright_Noise_High-Cut_1.mp3"
            },
            two: {
                id: 6, audioURL: "audio/Bright-Dark_Dark_Noise_Low-Cut_1.mp3"
            }
        },
        answerOptions: [{id: 3, text: "dunkel"}, {id: 4, text: "hell"}]
    }
]
