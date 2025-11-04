"use client"
import React, {useState} from "react";

function ListCheckbox() {
    const [checked, setChecked] = useState(false);

    const CheckBoxChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setChecked(event.target.checked);
    }

    return <div>
        <label className="text-black">
            <input type="checkbox" checked={checked} onChange={CheckBoxChange}/>

            CheckBox
        </label>
    </div>
}

export default ListCheckbox;