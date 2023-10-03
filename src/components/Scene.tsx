import { useRef, useEffect, useState, memo } from "react";
import { LeftOutlined, RightOutlined, UpOutlined } from "@ant-design/icons";
import { debounce } from 'lodash'
import { useAppContext } from "../context/AppContext";

export const Scene = memo(() => {
  // Ref
  const viewportRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const velecity = 220;

  const { currentScene: scene, changeScene } = useAppContext();

  const [viewWidth, setViewWidth] = useState(document.body.clientWidth)

  const scrollImage = (direction: "left" | "right") => {
    if (viewportRef.current) {
      viewportRef.current.scrollLeft =
        (viewportRef.current.scrollLeft || 0) +
        (direction === "left" ? -1 : 1) * velecity;
    }
  };

  const debouncedSetViewWidth = useRef(
    debounce((imageWidth: number) => setViewWidth(imageWidth), 400)
  )

  // Effects
  useEffect(() => {
    window.addEventListener("resize", () =>
      debouncedSetViewWidth.current?.(
        imageRef.current?.width as number
      )
    );

    return () =>
      window.removeEventListener("resize", () =>
        console.log("unbind resize event")
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="scene">
      {/* {scene?.id} */}
      <section className="viewport" ref={viewportRef} title="scroller">
        <img src={scene?.backgroundImage} alt={scene?.backgroundImage || "location"} ref={imageRef}
          onLoad={() => setViewWidth(imageRef.current?.width as number)} />

        {scene?.hitzones &&
          scene.hitzones.map((hitzone, i) => {
            return (
              <button
                key={i}
                title="move"
                className="change-direction"
                style={{
                  left: ((hitzone?.x as number) * viewWidth) + "px",
                  top: ((hitzone?.y as number) * document.body.clientHeight) + "px"
                }}
                onClick={() => changeScene(hitzone.id)}
              >
                <UpOutlined />
              </button>
            );
          })}
      </section>
      <button
        className="scroll-btn btn-left"
        title="move-left"
        // disabled={scrollLeft === 0}
        onClick={() => scrollImage("left")}
      >
        <LeftOutlined />
      </button>
      <button
        className="scroll-btn btn-right"
        title="move-right"
        // disabled={scrollLeft === boundingRect.width}
        onClick={() => scrollImage("right")}
      >
        <RightOutlined />
      </button>
    </div>
  );
});
