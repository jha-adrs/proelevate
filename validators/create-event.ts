import { z } from "zod";
export const formSchema = z.object({
    title: z.string().min(5).max(100),
    description: z.string().min(10).max(1000),
    date: z.date().min( new Date(), {message: "Please select a date in the future"}),
    location: z.enum(["online", "in-person"]),
    capacity: z.number().min(1).max(10000).default(500),
    price: z.number().default(0),
    image: z.string({ message: "An image URL is required" }).url({ message: "Please provide a valid URL" }),
    category: z.string().optional(),
    tags: z.array(z.string()).optional()
})
