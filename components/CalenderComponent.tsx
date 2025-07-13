import React from 'react'
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Calendar} from "@/components/ui/calendar";
import {Calendar1} from "lucide-react";

const CalenderComponent = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Calendar1 className='cursor-pointer hover:text-gray-600 transition-colors'/>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-lg border"
                />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default CalenderComponent
