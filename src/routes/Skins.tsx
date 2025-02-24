import { useAtom } from "jotai";
import { devSkinEnabledAtom, devSkinPortAtom, themeIdsAtom, themeMapAtom } from "../atoms";
import Header from "../components/Header";
import { Link } from "react-router";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function Skins() {
  const [themeIds, setThemeIds] = useAtom(themeIdsAtom);
  const [themeMap, setThemeMap] = useAtom(themeMapAtom);
  const [devSkinPort, setDevSkinPort] = useAtom(devSkinPortAtom);
  const [devSkinEnabled, setDevSkinEnabled] = useAtom(devSkinEnabledAtom);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");


  return (
    <div className="w-full">
      <Header />
      <div className="flex flex-col px-3 gap-3 py-2 max-w-[68ch]">
        <div className="flex flex-col gap-2">
          <div className="">
            Every skin is a web app rendered in an iframe. The parent timer app
            sends it a message every second with the current task data. The web
            app can render that data anyway it wants.
          </div>
          <div className="">
            You can add your own skin by creating a web app that listens for the
            message and renders the data. The web app can be hosted anywhere,
            even on your local machine.
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold">Add your own</div>
          <div className="flex-col">
            <div className="flex gap-2 items-center">
              <input
                className="w-48 px-3 py-2 -ml-3 focus:outline-none"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                className="w-96 px-3 py-2 focus:outline-none"
                placeholder="URL"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
              />
              <button
                className="rounded-full px-5 bg-neutral-900 hover:bg-neutral-800 text-neutral-400 py-2"
                onClick={() => {
                  const id = uuid();
                  setThemeMap((prev) => {
                    return {
                      ...prev,
                      [id]: {
                        id,
                        name,
                        url,
                      },
                    };
                  });
                  setThemeIds((prev) => {
                    return [id, ...prev];
                  });
                  setName("");
                  setUrl("");
                }}
              >
                add
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold">Local dev</div>
          <div className="text-sm text-neutral-400">
            Checking this adds a timer entry for localhost. You can use this for
            convenient live local dev of your own timer.
          </div>
          <div className="flex-col">
            <div className="flex gap-2 items-center">
              <label className="flex gap-2 w-48 select-none">
                <input
                  type="checkbox"
                  checked={devSkinEnabled}
                  onChange={() => {
                    setDevSkinEnabled(!devSkinEnabled);
                  }}
                />
                <div>Enable</div>
              </label>
              <div>http://localhost</div>
              <input
                className="w-96 px-3 py-2 focus:outline-none"
                placeholder="Port (and path if you want)"
                value={devSkinPort}
                onChange={(e) => {
                  setDevSkinPort(e.target.value);
                }}
              />
              <button className="rounded-full px-5 bg-neutral-900 hover:bg-neutral-800 text-neutral-400 py-2">
                save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="font-bold px-3 py-1">{themeIds.length} skins</div>
        {themeIds.map((id) => {
          const theme = themeMap[id];
          return (
            <Link
              key={theme.url}
              to={`/skin/${encodeURIComponent(theme.url)}`}
              className="flex py-1 px-3 overflow-x-auto hover:bg-neutral-900"
            >
              <div className="w-48">{theme.name}</div>
              <div className="text-neutral-400 w-[600px]">{theme.url}</div>
              <div className="text-neutral-600 w-48">standard</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Skins;
