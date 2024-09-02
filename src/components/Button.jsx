import React from "react";

export default function Button(props) {
  const { text, func } = props;
  return (
    <button
      onClick={func}
      className="px-8 py-4 rounded-md border-[2px] bg-slate-950 borden-blue border-solid blueShadow duration-100"
    >
      <p>{text}</p>
    </button>
  );
}
