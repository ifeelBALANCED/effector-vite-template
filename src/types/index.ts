import React, {MouseEvent, MouseEventHandler} from "react";

export type  ClassNameTypes = {
    className: string
}

export type MouseEventTypes = MouseEvent<HTMLButtonElement>
export type ButtonTypes = {children: React.ReactNode, onClick: MouseEventHandler<HTMLButtonElement>}
