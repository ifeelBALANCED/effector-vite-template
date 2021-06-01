import React from 'react';
import {ButtonTypes} from "../../types";

export const Button = ({children, onClick}: ButtonTypes) => {
    return (
        <button
            className="counter__button"
            aria-label="Increment value"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

