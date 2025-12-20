import { useEffect, useState } from 'react';

type Time = {
    hour: string;
    minute: string;
};

/**
 * useDate hook — returns current hour and minute (zero-padded).
 * Updates every second to stay in sync with system clock.
 */
export default function useDate(): Time {
    const getTime = (): Time => {
        const d = new Date();
        return {
            hour: String(d.getHours()).padStart(2, '0'),
            minute: String(d.getMinutes()).padStart(2, '0'),
        };
    };

    const [time, setTime] = useState<Time>(getTime);

    useEffect(() => {
        const id = setInterval(() => setTime(getTime()), 1000);
        return () => clearInterval(id);
    }, []);

    return time;
}