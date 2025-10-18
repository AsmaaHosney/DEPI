import React, { useState, useEffect } from "react";

const CustomColor = ({ c }) => {
  const [color, setColor] = useState("#A753FF"); // الافتراضي

  useEffect(() => {
    if (c) {
      setColor(c);
    }
  }, [c]);

  return (
    <div className="flex items-center gap-2 text-right justify-end text-xs font-medium font-['Avenir_Arabic'] leading-tight">
      <span
        className="w-4 h-4 rounded-full shrink-0"
        style={{ backgroundColor: color }}
      />
      <span className="text-black">{color}</span>
    </div>
  );
};

export default CustomColor;
