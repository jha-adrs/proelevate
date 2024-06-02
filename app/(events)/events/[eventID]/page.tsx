import React from 'react';

interface EventDetailProps {
    params :{
        eventID: string;
    }
}

const EventDetail = ({params: {eventID}}: EventDetailProps) => {
    return (
        <div>
            Event Detail Page {eventID}
        </div>
    )
}

export default EventDetail;