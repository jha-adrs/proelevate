"use client"
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { format } from 'date-fns'
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';

import { toast } from 'sonner';
import { formSchema } from '@/validators/create-event';

interface EventFormProps {

}




export const EventForm = ({ }: EventFormProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            date: new Date(),
            location: EventLocation.ONLINE,
            capacity: 100,
            price: 0,
            image: "",
            category: "",
            tags: []
        }
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        const isCorrect = formSchema.safeParse(values);
        if (isCorrect.success) {
            console.log("Form is correct")
            toast.success("Form submitted")
        } else {
            console.error("Form is incorrect")
            toast.error("Form is incorrect")
        }
    }
    return (
        <div className="flex flex-col items-center justify-center space-y-6 border rounded-lg p-4 pt-8 w-full max-w-lg">
            <h2 className="font-semibold text-xl">
                Let&apos;s get your event started 🚀
            </h2>
            <p className="text-muted-foreground text-sm text-center max-w-md">
                It only takes a few minutes to get your event up and running. Fill out the form below to get started!
            </p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 w-full max-w-md'>

                    <FormField
                        control={form.control}
                        name="title"
                        render={
                            ({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel>Event Title</FormLabel>
                                        <FormDescription>Give your event a title</FormDescription>
                                        <FormControl>
                                            <Input placeholder='A really nice event' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )
                            }
                        }
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={
                            ({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel>Event Title</FormLabel>

                                        <FormDescription>Give your event a description</FormDescription>
                                        <FormControl>
                                            <Textarea placeholder='The event is about...' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )
                            }
                        }
                    />
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Event Date</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[240px] pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                                date <= new Date()
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormDescription>
                                    Please select your event date {/*Add date range later*/}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="location"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Event Location</FormLabel>
                                <FormControl>
                                    <Select onValueChange={
                                        (value) => {
                                            form.setValue("location", value as EventLocation)
                                        }

                                    } {...field} >
                                        <SelectTrigger>
                                            {field.value === "online" ? "Online" : field.value === "in-person" ? "In-Person" : "Select a location"}
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value={"online"}>
                                                Online
                                            </SelectItem>
                                            <SelectItem value={"in-person"}>
                                                In-Person
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="image"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Event Image</FormLabel>
                                <FormDescription>
                                    Provide a public URL to an image for your event
                                </FormDescription>
                                <FormControl>
                                    <Input type='url' placeholder='https://www.utfs.io/...' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
    
                    <Button type="submit" variant={"default2"}>Submit</Button>
                </form>
            </Form>
        </div>
    )
}