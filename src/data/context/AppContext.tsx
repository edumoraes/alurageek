import { createContext } from "react";

const AppContext = createContext({})

export function AppProvider(props: any) {
    return (
        <AppContext.Provider value={{
            nome: 'teste context api'
        }}>
            {props.children}

        </AppContext.Provider>
    )
}
export default AppContext