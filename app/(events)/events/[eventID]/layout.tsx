import React from 'react';

interface EventDetailLayoutProps {
    children: React.ReactNode;
    params: {
        eventID: string;
    }
}

const EventDetailLayout = ({ children }: EventDetailLayoutProps) => {
    return (
        <div className='flex min-h-screen h-full w-full flex-col items-center bg-gray-50'>
            {children}
        </div>
    )
}

export default EventDetailLayout;