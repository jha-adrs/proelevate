import Link from "next/link"
import { EventForm } from "./event-form"
import { Button } from "@/components/ui/button"

interface AddEventProps {

}

export const AddEvent = ({ }: AddEventProps) => {
    return (
        <div className="flex flex-col min-h-screen w-full bg-gray-50 items-start justify-stretch p-6 pt-16 lg:px-64">
            <div className="grid w-full h-full grid-cols-1 lg:grid-cols-3 ">

                <div className="min-h-[50vh] space-y-4 col-span-1 lg:order-last">
                    <h1 className="font-bold text-3xl">
                        Host an Event with Us!
                    </h1>
                    <p className="text-normal">Ready to host an event? Fill out the form below to get started!</p>
                    <ul className="font-medium list-disc">
                        Here&apos;s what you will need to get started:
                        <div className="text-muted-foreground pl-6">
                            <li>Event Title</li>
                            <li>Event Description</li>
                            <li>Event Date</li>
                            <li>Registration Deadline</li>
                            <li>Event Location</li>
                            <li>Event Capacity</li>
                            <li>Event Price</li>
                            <li>Event Image</li>
                            <li>Event Tags</li>
                        </div>

                    </ul>
                    <div>
                        <p className="font-medium">Need help? Contact us at <Link href="mailto:a" >
                            <Button variant={"link"}>
                                aadarshjha6783@gmail.com
                            </Button>
                            </Link> 
                        </p>
                    </div>
                </div>
                <div className="flex h-full w-full col-span-1 lg:col-span-2 lg:order-first ">
                    <EventForm />
                </div>
            </div>
        </div>
    )
}