"use client"
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { SearchIcon } from 'lucide-react';
import React from 'react';

interface SearchBarProps {
    className?: string;
}

export const SearchBar = ({className}: SearchBarProps) => {
    // TODO: Implement search functionality
    return (
        
            <Input type="search" placeholder='Search events' className={cn('max-w-lg w-full rounded-full', className)} />
        
    )
}