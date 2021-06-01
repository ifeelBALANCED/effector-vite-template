import React from "react";
import {useStore} from "effector-react";
import {$counter, increment, decrement} from "./model";
import {ClassNameTypes} from "../../types";
import {Button} from "../../components/Button";
import "./Counter.css";

export const Counter = ({className}: ClassNameTypes) => {
    const counter = useStore($counter);
    const counterClasses = className ? `counter ${className}` : `counter`;
    return (
        <div className={counterClasses}>
            <Button onClick={increment}>
                +
            </Button>
            <span className="counter__label">{counter}</span>
            <Button onClick={decrement}>
                -
            </Button>
        </div>
    );
};
