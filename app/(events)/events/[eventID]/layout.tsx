import React from 'react';

interface EventDetailLayoutProps {
    children: React.ReactNode;
}

const EventDetailLayout = ({ children }: EventDetailLayoutProps) => {
    return (
        <div>
            <div className='h-64 bg-rose-500'/>
            {children}
        </div>
    )
}

export default EventDetailLayout;