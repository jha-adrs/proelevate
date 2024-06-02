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
        date: string;
        location: EventLocation;
        image: string;
        category: string;
    }
}

export const EventCard = ({
    event
}: EventCardProps) => {
    return (
        <Link href={`/events/${event.id}`} target="_blank">
            <Card>
                <div className="flex flex-row items-center justify-center w-full  h-full p-4">
                    <Avatar>
                        <AvatarImage src={event.image} alt="Image" />
                        <AvatarFallback>TC</AvatarFallback>
                    </Avatar>
                    <CardHeader>
                        <CardTitle>
                            {event.title}
                        </CardTitle>
                        <CardDescription>
                            {event.description}
                        </CardDescription>
                    </CardHeader>
                </div>
                <CardContent>
                    <div className="flex-1 space-x-2">
                        <Badge variant="default" className="capitalize">
                            {event.location}
                        </Badge>
                        <Badge variant="secondary" className=" bg-gray-300">
                            {event.date}
                        </Badge>
                        <Badge variant="secondary" className=" bg-gray-300">
                            {event.category}
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}