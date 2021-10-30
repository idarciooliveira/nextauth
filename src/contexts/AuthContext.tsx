import { createContext, useEffect, useState } from "react";
import { recoverUserInformation, signInRequest } from "../services/auth";
import { parseCookies, setCookie} from 'nookies'
import router from 'next/router';
import { api } from "../services/api";

interface AuthContextType{
    isAuthenticated: boolean,
    user: User | null,
    signIn: (data: SignInData)=> Promise<void>
}

interface SignInData{
    username: string,
    password: string
}

interface User{
    username: string,
    email: string,
    avatar_url: string
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children } ){

    const [user, setUser] = useState<User | null>(null)

    const isAuthenticated = !!user

    useEffect(()=>{
        const {'nextauth.token': token} = parseCookies();

        if(token){
            recoverUserInformation().then(response=> 
                setUser(response.user))
        }

    },[])

    async function signIn({username, password}: SignInData){
        
        const { token, user } = await signInRequest({username, password})

        setCookie(undefined, 'nextauth.token', token,{ 
            maxAge: 60 * 60 * 1 //1 hour
        })

        api.defaults.headers['Authorization'] = `Bearer ${token}`

        setUser(user)

        router.push('/dashboard')
         
    }

    

    return (
        <AuthContext.Provider value={{user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}