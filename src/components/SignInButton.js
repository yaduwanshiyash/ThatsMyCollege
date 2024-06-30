import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const SignInButton = () => {
    const router = useRouter();
    const { data: session } = useSession(); 
    const handleLogin = async () => {
        if (!session) {
            await signIn('google');
        }
        router.push('/profile');
    }

    return (
        <>
          <div className='bg-blue-100 p-10 rounded-lg space-y-14 shadow-md'>
            
            <div className=' h-36 w-full flex flex-col justify-center items-center'>
            <Image src="/logo/tmc_lightblue.png" className="" width={120} height={120} priority={true} alt="TMC" /> 
            <h2 className="self-center text-2xl text-blue-600 -mt-5 font-semibold whitespace-nowrap">ThatsMyCollege</h2>
             </div> 
             <button
                 onClick={handleLogin}
                 className="flex items-center gap-4 shadow-xl rounded pl-3 bg-white"
             >
                 <FcGoogle className='w-8 h-8' />
                 <span className="bg-blue-500 text-white px-4 py-3 rounded-r">
                     Log In with Google
                 </span>
             </button>
         </div>
        </>
    )
}

export default SignInButton;
