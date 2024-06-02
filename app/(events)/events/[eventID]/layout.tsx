import React from 'react';

interface EventDetailLayoutProps {
    children: React.ReactNode;
    params: {
        eventID: string;
    }
}

const EventDetailLayout = ({ children }: EventDetailLayoutProps) => {
    return (
        <div className='flex flex-col p-16 min-h-screen'>
            {children}
        </div>
    )
}

export default EventDetailLayout;