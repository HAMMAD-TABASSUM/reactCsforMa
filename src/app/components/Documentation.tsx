import React from "react";

export const Documentation = (props: any): JSX.Element => {
  return (
    <div className="flex gap-x-3 border-b py-2">
      <img src={props.document} alt="" />
      <h3 className="text-base">{props.fileName}</h3>
    </div>
  );
};
