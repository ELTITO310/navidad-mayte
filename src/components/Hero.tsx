import SectionComponent from "./ui/SectionComponent";
import Sun from "./ui/Sun";
import { HourDate } from "../lib/utils";
import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { useTimeStore } from "../store/timeStore";
import Grass from "./ui/Waves/Grass";
import Clouds from "./ui/Clouds";
import Tree from "./ui/Tree";
import Ground from "./ui/Waves/Ground";
import { messagesHero } from "../lib/data";

const SunComponent = motion.create(Sun);
const moments = [
  { id: "manana", range: (h: number) => h >= 6 && h < 12 },
  { id: "tarde", range: (h: number) => h >= 12 && h < 18 },
  { id: "atardecer", range: (h: number) => h >= 18 && h < 20 },
  { id: "noche", range: (h: number) => h < 6 || h >= 20 },
];

const grassColor: { [key: string]: string } = {
    manana: "var(--color-green-500)",
    atardecer: "var(--color-green-700)",
    tarde: "var(--color-green-600)",
    noche: "var(--color-green-900)",
}

const Hero = () => {
  const time = useTimeStore((s) => s.time);
  const [date, setDate] = useState<{ hour: number; minute: number }>(HourDate(time));
  const [moment, setMoment] = useState<string>("manana");
  const sectionRef = useRef<HTMLElement | null>(null);
  const maxHeight = ((sectionRef.current?.clientHeight || 0) / 10) * 7;
  const message = messagesHero.find((m) => m.range(time))

  const HourToPercentage = (
    hour: number,
    minutes: number,
    divide: number = 12
  ) => {
    const minutesFraction = minutes / 60;
    hour += minutesFraction;
    return (hour / divide) * 100;
  };
  const calculateSunPosition = ({
    hour,
    minute,
  }: {
    hour: number;
    minute: number;
  }) => {
    if (hour <= 11) {
      return (HourToPercentage(hour, minute) * maxHeight) / 100;
    } else {
      return (
        maxHeight - (HourToPercentage(hour - 12, minute) * maxHeight) / 100
      );
    }
  };

  useEffect(() => {
    setDate(HourDate(time));
  }, [time]);

  useEffect(() => {
    setMoment(moments.find((m) => m.range(date.hour))?.id || "manana");
  }, [date.hour]);

  return (
    <>
    <SectionComponent
      className={`relative transition-all duration-700 max-h-screen overflow-hidden`}
      ref={sectionRef}
      style={{
        backgroundImage: `var(--sky-${moment})`,
      }}
    >
      <SunComponent
        moment={moment === "noche" ? "night" : "day"}
        initial={{ y: 0 }}
        animate={{ y: -calculateSunPosition(date) }}
        style={{ x: "-50%", left: "50%" }}
        transition={{ duration: 0.8, type: "spring" }}
      />
      <Clouds />
      <h1 className={`font-christmas font-black text-5xl z-20 ${moment === 'noche' ? 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'text-yellow-900 drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]'}`}>
        {message?.msg}
      </h1>
      <div className="absolute bottom-0 left-0 z-20 h-fit w-full">
        <Tree moment={moment === "noche" ? "night" : "day"} />
        <Grass fill={grassColor[moment]} />
      </div>
    </SectionComponent>
    <Ground className="w-full h-fit z-10 bg-amber-950 -mt-2" fill={grassColor[moment]}/>
    </>
  );
};

export default Hero;
