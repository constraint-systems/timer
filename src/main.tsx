import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Gallery from "./routes/Gallery.tsx";
import { HashRouter, Routes, Route } from "react-router";
import { HandleTick } from "./components/HandleTick.tsx";
import Timer from "./routes/Timer.tsx";
import Fullscreen from "./routes/Fullscreen.tsx";
import Skins from "./routes/Skins.tsx";

// Calendar could go back in

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="h-[100dvh] w-full flex overflow-hidden">
      <HandleTick />
      <HashRouter>
        <Routes>
          <Route path="/fullscreen/:encodedURL" element={<Fullscreen />} />
          <Route path="/skin/:encodedURL" element={<Timer />} />
          <Route path="/skins" element={<Skins />} />
          <Route path="/" element={<Gallery />} />
        </Routes>
      </HashRouter>
    </div>
  </StrictMode>,
);
