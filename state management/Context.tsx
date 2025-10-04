"use client"
import { useContext, createContext, ReactNode, useState } from "react";



interface User {
    id: number,
    name:string,
    email: string
}



interface AuthContextType{
    user: User | null,
    login: (userData : User) => void,
    logout: () => void
    
}

// 1. create context.....jahn data store hoga
 export const AuthContext = createContext<AuthContextType | undefined>(undefined)

// 2. create provider component .. ye component data dy ga taa k context me store ho sky

export const AuthProvider =({children} : {children : ReactNode}) => {
    const [user,setUser] = useState<User | null>(null);

    const login = (userData : User) => {
        setUser(userData)
    }

    const logout = () => {
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}


//3. Custom hook...useContext/consumer



export const useAuth = (): AuthContextType  => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("useAuth must be used within AuthProvider")
    }
    return context
}


