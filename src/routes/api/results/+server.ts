import type {RequestHandler} from "@sveltejs/kit";
import {insertQuestion} from "$lib/server/drizzle"

export const GET: RequestHandler = async event =>{
   insertQuestion("geht das?")
    return new Response(null, {status: 200})
}
export const POST: RequestHandler = async event =>{
    const data = await event.request.json();
    console.log(data);
    return  new Response("", {status: 200})
}