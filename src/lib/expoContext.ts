import {getContext, setContext} from "svelte";

export function getExpoContext() {
    return getContext("expo") as boolean
}

export function setExpoContext(flag: boolean) {
    setContext("expo", flag)
}