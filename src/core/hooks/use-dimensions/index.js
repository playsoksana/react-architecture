import { useEffect, useState } from "react";

const getWidth = () => {
    return (
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    );
};

const getHeight = () => {
    return (
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight
    );
};

const useDimensions = () => {
    const [dimensions, setDimensions] = useState(() => ({
        width: getWidth(),
        height: getHeight(),
    }));

    useEffect(() => {
        let timeoutId = null;

        const onChange = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setDimensions({
                    width: getWidth(),
                    height: getHeight(),
                });
            }, 150);
        };

        window.addEventListener("resize", onChange);
        window.addEventListener("orientationchange", onChange);

        return () => {
            window.removeEventListener("resize", onChange);
            window.removeEventListener("orientationchange", onChange);
        };
    }, []);

    return dimensions;
};

export default useDimensions;
