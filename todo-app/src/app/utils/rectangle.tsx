"use client"
import React from "react";

// tipagem das props recebidas na função Rectangle
interface RectangleProps {
    children?: React.ReactNode;
    classname?: string;
}

// retangulo branco
function Rectangle({children, classname = ""}: RectangleProps) {

    const baseClass = "flex flex-col items-center justify-start h-[500px] w-[350px] rounded-md bg-white"

    return (
        <div className={`${baseClass} ${classname}`}>
            {children}
        </div>
    );
}

export default Rectangle;

