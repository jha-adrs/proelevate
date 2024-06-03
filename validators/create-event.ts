import { z } from "zod";
export const formSchema = z.object({
    title: z.string().min(5).max(100),
    description: z.string().min(10).max(3000),
    date: z.date().min( new Date(), {message: "Please select a date in the future"}),
    location: z.enum(["online", "in-person"]),
    capacity: z.coerce.number().min(1).default(1),
    price: z.number().default(0),
    image: z.string({ message: "An image URL is required" }).url({ message: "Please provide a valid URL" }),
    tags: z.array(z.string()).default(["general"]),
    instructions: z.string().min(10).max(5000).default("No instructions provided"),
    deadline : z.date().min( new Date(), {message: "Please select a date in the future"}),
})

export const eventSchema = z.object({
    title: z.string().min(5).max(100),
    description: z.string().min(10).max(3000),
    date: z.string(),
    location: z.enum(["online", "in-person"]),
    capacity: z.coerce.number().min(1).default(1),
    price: z.number().default(0),
    image: z.string({ message: "An image URL is required" }).url({ message: "Please provide a valid URL" }),
    tags: z.array(z.string()).default(["general"]),
    instructions: z.string().min(10).max(5000).default("No instructions provided"),
    deadline : z.string()
});

export const getEventDetailsSchema = z.object({
    title: z.string().min(5).max(100),
    description: z.string().min(10).max(1000),
    date: z.string(),
    location: z.enum(["online", "in-person"]),
    capacity: z.coerce.number().min(1).default(1),
    price: z.number().default(0),
    image: z.string({ message: "An image URL is required" }).url({ message: "Please provide a valid URL" }),
    tags: z.array(z.string()).default(["general"]),
    instructions: z.string().min(10).max(5000).default("No instructions provided"),
    deadline : z.string()
});