import {writable} from "svelte/store";

export const surveyProgress = writable({total: 1, current:0})