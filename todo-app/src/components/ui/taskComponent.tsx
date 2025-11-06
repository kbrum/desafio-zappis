"use client"
import React, {useState} from "react";
import {Checkbox} from "@/components/ui/checkbox";

interface taskProps {
    id: number;
    title: string;
    initialDone: boolean;
    onToggle: (id: number, isChecked: boolean) => void;
    onUpdateTitle: (id: number, newTitle: string) => void;
    onDelete: (id: number) => void;
}

// checkbox das tasks
export default function TaskComponent({id, title, initialDone, onToggle, onUpdateTitle, onDelete}: taskProps) {

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

    // controla os estados do titulo, entre input e span
    const taskDisplay = isEditing ? (
        <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            className="text-lg text-black border-b border-black focus:outline-none w-full"
            autoFocus
        />
    ) : (
        <span className={`text-lg cursor-pointer ${checked ? 'line-through text-gray-500' : 'text-black'}`}
              onDoubleClick={handleDoubleClick}>
            {title}
        </span>
    );

    return (
        <div className="flex justify-between items-center py-2 px-1 border-b border-gray-200 w-full">

            <label className="flex cursor-pointer space-x-3 items-center text-md flex-grow pr-4">
                <Checkbox/>
                {taskDisplay}
            </label>

            {!isEditing && (
                <TaskDeleteButton onClick={handleDelete}/>
            )}

        </div>
    )
}

