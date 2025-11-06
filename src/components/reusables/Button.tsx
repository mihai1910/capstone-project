import React from "react"

interface ButtonProps{
    children?: React.ReactNode;
    className?:string;
}

export const Button: React.FC<ButtonProps> = ({children, className = ''}) => {
    return <button className={`primarybutton ${className}`}>{children}</button>
}