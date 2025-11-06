"use client"
import React from "react";

// tipagem das props recebidas na função Card
interface RectangleProps {
    children?: React.ReactNode;
}

// retangulo menor
export default function Card({children}: RectangleProps) {

    return (
        <div
            className="relative h-[600px] w-[450px] border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
            <div className="px-6 py-5 text-left h-full">
                {children}
            </div>
        </div>
    );
}

