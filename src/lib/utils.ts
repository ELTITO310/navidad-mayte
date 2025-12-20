import clsx from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tw-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

export function formatDate(date: Date): string {
    return date.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export function HourDate(date: Date): { hour: number; minute: number } {
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
    };
}