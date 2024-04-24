import "./style.css";
import { getVideo, drawVideo } from "./src/camera";

(async function run() {
  const video = await getVideo();
  const canvas = document.querySelector("canvas");
  const btn = document.getElementById("selfie-btn");

  btn.addEventListener("click", () => {
    drawVideo(video, canvas);
  });
})();
