import React, { useEffect } from "react";

const Circle = ({
  size = 130,
  outerStroke = 2, 
  innerStroke = 2, 
  ringGap = 20, 
  label = "PLAY VIDEO", 
  repeat = 3, 
  spinDuration = 5, 
  ringColor = "#ffffff",
  centerDiameter = 20,
 playIconSize = 24,
  playIconColor = "#1f2937",
  textFontSize = 14,
  textLetterSpacing = 0.2,
  textColor = "#ffffff",
  startOffset = "0", 
  reverse = false,
  textRadiusOverride = null,
  onClick = null,
  pauseOnHover = true,
}) => {
  useEffect(() => {
    const styleId = "circle-component-dynamic-style";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        @keyframes circle-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .circle-spin { animation: circle-spin ${spinDuration}s linear infinite; }
        ${pauseOnHover ? ".circle-spin:hover { animation-play-state: paused; }" : ""}
      `;
      document.head.appendChild(style);
    }
  }, [spinDuration, pauseOnHover]);

  const half = size / 2;
  const outerRadius = half - outerStroke / 2;
  const innerRadius = outerRadius - ringGap - innerStroke;
 
  const defaultTextRadius = (outerRadius + innerRadius) / 2;
  const textPathRadius = textRadiusOverride != null ? textRadiusOverride : defaultTextRadius;

  const repeatedText = Array.from({ length: repeat }, () => ` ${label} •`).join("");
  const pathId = reverse ? "circle-text-path-reverse" : "circle-text-path";

  return (
    <div
      style={{ width: size, height: size, cursor: onClick ? "pointer" : "default" }}
      onClick={onClick}
      aria-label={label}
      className="flex items-center justify-center"
    >
      <div className="relative w-full h-full">
       
        <div className="absolute inset-0 flex items-center justify-center circle-spin">
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            aria-hidden="true"
            style={{ background: "transparent" }}
          >
            <defs>
              <path
                id={pathId}
                d={`
                  M ${half},${half}
                  m -${textPathRadius}, 0
                  a ${textPathRadius},${textPathRadius} 0 1,1 ${textPathRadius * 2},0
                  a ${textPathRadius},${textPathRadius} 0 1,1 -${textPathRadius * 2},0
                `}
                transform={reverse ? `scale(-1,1) translate(-${size},0)` : undefined}
              />
            </defs>

            
            <circle
              cx={half}
              cy={half}
              r={outerRadius}
              fill="none"
              stroke={ringColor}
              strokeWidth={outerStroke}
            />

            
            <circle
              cx={half}
              cy={half}
              r={innerRadius}
              fill="none"
              stroke={ringColor}
              strokeWidth={innerStroke}
            />

            <text
              fontSize={textFontSize}
              letterSpacing={textLetterSpacing}
              style={{ fill: textColor, fontFamily: "sans-serif" }}
            >
              <textPath
                href={`#${pathId}`}
                startOffset={startOffset}
                spacing="auto"
              >
                {repeatedText}
              </textPath>
            </text>
          </svg>
        </div>

       
        <div className="absolute inset-0 flex items-center text-white justify-center pointer-events-none">
          <div
            style={{
             
              width: centerDiameter,
              height: centerDiameter,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
            }}
          >
           <svg
  width={playIconSize}
  height={playIconSize}
  viewBox="0 0 24 24"
  fill="none"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M8 5V19L19 12L8 5Z" fill={playIconColor} />
</svg>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Circle;

