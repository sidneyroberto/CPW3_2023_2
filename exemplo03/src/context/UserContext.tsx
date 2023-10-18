import { ReactNode, createContext, useState } from 'react'

type UserType = {
  token: string
  setToken: (newState: string) => void
}

const initialValue: UserType = {
  token: '',
  setToken: () => { }
}

export const UserContext = createContext(initialValue)

type UserContextProps = {
  children: ReactNode
}

export const UserContextProvider =
  ({ children }: UserContextProps) => {
    const [token, setToken] = useState(initialValue.token)

    return <UserContext.Provider value={{ token, setToken }}>{children}</UserContext.Provider>
  }