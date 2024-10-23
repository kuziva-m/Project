import React, { ReactNode } from "react";

interface Props {
  button?: string; // Optional prop for button
  children: ReactNode; // This will be the content inside the card
  title: string; // Title for the card
}

const Card = ({ children, title }: Props) => {
  return (
    <div className="card w-75 mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="card-text">{children}</div>
      </div>
    </div>
  );
};

export default Card;
