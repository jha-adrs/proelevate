"use server";

import { redis } from "@/lib/redis";
import { EventType } from "@/types/event";
import { formSchema } from "@/validators/create-event";
import { revalidatePath } from "next/cache";

//TODO: Add checks, if event already exists, deadline is before date, etc.


export const addEvent = async (event: any) => {
    // Add event to database
    let eventID = Math.random().toString(36).substring(7);
    event.id = eventID;
    console.log("Adding event", eventID, event)
    const isCorrect = formSchema.safeParse(event);
    if (!isCorrect.success) {
        console.error(isCorrect.error);
        return null;
    }
    try {
        console.log(event);
        const response = await redis.set(`event:${eventID}`, JSON.stringify(event));
        console.log(response);
        revalidatePath("/events");
    } catch (error) {
        console.error(error);

    }
    return event;
}