import {create} from 'zustand'

interface TimeStore {
    time: Date;
    updateTime: () => void;
}

export const useTimeStore = create<TimeStore>((set) => ({
    time: new Date(),
    updateTime: () => set({ time: new Date() })
}))

const startPreciseTimer = () => {
    const now = new Date()

    const msUntilNextMinute = 60000 - (now.getSeconds() * 1000 + now.getMilliseconds());

    setTimeout(() => {
        useTimeStore.getState().updateTime()
        setInterval(() => {
            useTimeStore.getState().updateTime()
        }, 60000)
    }, msUntilNextMinute)
}

startPreciseTimer()