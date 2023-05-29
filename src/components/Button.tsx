

import *  as React from "react";
import '../index.css';
type ComponentReturnType = React.ReactElement | Array<ComponentReturnType> | string | number
    | boolean | null // Note: undefined is invalid
interface ButtonProps {
    background?: string;
    custom?: string;
    disabled?: boolean;
    children: ComponentReturnType;
    childrenString?: string;
}


const ButtonLarge = ({ background = "primary", custom = '', disabled = false, children = null, childrenString = '' }: ButtonProps) => {
    let className = "";
    switch (background) {
        case "primary":
            className = { custom } + " bg-white-500 border border-gray-500 rounded-lg"
            break;
        case "secondary":
            className = { custom } + " text-white bg-blue-800 border border-gray-600 rounded-lg"
            break;
        case "danger":
            className = { custom } + " bg-red-500 border border-gray-500 rounded-lg"
            break;
        default:
            className = { custom } + " bg-white-500 border border-gray-500 rounded-lg"
    }
    return (<button className={className} disabled={disabled}>{children} {childrenString}</button>)
}
const ButtonSmall = ({ background = "primary", custom = '', disabled = false, children = null, childrenString = '' }: ButtonProps) => {
    let className = "";
    switch (background) {
        case "primary":
            className = { custom } + " bg-white-500 border border-gray-500 rounded hover:bg-blue-500"
            break;
        case "secondary":
            className = { custom } + " text-white bg-blue-500 border border-gray-500 rounded hover:bg-blue-500 "
            break;
        case "danger":
            className = { custom } + " bg-red-500 border border-gray-500 rounded hover:bg-blue-500"
            break;
        default:
            className = { custom } + " bg-white-500 border border-gray-500 rounded hover:bg-blue-500"
    }
    return (<button className={className} disabled={disabled}>{children}{childrenString}</button>)
}
export { ButtonLarge, ButtonSmall };