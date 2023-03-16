import { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

export default function useLocoScroll(start) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!start) return;

    const scrollEl = document.getElementById("main-scp");
    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
      direction: "horizontal",
    });

    // window.addEventListener("scroll");

    // scroll.on("scroll", (instance) => {
    //   setScrollY(instance.scroll.y);
    // });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, [start]);

  return scrollY;
}
