import type Result from "$lib/data/Result";

export default interface Session {
    id: number,
    results: Result[]
}