import { BarProgress, Point, BarProgressProvider } from "./ui/BarProgress";
import SectionComponent from "./ui/SectionComponent";
import { FaTree } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { PiConfettiFill } from "react-icons/pi";
import { useTimeStore } from "../store/timeStore";
import Stone from "./ui/Waves/Stone";

const TimeLine = () => {
    const time = useTimeStore((s) => s.time);
    const nowMs = time.getTime();

    const nextYear = new Date(2026, 0, 1).getTime();
    const startDate = new Date(2025, 11, 21).getTime();

    const timepassed = nowMs - startDate;
    const totalTime = nextYear - startDate;

    const christmas = new Date(2025, 11, 25).getTime() - startDate;
    const birthdayCuya = new Date(2025, 11, 28).getTime() - startDate;

    return (
        <>
        <SectionComponent className="flex-col gap-10 md:px-10 px-0 relative bg-amber-950 min-h-auto py-20">
            <h1 className="title text-green-400 drop-shadow-green-500 z-20">Linea del tiempo</h1>
            <div className="sm:container w-3/4 sm:mx-auto">
            <BarProgressProvider initialTotal={totalTime} initialProgress={timepassed}>
                <BarProgress className="w-full py-28 z-20" width={"100%"} height={50}>
                    <Point point={christmas} icon={<FaTree className="fill-green-500 md:size-14 size-10" />} />
                    <Point point={birthdayCuya} icon={<FaBirthdayCake className="fill-rose-400 md:size-14 size-10" />} />
                    <Point point={totalTime} icon={<PiConfettiFill className="fill-yellow-400 md:size-14 size-10" />} />
                </BarProgress>
            </BarProgressProvider>
            </div>
        </SectionComponent>
        <Stone className="w-full bg-[url(/stone_mosaico2.jpg)] bg-repeat pb-5 gap-0" style={{
      backgroundSize: '40%'
    }}  />
        </>
    );
}
 
export default TimeLine;