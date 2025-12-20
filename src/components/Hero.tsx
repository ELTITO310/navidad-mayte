import SectionComponent from "./SectionComponent";
import Sun from "./Sun";
import { HourDate } from "../lib/utils";
import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import Grass from "./Grass";
import Clouds from "./Clouds";
import Tree from "./Tree";

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
  const [date, setDate] = useState<{ hour: number; minute: number }>(
    HourDate(new Date())
  );
  const [moment, setMoment] = useState<string>("manana");
  const sectionRef = useRef<HTMLElement | null>(null);
  const maxHeight = ((sectionRef.current?.clientHeight || 0) / 10) * 7;

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
    setDate(HourDate(new Date()));
    const interval = setInterval(() => {
      setDate(HourDate(new Date()));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMoment(
      moments.find((m) => m.range(date.hour))?.id || "manana"
    );
    const interval = setInterval(() => {
        setMoment(
            moments.find((m) => m.range(date.hour))?.id || "manana"
        )}, 60000);
    return () => clearInterval(interval);
  })

  console.log("MaxHeight", maxHeight);
  console.log(calculateSunPosition(date), date);

  return (
    <SectionComponent
      className={`relative overflow-hidden transition-all duration-700`}
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
      <h1 className={`font-christmas font-black text-4xl z-20 ${moment === 'noche' ? 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'text-yellow-900 drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]'}`}>
        La Navidad ya se acerca!
      </h1>
      <div className="absolute bottom-0 left-0 z-20 h-fit w-full">
        <Tree moment={moment === "noche" ? "night" : "day"} />
        <Grass fill={grassColor[moment]} />
      </div>
    </SectionComponent>
  );
};

export default Hero;
