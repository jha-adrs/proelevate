import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils';
import { HomeIcon } from 'lucide-react';
import React from 'react';

interface BreadCrumbProps {
    className?: string;
    path: {
        label: string;
        href: string;
    }[];
}

export const BreadCrumb = ({ className, path }: BreadCrumbProps) => {
    return (
        <Breadcrumb className={cn(
            'flex',
            className

        )}>
            <BreadcrumbList>
                {
                    path.map((item, index) => (
                        <>
                            <BreadcrumbItem key={index}>
                                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator key={index} />
                        </>
                    ))

                }
            </BreadcrumbList>
        </Breadcrumb>
    )
}