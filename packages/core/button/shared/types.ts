import React, { MouseEventHandler } from "react";

export interface ButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode | string;
}

export interface IconButtonProps extends ButtonProps {
    icon: string;
    alt: string;
}
