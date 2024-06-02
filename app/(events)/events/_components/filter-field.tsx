"use client"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { SelectContraint } from "@/types/event";


interface FilterFieldProps {
    label: string;
    options: {
        label: string;
        value: string;
    
    }[];
    selectConstraint?: SelectContraint;
    disabled?: boolean;
}
export const FilterField = ({
    label,
    options,
    selectConstraint = SelectContraint.SINGLE,
    disabled = false
}: FilterFieldProps) => {
    const [isOpen, setIsOpen] = useState(false);
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