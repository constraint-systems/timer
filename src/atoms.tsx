import { atom } from "jotai";
import { EntryType, ThemeType } from "./types";
import { devSkinId, standardThemes } from "./shared/consts";
import { atomWithStorage } from "jotai/utils";

export const currentSecondsAtom = atom<number>(0);
export const dateNowAtom = atom<Date>(new Date());
export const timezoneOffsetAtom = atom(new Date().getTimezoneOffset() * 60);

export const focusModeAtom = atom(true);

export const entriesAtom = atom<EntryType[]>([]);

const standardThemeMap: Record<string, ThemeType> = {};
for (const theme of standardThemes) {
  standardThemeMap[theme.id] = theme;
}
export const _themeMapAtom = atom<Record<string, ThemeType>>(standardThemeMap);
export const _themeIdsAtom = atom<string[]>(
  standardThemes.map((theme) => theme.id),
);
export const themeMapAtom = atom<Record<string, ThemeType>>(
  (get) => {
    const devSkinEnabled = get(devSkinEnabledAtom);
    if (devSkinEnabled) {
      return {
        [devSkinId]: get(devSkinThemeAtom),
        ...get(_themeMapAtom),
      };
    } else {
      return get(_themeMapAtom);
    }
  },
  // @ts-ignore
  (_, set, newThemeMap) => {
    // @ts-ignore
    return set(_themeMapAtom, newThemeMap);
  },
);
export const themeIdsAtom = atom<string[]>(
  (get) => {
    const devSkinEnabled = get(devSkinEnabledAtom);
    if (devSkinEnabled) {
      return [devSkinId, ...get(_themeIdsAtom)];
    } else {
      return get(_themeIdsAtom);
    }
  },
  // @ts-ignore
  (_, set, newThemeIds) => {
    // @ts-ignore
    return set(_themeIdsAtom, newThemeIds);
  },
);

export const devSkinEnabledAtom = atomWithStorage("dev-skin1", false);

export const devSkinPortAtom = atomWithStorage<string>(
  "dev-skin-port1",
  ":5173",
);
export const devSkinThemeAtom = atom((get) => {
  const portAndPath = get(devSkinPortAtom);
  return {
    id: devSkinId,
    name: "localhost",
    url: `http://localhost${portAndPath}`,
  };
});

export const selectedThemeAtom = atom<ThemeType>(standardThemes[0]);

export const iframeLoadedAtom = atom(false);

export const galleryPerPageAtom = atom(4);
export const galleryCursorAtom = atom(0);

export const addedTaskAtom = atom<EntryType | null>(null);
