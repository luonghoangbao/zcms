import React, { FC } from "react";

interface Button {
    text: string;
}

const Button: FC<Button> = (props) => (
    <button className="btn btn-primary">
        {props.text}
    </button>
);
  
export default Button;