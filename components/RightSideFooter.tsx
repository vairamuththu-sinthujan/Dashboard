import React from 'react'
import Image from "next/image";
import ChartPieDonutText from "@/components/ChartPieDonutText";

const RightSideFooter = () => {
    return (
        <main className='flex flex-col gap-4 p-4'>
            <h1 className=' text-2xl text-indigo-900 dark:text-white font-bold'>
                Latest Updates
            </h1>
            {/*<div className='flex items-center gap-4'>*/}
            {/*    <h2 className='bg-indigo-200 text-black p-4 rounded-full border-black dark:border-white border-2'>Brand Addition</h2>*/}
            {/*</div>*/}
            <section className='flex flex-col sm:flex-row justify-between gap-4 sm:items-center'>
                <div className='flex flex-col gap-4 flex-1'>
                    <div className='flex items-center justify-between'>
                        <aside className='flex items-center justify-between gap-2'>
                            <Image src='/starBug.png' alt='starBug' width={50} height={50}/>
                            <div className='text-sm'>
                                <p className='font-bold'>StarBucks</p>
                                <p>F&B Industry</p>
                            </div>
                        </aside>
                        <aside>
                            <p className='text-green-400'>+987.00</p>
                        </aside>
                    </div>
                    <div className='flex items-center justify-between '>
                        <aside className='flex items-center justify-between gap-2'>
                            <Image src='/rade.png' alt='starBug' width={50} height={50}/>
                            <div className='text-sm'>
                                <p className='font-bold'>Trading</p>
                                <p>F&B Industry</p>
                            </div>
                        </aside>
                        <aside>
                            <p className='text-yellow-400'>+390.00</p>
                        </aside>
                    </div>
                    <div className='flex items-center justify-between '>
                        <aside className='flex items-center justify-between gap-2'>
                            <Image src='/insta.png' alt='insta' width={50} height={50} className='w-auto h-auto'/>
                            <div className='text-sm'>
                                <p className='font-bold'>Instagram</p>
                                <p>Tech Business</p>
                            </div>
                        </aside>
                        <aside>
                            <p className='text-red-400'>-615.00</p>
                        </aside>
                    </div>
                </div>
                <div className='flex flex-1'>
                    <ChartPieDonutText/>
                </div>
                <div className=' flex-1 bg-gradient-to-br from-pink-400 to-blue-400 rounded-2xl p-4 flex flex-col justify-between items-center gap-4 text-white'>
                    <p>
                        Great Job, You Saved
                    </p>
                    <h1 className='font-bold text-3xl'>$ 500</h1>
                    <p>Point Earned: 10,000</p>
                </div>
            </section>
        </main>
    )
}
export default RightSideFooter
