import { useContext } from "react";
import { GlobalContext } from "../context";

const ContextText = () => {
    const { theme } = useContext(GlobalContext);
    
    return <h3 style={{
        fontSize: theme === "light" ? "50px" : "50px",
        color: theme === "light" ? "blue" : "red",
        border: theme === "light" ? "2px solid red" : "2px solid teal"
    }}>Context Text</h3>
}

export default ContextText;
