import React from "react";

export const Question = (props: any): JSX.Element => {
  return (
    <div className="bg-white shadow rounded-xl">
      <details>
        <summary className="w-full flex justify-between py-3 px-4 cursor-pointer outline-none">
          <div className="flex">
            <h1 className="text-2xl pr-4">{props.day}</h1>
            <h3 className="text-xl">{props.questionTitle}</h3>
          </div>
          <h1 className="text-4xl text-blue">+</h1>
        </summary>
        <p className="pt-1 pb-3 px-4 text-base text-gray-400">
          {props.content}
        </p>
      </details>
    </div>
  );
};
