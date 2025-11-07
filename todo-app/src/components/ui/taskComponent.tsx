"use client"
import React, {useState} from "react";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import {Trash2} from "lucide-react";

interface taskProps {
    id: number;
    title: string;
    initialDone: boolean;
    onToggle: (id: number, isChecked: boolean) => void;
    onUpdateTitle: (id: number, newTitle: string) => void;
    onDelete: (id: number) => void;
}

export default function TaskComponent({id, title, initialDone, onToggle, onUpdateTitle, onDelete}: taskProps) {

    const [checked, setChecked] = useState(initialDone);
    const [isEditing, setIsEditing] = useState(false);
    const [taskTitle, setTaskTitle] = useState(title);

    const handleCheckToggle = (newChecked: boolean | 'indeterminate') => {
        const isChecked = newChecked === true;
        setChecked(isChecked);
        onToggle(id, isChecked);
    }

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

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSave();
        }
        if (event.key === 'Escape') {
            setTaskTitle(title);
            setIsEditing(false);
        }
    };

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
        <div className="flex space-x-2 items-center py-2 px-1 border-b border-gray-200 w-full">

            <Checkbox
                checked={checked}
                onCheckedChange={handleCheckToggle}
            />

            <label className="flex cursor-pointer space-x-3 items-center text-md flex-grow pr-4">
                {taskDisplay}
            </label>

            {!isEditing && (
                <Button
                    variant="destructive"
                    size="icon"
                    onClick={handleDelete}
                    className="h-8 w-8 p-1.5"
                >
                    <Trash2 className="h-4 w-4"/>
                </Button>
            )}

        </div>
    )
}