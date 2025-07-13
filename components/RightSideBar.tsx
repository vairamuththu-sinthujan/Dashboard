import React from 'react'
import Hearder from "@/components/Hearder";
import RightSideMidle from "@/components/RightSideMidle";
import RightSideFooter from "@/components/RightSideFooter";

const RightSideBar = () => {
    return (
        <main className='flex-1 flex-col overflow-y-scroll'>
            <Hearder/>
            <RightSideMidle/>
            <RightSideFooter/>
        </main>
    )
}
export default RightSideBar
