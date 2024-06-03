import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";
import { EventLocation } from "@/types/event";
interface EventCardProps {
    event: {
        id: string;
        title: string;
        description: string;
        date: Date;
        location: "online" | "in-person";
        image: string;
        deadline: Date;
        instructions: string;
        capacity: number;
        tags: string[];
    }
}

export const EventCard = ({
    event
}: EventCardProps) => {
    return (
        <Link href={`/events/${event.id}`} target="_blank">
            <Card>
                <div className="flex flex-row items-center justify-start w-full  h-full p-4">
                    <Avatar>
                        <AvatarImage src={event.image} alt="Image" />
                        <AvatarFallback>TC</AvatarFallback>
                    </Avatar>
                    <CardHeader>
                        <CardTitle>
                            {event.title}
                        </CardTitle>
                        <CardDescription>
                            {event.description.slice(0, 300)}. . .
                        </CardDescription>
                    </CardHeader>
                </div>
                <CardContent>
                    <div className="flex-1 space-x-2">
                        <Badge variant="secondary" className="capitalize">
                            {event.location}
                        </Badge>
                        <Badge variant="secondary" className=" bg-emerald-300">
                            {event.date.toDateString()}
                        </Badge>
                        <Badge variant="destructive" className=" ">
                            {event.deadline.toDateString()}
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}