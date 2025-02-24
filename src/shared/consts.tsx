import { ThemeType } from "../types";
import { v4 as uuid } from "uuid";

export const secondsInHour = 3600;
export const secondsInQuarterHour = secondsInHour / 4;
export const secondsInDay = secondsInHour * 24;

const isDev = true;

export const defaultSkinUrl = isDev
  ? "http://localhost:4112"
  : "https://timer-skins.constraint.systems";
export const standardThemes: ThemeType[] = [
  {
    id: uuid(),
    name: "Freehand",
    url: defaultSkinUrl + "/#freehand",
  },
  {
    id: uuid(),
    name: "Evangelion",
    url: defaultSkinUrl + "/#evangelion",
  },
  {
    id: uuid(),
    name: "API",
    url: defaultSkinUrl + "/#example-api",
  },
  {
    id: uuid(),
    name: "Progress",
    url: defaultSkinUrl + "/#progress",
  },
  {
    id: uuid(),
    name: "Circle",
    url: defaultSkinUrl + "/#circle",
  },
  {
    id: uuid(),
    name: "Arc",
    url: defaultSkinUrl + "/#arc",
  },
];

export const devSkinId = "dev-skin";
