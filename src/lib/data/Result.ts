import type Question from "$lib/data/Question";

export default interface Result {
    time: number
    question: Question
    toPrisma():Record<string, any>
}