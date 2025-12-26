type SunProps = React.HTMLAttributes<HTMLDivElement> & {
    moment?: 'day' | 'night';   
}

const colorSun = {
    day: 'bg-yellow-400 drop-shadow-[0_0_50px_rgba(255,255,0,0.8)] drop-shadow-yellow-300',
    night: 'bg-slate-400 drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] drop-shadow-slate-300',
}

const Sun = ({moment = 'day', ...props}: SunProps) => {
    return ( <div {...props} className={`bottom-0 w-40 h-40 rounded-full absolute inset-shadow-2xs z-10 ${colorSun[moment]}`}>
    </div> );
}
 
export default Sun;