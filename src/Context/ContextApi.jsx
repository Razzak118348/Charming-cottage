import { createContext } from "react";
import { createBrowserRouter } from "react-router-dom";

export const AuthContext = createContext(null)

const ContextApi = ({children}) => {

    const authInfo = {name:'raju'}
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default ContextApi;