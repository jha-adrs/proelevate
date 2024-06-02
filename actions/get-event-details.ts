"use server"

import { siteConfig } from "@/config/siteConfig"

export const getEventDetails = async (eventID: string) => {
    const event = siteConfig.sampleEvents.find((event) => event.id === eventID)
    if (!event) {
        throw new Error('Event not found')
    }
    //await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
    return event;
}