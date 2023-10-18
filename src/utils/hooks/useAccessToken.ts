import { useEffect, useState } from 'react';

function useAccessToken() {
    const [hasAccessToken, setHasAccessToken] = useState(false);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            setHasAccessToken(true);
        } else {
            setHasAccessToken(false);
        }
    }, []);

    return hasAccessToken;
}

export default useAccessToken;