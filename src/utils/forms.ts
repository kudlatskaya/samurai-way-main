import {FocusEvent} from "react";

export const toggleFocus = (e: FocusEvent<HTMLDivElement>, color: string) => {
    e.currentTarget.style.borderColor = color
}