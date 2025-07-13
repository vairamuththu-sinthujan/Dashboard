'use client'
import React, {useState} from 'react'
import {ModeToggle} from "@/components/ModeToggle";
import CalenderComponent from "@/components/CalenderComponent";
import {Search} from "lucide-react";

const Hearder = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        <main className='flex-1 sm:flex-row p-6 flex justify-between items-start'>
            <section className='flex flex-col justify-center items-start gap-1'>
                <h2 className='text-sm font-medium  tracking-wide'>
                    Hello Dave, Welcome Back
                </h2>
                <h1 className=' text-2xl sm:text-3xl font-bold  bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                    Your Dashboard is Updated
                </h1>
            </section>
            <section className='flex gap-8 items-center justify-between'>
                <div>
                    <CalenderComponent/>
                </div>
                <div className='hidden sm:flex gap-2 items-center'>
                    <input
                        className={`border rounded-md border-black focus:outline-none dark:border-gray-300 transition-all duration-300 ${
                            isOpen
                                ? 'w-64 px-2 py-1 opacity-100'
                                : 'w-0 px-0 py-0 opacity-0 border-transparent'
                        }`}
                        placeholder={isOpen ? "Search..." : ""}
                    />
                    <Search  className="cursor-pointer hover:text-gray-600 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        size={20}
                    />
                </div>
                <div className=''>
                    <ModeToggle/>
                </div>
            </section>
        </main>
            <section className='sm:hidden p-6 flex gap-2 justify-center items-center'>
                <input placeholder='Search...' className='border rounded-md border-black px-2 focus:outline-none dark:border-gray-300 transition-all duration-300'/>
                <Search  className="cursor-pointer hover:text-gray-600 transition-colors" size={20}/>
            </section>
            </>
    )
}
export default Hearder
