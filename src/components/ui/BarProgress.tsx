import React, { type HTMLAttributes, Children, type ReactNode, useEffect } from "react";
import { motion } from 'motion/react';
import { cn } from "../../lib/utils";

import { createContext, useContext, useState } from "react";

interface BarProgressContextProps {
    total: number;
    progress: number;
    height: number | string;
    setTotal: (total: number) => void;
    setProgress: (progress: number) => void;
    setHeight: (height: number | string) => void;
}

const BarProgressContext = createContext<BarProgressContextProps | undefined>(undefined);

const BarProgressProvider = ({ children, initialTotal = 100, initialProgress = 0 }: { children: ReactNode; initialTotal?: number; initialProgress?: number }) => {
    const [height, setHeight] = useState<string | number>(0)
    const [total, setTotal] = useState(initialTotal);
    const [progress, setProgress] = useState(initialProgress);
    return (
        <BarProgressContext.Provider value={{ total, progress, height, setTotal, setProgress, setHeight }}>
            {children}
        </BarProgressContext.Provider>
    );
};

const useBarProgress = () => {
    const context = useContext(BarProgressContext);
    if (!context) {
        throw new Error("useBarProgress must be used within a BarProgressProvider");
    }
    return context;
};

interface BarProgressProps extends HTMLAttributes<HTMLDivElement> {
    width?: number | string;
    height?: number | string;
}

const BarProgress = ({
    width = 100,
    height = 20,
    className,
    children,
    ...props
}: BarProgressProps) => {
    const { progress, total, setHeight } = useBarProgress();

    useEffect(() => {
        setHeight!(height!)
    }, [setHeight, height])

    return (
        <div className={cn("w-full flex flex-col gap-2 py-20", className)} {...props}>
            <div className="w-full bg-gray-200 h-4 dark:bg-gray-700 relative" style={{
                width,
                height
            }}>
                {Children.map(children, (child) => {
                    if (React.isValidElement(child) && typeof child.type !== 'string') {
                        const name = (child.type as { name?: string }).name;
                        if (name === 'Point') {
                            return child;
                        }
                        return null;
                    }
                    return null;
                })}
                <motion.div
                    className="bg-green-400 h-full transition-all duration-500 ease-in-out flex justify-center items-center overflow-hidden"
                    initial={{
                        width: 0
                    }}
                    whileInView={{
                        width: `${(progress * 100) / total}%`
                    }}
                    viewport={{
                        once: true
                    }}
                >
                    <span className="text-md text-gray-600 font-black text-center">{Math.floor((progress * 100) / total)}%</span>
                </motion.div>
            </div>
        </div>
    );
};

interface PointProps {
    icon: ReactNode;
    point: number;
}

const Point = ({ icon, point }: PointProps) => {
    const { total: contextTotal, height, progress } = useBarProgress();
    const usedTotal =  contextTotal;
    const heightBar = typeof height === 'number' ? `${height}px` : height
    return (
        <div className="absolute bottom-0 flex flex-col justify-center items-center gap-1 -translate-x-2/4" style={{
            left: `${(point * 100) / usedTotal}%`,
        }}>
            <span className={`${progress >= point ? 'drop-shadow-[0px_0px_10px_#fff': ''}]`}>
                {icon}
            </span>
            <div className={`w-1 ${progress >= point ? 'bg-white' : 'bg-gray-500'}`} style={{
                height: `calc(${heightBar} + 20px)`
            }} />
        </div>
    );
};
 
export {
    BarProgress,
    Point,
    BarProgressProvider,
    useBarProgress
};