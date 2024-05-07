import React from 'react'
 
const BackgroundVideo = () => 
{
    return (
        <>
            <video autoPlay muted loop className="w-[100dvw] h-[100%] fixed object-cover -z-100 overflow-x-hidden">
				<source src="/background/bg.mp4" type="video/mp4" />
			</video>
        </>
    );
}

const Hero_Content_1 = () =>
{
    return (
        <section className='relative w-full mt-[10%]'>
            <div className='text-black z-3 flex gap-2 font-bold font-serif italic flex flex-col p-4 w-[40%]'>
                <div className='flex align-center justify-center flex-col ml-8'>
                    <h1 className='text-6xl px-12 ml-16'> Start </h1>
                    <h1 className='text-6xl px-12'>Saving Lives </h1>
                </div>
                <p className='text-lg font-normal px-12'>Become a donor or request for blood And help save lives</p>
                <div className=' ml-40 mt-4'>
                    <a href='/register'>
                        <button className='font-normal text-4xl p-4 border 
                        border-black rounded-xl duration-500 hover:bg-red-500 active:bg-red-900 
                        hover:text-neutral-50 drop-shadow-md hover:drop-shadow-xl
                        '>
                            Register
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export {
    BackgroundVideo, 
    Hero_Content_1
};
