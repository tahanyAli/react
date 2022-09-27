import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        const onLocationChange = () => {
            //rerender route component
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange)
        };
    }, []);
    return window.location.pathname === path ? children : null;
};

export default Route;