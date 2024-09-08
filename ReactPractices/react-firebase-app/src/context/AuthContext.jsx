import PropsTypes from "prop-types";
import { createContext } from "react";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    
    return (
      <AuthContext.Provider value={{}}>
        {children}
      </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropsTypes.node
}

export default AuthProvider;