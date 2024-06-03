import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

interface NotFoundProps {

}

const NotFound = ({ }: NotFoundProps) => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-full min-h-screen'>
            <h1 className='text-3xl font-bold'>404 | Page Not Found</h1>
            <p>
                The page you are looking for does not exist.
            </p>
            <div className="flex flex-col lg:flex-row space-y-4 space-x-4">
                <Link href='/'>
                    <Button variant='default2' className='mt-4'>Go back to Home</Button>
                </Link>
                <Button variant='outline2' className='mt-2'>Report this issue</Button>
            </div>
        </div>
    )
}

export default NotFound;