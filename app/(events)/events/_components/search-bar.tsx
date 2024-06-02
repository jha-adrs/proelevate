"use client"
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import React from 'react';

interface SearchBarProps {

}

export const SearchBar = ({ }: SearchBarProps) => {
    return (
        <>
            <SearchIcon className='absolute w-4 h-4 left-6 text-muted-foreground'/>
            <Input type="search" placeholder='    Search events' className='max-w-lg rounded-full' />
        </>
    )
}