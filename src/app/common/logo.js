import React from 'react'
import Image from "next/image";
 
const BB_Logo = () => 
{
    return (
        <>
            <div id="logo" className="flex mx-4 absolute">
				<a href="/">
					<Image
						src="/logo/logo.png"
						width={100}
						height={120}
						alt="Blood Buddy Logo"
					/>
				</a>
			</div>
        </>
    );
}
 
export default BB_Logo;
