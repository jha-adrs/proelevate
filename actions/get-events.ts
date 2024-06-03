"use server";

import { redis } from "@/lib/redis";
import { eventSchema } from "@/validators/create-event";
import { z } from "zod";
//import { formSchema } from "@/validators/create-event";

//Get all events


export const getAllEvents = async () => {
    
   //Get all strings with prefix event:
    const redisResponse = await redis.keys("event:*");
    //console.log(redisResponse);
    let events = [];
    for (let key of redisResponse) {
        const event = await redis.get(key) as object;
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
        } = await eventSchema.parseAsync(event);
        events.push( {
            id: key.split(":")[1],
            title,
            description,
            date: new Date(date),
            location,
            image,
            deadline: new Date(deadline),
            instructions,
            capacity,
            tags
            
        })
    }
    //console.log(events);
    return {
        ids: redisResponse,
        events: events,
        count: events.length
    }
}