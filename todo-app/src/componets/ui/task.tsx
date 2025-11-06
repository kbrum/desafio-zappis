"use client"
import classNames from "classnames";
import React, {useState} from "react";

interface taskProps {
    id: number;
    title: string;
    initialDone: boolean;
    onToggle: (id: number, isChecked: boolean) => void;
    onUpdateTitle: (id: number, newTitle: string) => void;
    onDelete: (id: number) => void;
}

// checkbox das tasks
export default function Task({id, title, initialDone, onToggle, onUpdateTitle, onDelete}: taskProps) {

    // controla o estado do checkbox para ser usado no visual da linha riscada
    const [checked, setChecked] = useState(initialDone);

    // controla se esta em modo de esdição ou não
    const [isEditing, setIsEditing] = useState(false);

    // armazena o texto que esta sendo digitado antes de ser salvo
    const [taskTitle, setTaskTitle] = useState(title);

    // atualiza o estado visual da box
    const CheckBoxChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const isChecked = event.target.checked;
        setChecked(isChecked);
        onToggle(id, isChecked);
    };

    // chama o metodo que deleta a task
    const handleDelete = () => {
        onDelete(id);
    };

    // gatilho de ativação da edição
    const handleDoubleClick = () => {
        setIsEditing(true);
        setTaskTitle(title);
    };

    // salva o novo titulo se ele existir e for diferente do antigo
    const handleSave = () => {
        const trimmedTitle = taskTitle.trim();

        if (trimmedTitle && trimmedTitle !== title) {
            onUpdateTitle(id, trimmedTitle);
        } else {
            setTaskTitle(title);
        }

        setIsEditing(false);
    };

    // atalhos de teclado
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSave();
        }
        if (event.key === 'Escape') {
            setTaskTitle(title);
            setIsEditing(false);
        }
    };

    return (
        <div className="absolute top-10 left-10 ">
            <label className="flex cursor-pointer space-x-3 text-black text-md">
                <input
                    className={classNames(
                        "appearance-none outline-none block relative cursor-pointer w-5 h-5 before:rounded-sm before:block before:absolute before:content-[''] before:bg-[#FFC29F] before:w-5 before:h-5 before:border-black before:border-2 before:hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]  after:block after:content-[''] after:absolute after:left-1.5 after:top-0.5 after:w-2 after:h-3 after:border-black after:border-r-2 after:border-b-2 after:origin-center after:rotate-45",
                        {"after:opacity-100": checked},
                        {"after:opacity-0": !checked}
                    )}
                    checked={checked}
                    onChange={CheckBoxChange}
                    type="checkbox"
                />
                <span className="text-lg">task</span>
            </label>
        </div>
    )
}

