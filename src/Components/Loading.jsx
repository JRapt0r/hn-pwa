import React from "react";

function Loading({ size = "100px" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="min-w-full" xlink="http://www.w3.org/1999/xlink"
      width={size} height={size} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" >
      <g transform="translate(20 50)">
        <circle cx={0} cy={0} r={6} fill="rgba(255,102,0,1)">
          <animateTransform attributeName="transform" type="scale" begin="-0.375s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" />
        </circle>
      </g>
      <g transform="translate(40 50)">
        <circle cx={0} cy={0} r={6} fill="rgba(255,102,0,0.75)">
          <animateTransform attributeName="transform" type="scale" begin="-0.25s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" />
        </circle>
      </g>
      <g transform="translate(60 50)">
        <circle cx={0} cy={0} r={6} fill="rgba(255,102,0,0.50)">
          <animateTransform attributeName="transform" type="scale" begin="-0.125s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" />
        </circle>
      </g>
      <g transform="translate(80 50)">
        <circle cx={0} cy={0} r={6} fill="rgba(255,102,0,0.25)">
          <animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

export default Loading;