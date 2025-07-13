import React from 'react'
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";
import PopUp from "@/components/PopUp";

const Page = () => {
    return (
        <div className="w-full h-[100vh] overflow-y-scroll py-4 min-h-screen px-4 sm:px-6 lg:px-8 mx-auto flex gap-2">
            <LeftSideBar isSm={false}/>
            <RightSideBar/>
            <PopUp/>
        </div>
    )
}
export default Page
