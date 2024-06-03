"use server"
import { redis } from "@/lib/redis";
import { eventSchema } from "@/validators/create-event";

export const getEventDetails = async (eventID: string) => {
    const event = await redis.get(`event:${eventID}`) as object;
    console.log("Event Details: ", event, eventID);
    if (!event) {
        return null;
    }
    const {
        title,
        description,
        date,
        location,
        image,
        deadline,
        instructions,
        capacity,
        tags
    
    } = eventSchema.parse(event);
    let returnData = {
        id: eventID,
        title,
        description,
        date: new Date(date),
        location,
        image,
        deadline: new Date(deadline),
        instructions,
        capacity,
        tags
    }
    return returnData;
}