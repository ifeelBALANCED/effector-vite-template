import {createEvent, createStore} from "effector";
import {MouseEventTypes} from "../../types";

export const increment = createEvent<MouseEventTypes>()
export const decrement = createEvent<MouseEventTypes>()
export const $counter = createStore<number>(0)
    .on(increment, count => count + 1)
    .on(decrement, count => count - 1)
