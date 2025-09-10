import React from "react";

function Button({ startIcon, text, endIcon, customStyles }) {
  return (
    <>
      <button className={`flex items-center rounded-lg px-3 py-1 text-white gap-2 ${customStyles}`}>
        {startIcon} {text} {endIcon}
      </button>
    </>
  );
}

export default Button;
