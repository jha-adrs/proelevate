// Type Declarations for Event
export enum EventLocation {
    ONLINE = "online",
    IN_PERSON = "in-person"
}

export enum SelectContraint{
    SINGLE = "single",
    MULTIPLE = "multiple"
}

export type EventType = {
    id: string;
    title: string;
    description: string;
    date: string;
    location: EventLocation;
    image: string;
    category: string;
}