import React from "react";

type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return (
    <>
      <button className="border bg-blue-500 px-3 py-1 rounded-md m-2 hover:bg-blue-400/80">
        {text}
      </button>
    </>
  );
};

export default Button;
