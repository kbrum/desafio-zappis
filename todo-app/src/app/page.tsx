"use client"
import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {PlusIcon} from "lucide-react";
import {Task} from "../../types";
import TaskComponent from "@/components/ui/taskComponent";
import {Input} from "@/components/ui/input";


const TaskInput = ({onAddTask}: { onAddTask: (title: string) => void }) => {

    const [title, setTitle] = useState('');

    const handleSubmit = () => {
        if (title.trim()) {
            onAddTask(title.trim());
            setTitle(''); // Limpa o campo
        }
    };

    return (
        <div className="flex space-x-2 pb-4 border-b">

            <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSubmit();
                }}
                placeholder="nova tarefa"
                className="text-center"
            />

            <Button className={"cursor-pointer"} size={"icon"} onClick={handleSubmit} disabled={!title.trim()}>
                <PlusIcon className="h-4 w-4"/>
            </Button>

        </div>
    );
};


export default function Home() {

    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (title: string) => {

        const newTask: Task = {id: Date.now(), title, done: false,};
        setTasks(prevTasks => [newTask, ...prevTasks]);
    };

    const toggleTask = (id: number, isChecked: boolean) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? {...task, done: isChecked} : task
            )
        );
    };

    const updateTaskTitle = (id: number, newTitle: string) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? {...task, title: newTitle} : task
            )
        );
    };

    const deleteTask = (id: number) => {
        try {
            awai
        }
    };


    return (
        <div className={"flex justify-center items-center h-screen"}>

            <Card className={"w-[400px] h-[600px] flex flex-col gap-2"}>

                <CardHeader>
                    <CardTitle className={"flex text-3xl justify-center items-center"}>
                        TO-DO LIST
                    </CardTitle>
                </CardHeader>

                <CardContent className={"flex overflow-auto flex-col flex-grow p-6 pt-0 space-y-3"}>

                    <TaskInput onAddTask={addTask}/>

                    <div className="flex-grow space-y-2 pr-2">

                        {tasks.map(task => (
                            // Os valores task.title e task.done AGORA são garantidos como string e boolean.
                            <TaskComponent
                                key={task.id}
                                id={task.id}
                                title={task.title}
                                initialDone={task.done}
                                onToggle={toggleTask}
                                onUpdateTitle={updateTaskTitle}
                                onDelete={deleteTask}
                            />
                        ))}

                        {tasks.length === 0 && (
                            <p className="text-center text-gray-500 mt-10">Nenhuma tarefa</p>
                        )}
                    </div>
                </CardContent>

            </Card>
        </div>
    )
}