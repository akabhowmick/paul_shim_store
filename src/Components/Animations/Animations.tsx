import * as React from "react";
import { useTrail, a } from "@react-spring/web";

import "../../App.css";

const Trail: React.FC<{ open: boolean; children: React.ReactNode }> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height }, index) => (
        <a.div key={index} className="trailsText">
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export const TrailTextAnimations = ({ text }: { text: string }) => {
  const [open, set] = React.useState(true);
  return (
    <div className="trailsText-container" onClick={() => set((state) => !state)}>
      <Trail open={open}>
        {text.split(" ").map((word) => {
          return word;
        })}
      </Trail>
    </div>
  );
};
