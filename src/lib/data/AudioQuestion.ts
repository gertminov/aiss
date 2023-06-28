import {pgEnum, pgTable, text, varchar} from "drizzle-orm/pg-core";
import {type AudioAnswerData, AudioAnswerTable} from "./AudioAnswerData";
import type {InferModel} from "drizzle-orm";
import {string} from "zod";


export const audioQuestionType = pgEnum("audio_question_type", ["scheme", "metaphor"])


export const AudioQuestionTable = pgTable(
    "audio_question",
    {
        id: varchar('id').primaryKey(),
        text: text('text').notNull(),
        answer1ID: varchar('answer_1_id').references(() => AudioAnswerTable.id),
        answer2ID: varchar('answer_2_id').references(() => AudioAnswerTable.id),
        option1: varchar('option_1').notNull(),
        option2: varchar('option_2').notNull(),
        type: audioQuestionType('question_type').notNull().default("scheme")
    }
)

type AudioQuestionModel = InferModel<typeof AudioQuestionTable>
type NewAudioQuestionModel = InferModel<typeof AudioQuestionTable, "insert">

const baseAudioURL = "https://pub-13948fdeb125422a88ab9aa10251729c.r2.dev/"


export interface AudioQuestionData extends NewAudioQuestionModel {
    answer1Obj: AudioAnswerData
    answer2Obj: AudioAnswerData
}


type questionSchema<ID1 extends string, ID2 extends string> = {
    schema: Record<ID1 | ID2, string>
    metaphors: {
        [answers in ID1 | ID2 | "id"]: string
    }[],
    audios: { [answer in ID1 | ID2 | "description"]: string }[],
    nach?: boolean
}

type questionConfig = {
    id: string,
    answerOption1: string,
    answerOption2: string,
    answer1: {
        audioURL: string,
        id: string
    },
    answer2: { audioURL: string, id: string },
    description: string,
    type: "scheme" | "metaphor",
    nach: boolean
}


export class AudioQuestion implements AudioQuestionData {
    public answer1ID
    public answer2ID
    public description

    constructor(
        public id: string,
        public text: string,
        public answer1Obj: AudioAnswerData,
        public answer2Obj: AudioAnswerData,
        public option1: string,
        public option2: string,
        description: string,
        public type?: "scheme" | "metaphor"
    ) {
        this.answer1ID = answer1Obj.id
        this.answer2ID = answer2Obj.id
        this.description = description
    }

    getAnswers() {
        return [this.answer1Obj, this.answer2Obj]
    }

    static fromDB(quesion: AudioQuestionModel, answer1: AudioAnswerData, answer2: AudioAnswerData) {
        return new AudioQuestion(
            quesion.id,
            quesion.text,
            answer1,
            answer2,
            quesion.option1,
            quesion.option2,
            "no description, this is a default from AudioQuestion.ts"
        )
    }

    // static generate(options: questionConfig) {
    //     const {id, answerOption1, answerOption2, answer1, answer2, description, type, nach} = options
    //
    //     const questionText = `Welches Sample klingt ${nach ? "nach" : ""} <b>${answerOption1.toLowerCase()}</b> und welches <b>${answerOption2.toLowerCase()}</b>`
    //
    //     const baseURL = "https://pub-13948fdeb125422a88ab9aa10251729c.r2.dev/"
    //
    //     const genID = id || answer1.audioURL.split("/")[0]
    //
    //     const newAnswer1 = {id: answer1.id, audioURL: baseURL + answer1.audioURL}
    //     const newAnswer2 = {id: answer2.id, audioURL: baseURL + answer2.audioURL}
    //
    //
    //     return new AudioQuestion(
    //         genID,
    //         questionText,
    //         newAnswer1,
    //         newAnswer2,
    //         option1,
    //         option2,
    //         description,
    //         type || "scheme"
    //     )
    // }

    static generate<ID1 extends string, ID2 extends string>(id1: ID1, id2: ID2, options: questionSchema<ID1, ID2>) {
        const id = `${id1}-${id2}`
        const answerOptions = options.audios.map(pair => ({
            id: this.getID(id, pair[id1]),
            audio1: {
                audioURL: this.buildAudioURL(id, pair[id1]),
                id: this.getID(id1, pair[id1])
            },
            audio2: {
                audioURL: this.buildAudioURL(id, pair[id2]),
                id: this.getID(id2, pair[id2])
            },
            description: pair.description,
        }))

        const schemas: questionConfig[] = answerOptions.map(option => ({
            id: option.id,
            answerOption1: options.schema[id1],
            answerOption2: options.schema[id2],
            answer1: {...option.audio1},
            answer2: {...option.audio2},
            description: option.description,
            type: "scheme",
            nach: options.nach || false
        }))

        const metaphors: questionConfig[] = answerOptions.flatMap(option => {
            const split = option.id.split(":")
            const secondIDPart = split[1] ||  ""
            return options.metaphors.map(metaphor => ({
                id: metaphor.id + ":" + secondIDPart,
                answerOption1: metaphor[id1],
                answerOption2: metaphor[id2],
                answer1: {...option.audio1},
                answer2: {...option.audio2},
                description: option.description,
                type: "metaphor",
                nach: options.nach || false
            }))
        })

        return [...schemas, ...metaphors].map(q => {
            const questionText = `Welches Sample klingt ${q.nach ? "nach" : ""} <b>${q.answerOption1.toLowerCase()}</b> und welches <b>${q.answerOption2.toLowerCase()}</b>`
            return new AudioQuestion(
                q.id,
                questionText,
                q.answer1,
                q.answer2,
                q.answerOption1,
                q.answerOption2,
                q.description,
                q.type
            )
        })
    }


    static getID(id: string, url: string) {
        const urlParts = url.split("/")
        if (urlParts.length == 1) {
            return id
        } else {
            return id + ":" + urlParts[0]
        }
    }


    static buildAudioURL(category: string, url: string) {
        const firstPart = baseAudioURL  + category + "/"
        return url.endsWith(".mp3") ? firstPart + url : firstPart + url + ".mp3";
    }

}
