import React from "react";

interface CounterProps {
  title: string;
  value: string;
}

export const Counter = (props: CounterProps) => {
  return (
    <div className="counter">
      <span>{props.title}</span>
      <hr />
      <span className="counter-value">{props.value}</span>
    </div>
  );
};
