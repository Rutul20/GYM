import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import App from "./App";
import "./index.css";

// Prevent address bar resize stutter on iOS/Android mobile browsers
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const rootElement: HTMLElement | null = document.getElementById("root");

if (rootElement) {
  const root: ReactDOM.Root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
