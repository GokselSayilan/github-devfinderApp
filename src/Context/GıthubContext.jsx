import { createContext, useContext, useState } from 'react'

const GithubContext = createContext()

export const useGithub = () => useContext(GithubContext)

export const GithubProvider = ({ children }) => {
    const [isResult, setIsResult] = useState(false)
    const [searchValue, setSearchValue] = useState('octocat')

    return (
        <GithubContext.Provider value={{ isResult, setIsResult, searchValue, setSearchValue }}>
            {children}
        </GithubContext.Provider>
    )
}