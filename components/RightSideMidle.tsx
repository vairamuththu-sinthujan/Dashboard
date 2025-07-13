import React from 'react'
import Image from "next/image";
import {Plus} from "lucide-react";

const RightSideMidle = () => {
    return (
        <main className='grid grid-cols-1 sm:grid-cols-3 gap-4 p-4'>
            <section className='rounded-2xl bg-orange-100/50 dark:bg-amber-400 flex flex-col gap-4 p-8'>
                <div>
                    <Image src='/geo.jpg' alt='geo' width={400} height={400} className='w-full h-full rounded-2xl'/>
                </div>
                <div className='flex items-center justify-between gap-4'>
                    <div>
                        <p className='font-bold text-indigo-900'>Latest Uploads</p>
                        <span className='text-sm'>987 Total files</span>
                    </div>
                    <div>
                        <Plus className='bg-indigo-900 text-white p-2 rounded-2xl cursor-pointer' size={40} />
                    </div>
                </div>
            </section>
            <section className='flex flex-col gap-4'>
                <div className='flex gap-4 p-4 rounded-2xl bg-blue-300/30 justify-between items-center' >
                    <div className='flex w-full flex-col gap-2'>
                        <div>
                            <h2 className='font-bold text-sm text-indigo-900 dark:text-white'>{"Priority:Regular".toUpperCase()}</h2>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-xl text-indigo-900 dark:text-white'>Open Projects</h1>
                            <p className='text-sm'>30 Tasks remaining</p>
                        </div>
                        <div>
                            <h2 className='font-bold text-indigo-900 dark:text-white'>Compete Task</h2>
                        </div>
                    </div>
                    <div>
                        <Image src='/file.png' alt='file' width={400} height={400} className='w-full h-full'/>
                    </div>
                </div>
                <div className='flex gap-4 justify-between items-center' >
                    <div className='bg-blue-300/30 flex flex-1 flex-col gap-4 p-4 rounded-2xl justify-between items-center'>
                        <div>
                            <Image src='/play.png' alt='play' width={100} height={100} className='w-auto h-auto'/>
                        </div>
                        <div>
                            <h1 className='font-bold text-indigo-900 dark:text-white'>Lastest Media</h1>
                            <p className='text-sm'>23 Media Files</p>
                        </div>
                    </div>

                    <div className='bg-indigo-900 text-white flex flex-1 flex-col gap-4 p-4 rounded-2xl justify-between items-center'>
                        <div>
                            <Image src='/timer.png' alt='play' width={150} height={150} className='h-auto w-auto'/>
                        </div>
                        <div>
                            <h1 className='font-bold '>Urgent To Do</h1>
                            <p className='text-sm'>Highlight Priority Task</p>
                        </div>
                    </div>
                </div>
            </section>
            <section  className="bg-[url('/city.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl p-8 text-white flex flex-col justify-between">
                <div className='flex flex-col gap-4'>
                    <h1 className='text-2xl font-bold'>
                        What's Your Plan?
                    </h1>
                    <p>
                        Look Like a Shady Day
                    </p>
                    <p className='text-4xl'>36&#176;</p>
                </div>
                <div className='flex justify-end items-center'>
                    <div className='bg-white rounded-2xl rounded-tl-none p-4'>
                        <Plus className='bg-indigo-900 text-white p-2 rounded-2xl cursor-pointer' size={40} />
                    </div>
                </div>
            </section>
        </main>
    )
}
export default RightSideMidle
