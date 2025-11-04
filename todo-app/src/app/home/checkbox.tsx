"use client"
import React, {useState} from "react";

interface CheckboxProps {
    className?: string;
}

function ListCheckbox({className = ""}: CheckboxProps) {
    const [checked, setChecked] = useState(false);

    const CheckBoxChange: React.ChangeEventHandler<HTMLInputElement> = (event) => setChecked(event.target.checked);

    const baseClass = "text-black"

    return <div>
        <label className={`${baseClass} ${className}`}>
            <input type="checkbox" checked={checked} onChange={CheckBoxChange}/>
            CheckBox
        </label>
    </div>
}

export default ListCheckbox;