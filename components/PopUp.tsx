import React from 'react'
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import LeftSideBar from "@/components/LeftSideBar";
import {Menu} from "lucide-react";

const CalenderComponent = () => {
    return (
        <div className='fixed bottom-4 right-4 z-50 xl:hidden'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className='bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors'>
                        <Menu size={24}/>
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    side="top"
                    align="end"
                    className="w-72 max-h-[80vh] overflow-y-auto"
                >
                    <LeftSideBar isSm={true} />
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
export default CalenderComponent
