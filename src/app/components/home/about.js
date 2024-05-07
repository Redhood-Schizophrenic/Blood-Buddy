import React from 'react'
import Image from "next/image";


const About = () =>
{
    return (
        <>
            <div className='relative bg-slate-200 w-[100%] h-auto pb-16'>

                <div className='flex flex-col text-center'>
                    <div className='font-serif pt-24'>
                        <h1 className='text-black uppercase font-bold text-4xl pt-24'>What is this all about ?</h1>
                    </div>
                    <div className='font-sans'>
                        <h2 className='text-black font-normal text-gray-500 pt-4 text-xl'>
                            We solve the problem of blood emergencies by connecting
                        </h2>
                        <h2 className='text-black font-normal text-gray-500 pt-4 text-xl -mt-6'>
                            blood donors directly with people in blood need.
                        </h2>
                    </div>
                </div>

                <div className='flex flex-row w-[80%] gap-16 ml-[10%] mr-[10%] pt-16'>
                    <div className='p-24 w-[25dvw] h-[50dvh] shadow-2xl duration-500 hover:scale-110 flex flex-col'>
                        <Image
                            src="/about/drop.png"
                            width={100}
                            height={120}
                            alt="Blood Drop"
                            className='-mt-20'
                        />
                        <h1 className='text-black uppercase font-normal pt-4 text-lg font-serif'>
                            What we do?
                        </h1>
                        <h2 className='text-black font-medium font-sans text-gray-500 pt-4 text-sm -ml-[30%] w-[170%]'>
                            We connect blood donors with recipients, without any intermediary such as blood banks, for an efficient and seamless process.
                        </h2>
                    </div>

                    <div className='p-24 w-[25dvw] h-[50dvh] shadow-2xl duration-500 hover:scale-110 flex flex-col'>
                        <Image
                            src="/about/innovation.png"
                            width={100}
                            height={120}
                            alt="Innovation"
                            className='-mt-20'
                        />
                        <h1 className='text-black uppercase font-normal pt-4 text-lg font-serif'>
                            Innovative
                        </h1>
                        <h2 className='text-black font-normal font-sans text-gray-500 pt-4 text-sm -ml-[30%] w-[170%]'>
                        Blood Buddy is an innovative approach to address global health.We provide immediate access to blood donors.
                        </h2>
                    </div>

                    <div className='p-24 w-[25dvw] h-[50dvh] shadow-2xl duration-500 hover:scale-110 flex flex-col'>
                        <Image
                            src="/about/network.png"
                            width={100}
                            height={120}
                            alt="Network"
                            className='-mt-20'
                        />
                        <h1 className='text-black uppercase font-normal pt-4 text-lg font-serif'>
                            Network
                        </h1>
                        <h2 className='text-black font-normal font-sans text-gray-500 pt-4 text-sm -ml-[30%] w-[170%]'>
                            Blood Buddy is one of several community organizations working together as a network that responds to emergencies in an efficient manner.
                        </h2>
                    </div>

                </div>

                <div className='flex flex-row w-[80%] gap-16 ml-[10%] pt-16'>
                    <div className='p-24 w-[25dvw] h-[50dvh] shadow-2xl duration-500 hover:scale-110 flex flex-col'>
                        <Image
                            src="/about/noti.png"
                            width={100}
                            height={120}
                            alt="Notification"
                            className='-mt-20'
                        />
                        <h1 className='text-black uppercase font-normal pt-4 text-lg font-serif'>
                            Get notified
                        </h1>
                        <h2 className='text-black font-normal font-sans text-gray-500 pt-4 text-sm -ml-[30%] w-[170%]'>
                            Blood Buddy Connect works with network partners to connect blood donors and recipients through an automated SMS service and a mobile app.    
                        </h2>
                    </div>

                    <div className='p-24 w-[25dvw] h-[50dvh] shadow-2xl duration-500 hover:scale-110 flex flex-col'>
                        <Image
                            src="/about/cost.png"
                            width={100}
                            height={120}
                            alt="Cost"
                            className='-mt-20'
                        />
                        <h1 className='text-black uppercase font-normal pt-4 text-lg font-serif'>
                            Totally Free
                        </h1>
                        <h2 className='text-black font-normal font-sans text-gray-500 pt-4 text-sm -ml-[30%] w-[170%]'>
                            Blood Buddy's ultimate goal is to provide an easy -to-use, easy-to-access, fast, efficient, and reliable way to get life-saving blood, totally Free of cost.    
                        </h2>
                    </div>

                    <div className='p-24 w-[25dvw] h-[50dvh] shadow-2xl duration-500 hover:scale-110 flex flex-col'>
                        <Image
                            src="/about/save.png"
                            width={100}
                            height={120}
                            alt="Save"
                            className='-mt-20'
                        />
                        <h1 className='text-black uppercase font-normal pt-4 text-lg font-serif'>
                            Save Life
                        </h1>
                        <h2 className='text-black font-normal font-sans text-gray-500 pt-4 text-sm -ml-[30%] w-[170%]'>
                            We are a non profit foundation and our main objective is to make sure that everything is done to protect vulnerable persons.Help us by making a gift! 
                        </h2>
                    </div>

                </div>

                <div className='flex flex-col text-center'>
                    <div className='font-serif pt-24'>
                        <h1 className='text-black uppercase font-bold text-4xl pt-24'>
                            Our super heroes 
                        </h1>
                    </div>
                    <div className='font-sans'>
                        <h2 className='text-black font-normal text-gray-500 pt-4 text-xl'>
                            We depend on volunteers! Volunteers make up 96% of our total
                        </h2>
                        <h2 className='text-black font-normal text-gray-500 pt-4 text-xl -mt-6'>
                            workforce and carry on our humanitarian work. Blood donation is healthy,
                        </h2>
                        <h2 className='text-black font-normal text-gray-500 pt-4 text-xl -mt-6'>
                            our volunteers are available 24/7 to help and donate blood. Blood banks store blood
                        </h2>
                        <h2 className='text-black font-normal text-gray-500 pt-4 text-xl -mt-6'>
                        bags but our volunteers are there with you in an emergency for a blood transfusion real time.
                        </h2>
                    </div>
                </div>

            </div>
        </>
    );
}

export {

    About
};
