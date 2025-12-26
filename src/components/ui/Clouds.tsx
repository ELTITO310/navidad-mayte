import {motion} from 'motion/react';

const Clouds = () => {
    return (
        <div className="h-2/4 w-full absolute top-0 left-0">
            <motion.div className="cloud scale-105 opacity-90" initial={{ x: -300, y: "60%" }} animate={{ x: "120vw" }} transition={{ duration: 90, repeat: Infinity, delay: 0 }} />
            <motion.div className="cloud scale-95 opacity-80" initial={{ x: -300, y: "150%"}} animate={{ x: "120vw" }} transition={{ duration: 90, repeat: Infinity, delay: 4 }} />
            <motion.div className="cloud scale-75 opacity-70" initial={{ x: -300, y: "300%" }} animate={{ x: "120vw" }} transition={{ duration: 40, repeat: Infinity, delay: 8 }} />
            <motion.div className="cloud scale-50 opacity-60" initial={{ x: -300, y: "600%"}} animate={{ x: "150vw" }} transition={{ duration: 40, repeat: Infinity, delay: 12 }} />
        </div>
    );
}
 
export default Clouds;