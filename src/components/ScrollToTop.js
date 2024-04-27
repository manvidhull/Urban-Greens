import { useEffect } from "react";

const ScrollToTop = (props) => {
    useEffect(() => {
        try {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        } catch (error) {
            console.error("Error scrolling to top:", error);
        }
    }, []);

    return <>{props.children}</>;
};

export default ScrollToTop;

