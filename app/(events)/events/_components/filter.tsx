import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import {  buttonVariants } from '@/components/ui/button';
import {  FilterIcon } from 'lucide-react';

import { siteConfig } from '@/config/siteConfig';
import { cn } from '@/lib/utils';
import { FilterField } from './filter-field';


interface FilterProps {

}

export const FilterDialog = ({ }: FilterProps) => {

    return (
        <Dialog>
            <DialogTrigger className={cn(buttonVariants({variant:"outline2", size: "smRounded"}))}>
            <FilterIcon className='w-4 h-4 mr-2' /> Filters
            </DialogTrigger>
            <DialogContent className='max-w-md md:max-w-lg lg:max-w-xl rounded-md '>
                <DialogHeader className='items-start'>
                    <DialogTitle>
                        Filters
                    </DialogTitle>
                    <DialogDescription>
                        Add filters to refine your search
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="w-full h-full max-h-[70vh]">
                    <div className="flex flex-col w-full space-y-4">
                        {
                            siteConfig.eventFilters.map((filter) => (
                                <FilterField key={filter.label} label={filter.label} options={filter.options} selectConstraint={filter.selectConstraint} disabled={filter.disabled} />
                            ))
                        }
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}
