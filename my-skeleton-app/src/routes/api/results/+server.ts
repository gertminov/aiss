import type {RequestHandler} from "@sveltejs/kit";

export const POST: RequestHandler = async event =>{
    let data = await event.request.json();
    console.log(data);
    return  new Response("", {status: 200})
}