import { useAtom } from "jotai";
import { addedTaskAtom, currentSecondsAtom } from "../atoms";
import VerticalBanner from "./VerticalBanner";

function HandleExportEnd() {
  const [addedTask] = useAtom(addedTaskAtom);
  const [currentSeconds] = useAtom(currentSecondsAtom);

  const isEnded =
    addedTask && currentSeconds >= addedTask.startTime + addedTask.duration;

  return isEnded ? (
    <div className="absolute inset-0 bg-transparent pointer-events-none flex justify-center items-center">
      <div className="bg-black pointer-events-auto border border-neutral-800 text-neutral-100 px-4 py-4 w-[500px] relative">
        <div className="text-center">Task "{addedTask.label}" has ended.</div>
        <VerticalBanner />
      </div>
    </div>
  ) : null;
}

export default HandleExportEnd;
