"use client"
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
import { Button, buttonVariants } from '@/components/ui/button';
import { ChevronDown, ChevronUp, FilterIcon } from 'lucide-react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { siteConfig } from '@/config/siteConfig';
import { cn } from '@/lib/utils';


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

interface FilterFieldProps {
    label: string;
    options: {
        label: string;
        value: string;
    
    }[];
    selectConstraint?: SelectContraint;
    disabled?: boolean;
}
const FilterField = ({
    label,
    options,
    selectConstraint = SelectContraint.SINGLE,
    disabled = false
}: FilterFieldProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <Collapsible defaultOpen={true} className='border rounded-md p-4' onOpenChange={()=>{
            setIsOpen(!isOpen);
        }}>
            <CollapsibleTrigger asChild>
                <div className={cn("flex w-full h-12 rounded-t-lg bg-gray-200",
                    isOpen ? "rounded-b-md" : "rounded-b-none"
                )}>
                    <div className="flex-1 flex items-center px-4">
                        {label}
                    </div>
                    <div className="flex items-center justify-center w-12 h-12">
                        {
                            isOpen ? <ChevronDown className='w-4 h-4' /> : <ChevronUp className='w-4 h-4' />
                        }
                    </div>
                </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <ToggleGroup className="flex-1 w-full p-2  justify-start" type={selectConstraint} disabled={disabled}>
                    {options.map((option) => (
                        <ToggleGroupItem variant={"outline"} size={"sm"} key={option.value} value={option.value}
                            className='data-[state=on]:bg-gray-300 rounded-full'
                        >
                            {option.label}
                        </ToggleGroupItem>
                    ))}

                </ToggleGroup>
            </CollapsibleContent>
        </Collapsible>
    )
}