/* eslint-disable @typescript-eslint/no-explicit-any */
// to globally state management

import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapidapi";

type authContextValueType = {
    loading?: boolean,
    data?: any[],
    value?: string,
    setValue?: React.Dispatch<React.SetStateAction<string>>
}

let authContextDefaultValue:authContextValueType = {}
export const AuthContext = createContext(authContextDefaultValue)

export default function AuthProvider({ children }: any) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [value, setValue] = useState("New")

    useEffect(() => {
        fetchAllData(value)
    }, [value])

    const fetchAllData = (query: any) => {
        setLoading(false)
        fetchData(`search/?q=${query}`)
            .then(({contents}) => {
                setData(contents)
                setLoading(true)
            })
    }

    return (
        <AuthContext.Provider value={{ loading, data, value, setValue }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)