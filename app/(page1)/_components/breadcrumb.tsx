"use client"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils';
import { HomeIcon } from 'lucide-react';
import React from 'react';

interface BreadCrumbProps {
    className?: string;
}

export const BreadCrumb = ({ className }: BreadCrumbProps) => {
    return (
        <Breadcrumb className={cn(
            'flex',
            className
        
        )}>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/" className='inline-flex'><HomeIcon className='mr-1 w-4 h-4' /> Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/events">Events</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}