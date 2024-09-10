import { useLayoutEffect, useState } from "react";

const useWindowResize = () => {
    const [windowResize, setWindowResize] = useState({
        width: 0,
        height: 0
    });

    function handleResize() {
        setWindowResize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    useLayoutEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.addEventListener("resize", handleResize);
        }
    }, []);

    return windowResize;
}

export default useWindowResize;
