import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
    const [theme, setTheme] = useState("light");
    return <GlobalContext.Provider value={{theme, setTheme}}>{children}</GlobalContext.Provider>
}

GlobalState.propTypes = {
    children: PropTypes.node
}

export default GlobalState;
