import { ThemeType } from "../types";

export const secondsInHour = 3600;
export const secondsInQuarterHour = secondsInHour / 4;
export const secondsInDay = secondsInHour * 24;

export const defaultSkinUrl = "https://timer-skins.constraint.systems";
export const standardThemes: ThemeType[] = [
  {
    name: "dev",
    url: defaultSkinUrl + "/#freehand",
  },
  {
    name: "dev",
    url: "http://localhost:5173/#dev",
  },
  {
    name: "API",
    url: defaultSkinUrl + "/#example-api",
  },
  {
    name: "Progress",
    url: defaultSkinUrl + "/#progress",
  },
  {
    name: "Circle",
    url: defaultSkinUrl + "/#circle",
  },
  {
    name: "Arc",
    url: defaultSkinUrl + "/#arc",
  },
];
