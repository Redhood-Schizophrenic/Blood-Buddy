import React from 'react'
import Link from 'next/link'
import BB_Logo from './logo';

const Navbar = () => 
{
    return (
        
        <header className="w-[100dvw] h-[20dvh] backdrop-blur-sm  fixed flex items-center p-12">
            {/* Logo  */}
            <BB_Logo />

            {/* Navbar */}
            <nav className="flex flex-row gap-4 text-black text-right w-[100dvw] absolute left-[50%] font-serif font-medium">
                
                <Link href='/#about' className='p-6 text-xl hover:[text-shadow:_0_1px_0_rgb(100_0_0_/_110%)] duration-500 hover:text-red-700'>
                    ABOUT US
                </Link>
                <Link href='/#volunteer' className='p-6 text-xl hover:[text-shadow:_0_1px_0_rgb(100_0_0_/_110%)] duration-500 hover:text-red-700'>
                    VOLUNTEER
                </Link>
                <Link href='/donate' className='p-6 text-xl hover:[text-shadow:_0_1px_0_rgb(100_0_0_/_110%)] duration-500 hover:text-red-700'>
                GET HELP
                </Link>
                <Link href='/#help' className='p-6 text-xl hover:[text-shadow:_0_1px_0_rgb(100_0_0_/_110%)] duration-500 hover:text-red-700'>
                    DONATE
                </Link>
            </nav>
        </header>
        
    )
}
 
export default Navbar
