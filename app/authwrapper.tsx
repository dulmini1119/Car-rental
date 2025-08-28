"use client"

import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";


export default function AuthWrapper({ children } : {children : React.ReactNode}){
    return(
        <>
        <SignedIn>
            {children}
        </SignedIn>

        <SignedOut>
            <div className="flex items-center justify-center h-screen">
                <SignIn routing="hash"/>
            </div>
            
        </SignedOut>
        </>
        
);
}
