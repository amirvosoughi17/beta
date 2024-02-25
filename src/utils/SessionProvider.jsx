"use client"
import {SessionProvider} from 'next-auth/react';

export function authProvider ({children}) {
    return <SessionProvider>
        {children}
    </SessionProvider>
}

export default authProvider;