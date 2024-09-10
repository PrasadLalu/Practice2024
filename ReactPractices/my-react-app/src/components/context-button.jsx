import { useContext } from "react";
import { GlobalContext } from "../context";

const ContextButton = () => {
    const {setTheme} = useContext(GlobalContext);

    return <button onClick={() => setTheme("red")}>Change Theme</button>
}

export default ContextButton;
