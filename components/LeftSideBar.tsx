import React from 'react'
import Image from "next/image";
import {ArrowRight, File, LayoutDashboard, Mail, Search, TicketX, Timer, User, Wallet} from "lucide-react";

const LeftSideBar = ({isSm} : {isSm:boolean}) => {
    const menuItems = [
        { icon: LayoutDashboard, label: "Dashboard" },
        { icon: Mail, label: "Email" },
        { icon: File, label: "Projects" },
        { icon: Search, label: "Find" },
        { icon: User, label: "Teams" },
        { icon: Wallet, label: "Payment" },
        { icon: Timer, label: "Upcoming" },
        { icon: TicketX, label: "Done" }
    ];
    return (
        <main className={`
            ${isSm
            ? 'flex flex-col gap-4 py-4 bg-indigo-900 text-white'
            : 'hidden xl:flex flex-col gap-8 py-10 bg-indigo-900 rounded-2xl shadow-2xl text-white'
        } 
            justify-between
        `}>
            <section className='text-center'>
                <h1 className='text-2xl'>Databerry &trade;</h1>
            </section>
            <section className='flex items-center justify-start px-4 py-4 gap-3 '>
                <div className='w-12 h-12 rounded-full flex items-center justify-center'>
                    <Image src='/profile.jpg' alt='profile' width={40} height={40} quality={50} className='w-full h-full rounded-full'/>
                </div>
                <div className='flex-1'>
                    <h2 className=' font-semibold text-sm leading-tight'>
                        DAVE Johnson
                    </h2>
                    <p className='text-green-100 text-xs font-medium'>Founder and CEO</p>
                </div>
            </section>
            <section className='flex-1 flex flex-col'>
                {menuItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div
                            key={index}
                            className='flex-1 flex items-center justify-between gap-2 px-4 py-3  transition-colors cursor-pointer'
                        >
                            <div className='flex items-center gap-3'>
                                <IconComponent size={20} className='' />
                                <p className=' font-medium'>{item.label}</p>
                            </div>
                            <ArrowRight size={16} className='' />
                        </div>
                    );
                })}
            </section>
        </main>
    )
}
export default LeftSideBar
