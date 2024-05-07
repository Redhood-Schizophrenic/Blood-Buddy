import React from "react";
import Image from "next/image";
const Testimonials = () =>
{
    return (
        <>
            <div className='relative bg-black bg-opacity-75 w-[100%] h-auto pb-16'>
                <div className='flex flex-col text-center'>
                    <div className='font-serif pt-4'>
                        <h1 className='text-white uppercase font-medium text-4xl pt-24'>
                            Testimonials
                        </h1>
                        <h1 className='text-white uppercase font-medium -mt-16 text-4xl pt-24'>
                            See what our users have to say
                        </h1>
                    </div>
                    
                    <div className='flex flex-row w-[80%] gap-16 ml-[10%] mr-[10%] pt-16 italic mt-20'>
                        <div className='p-24 w-[25dvw] h-[50dvh] duration-500 hover:scale-110 flex flex-col items-center'>
                            <Image
                                src="/testimonials/1.PNG"
                                width={70}
                                height={80}
                                alt="Dr.Kabir Khatri"
                                className='-mt-20 rounded-full'
                            />
                            <h1 className='text-red-400 font-normal pt-4 text-lg font-serif'>
                                Dr.Kabir Khatri
                            </h1>
                            <h2 className='text-black font-medium font-sans text-white pt-4 text-sm w-[170%]'>
                                I have been a part of this organization for quite some time and each time I'm amazed by the seamless and efficient system in place.The importance of timely care especially in the recent times is known and having Blood Buddy takes a load off my mind.
                            </h2>
                        </div>

                        <div className='p-24 w-[25dvw] h-[50dvh] duration-500 hover:scale-110 flex flex-col items-center'>
                            <Image
                                src="/testimonials/2.PNG"
                                width={70}
                                height={80}
                                alt="Dr.Kabir Khatri"
                                className='-mt-20 rounded-full'
                            />
                            <h1 className='text-red-400 font-normal pt-4 text-lg font-serif'>
                            Amit Mangal
                            </h1>
                            <h2 className='text-black font-medium font-sans text-white pt-4 text-sm w-[170%]'>
                                I found Blood Buddy at a time that my mother was in urgent need of blood. Blood Buddy arranged the required amount in no time. It saved us a lot of hassle and worry especially in such a trying time.Thank you Blood Buddy! 
                            </h2>
                        </div>

                        <div className='p-24 w-[25dvw] h-[50dvh] duration-500 hover:scale-110 flex flex-col items-center'>
                            <Image
                                src="/testimonials/3.PNG"
                                width={70}
                                height={80}
                                alt="Dr.Kabir Khatri"
                                className='-mt-20 rounded-full'
                            />
                            <h1 className='text-red-400 font-normal pt-4 text-lg font-serif'>
                                Esha Puri 
                            </h1>
                            <h2 className='text-black font-medium font-sans text-white pt-4 text-sm w-[170%]'>
                                Blood Buddy is just awesome! I just donated for the first time and it could not have been easier.Blood Buddy is doing a very important work and I'm happy that I could contribute . It's hygienic,safe and convenient, I recommend it to everyone!    
                            </h2>
                        </div>
                    </div>



                </div>
            </div>
        </>
    );
}

export { Testimonials }