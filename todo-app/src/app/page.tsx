"use client"
import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {PlusIcon} from "lucide-react";
import {Task} from "../../types";
import TaskComponent from "@/components/ui/taskComponent";


const TaskInput = ({onAddTask}: { onAddTask: (title: string) => void }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = () => {
        if (title.trim()) {
            onAddTask(title.trim());
            setTitle(''); // Limpa o campo
        }
    };

    return (
        <div className="flex w-full space-x-2 pb-4 border-b">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSubmit(); // Cria com Enter Key
                }}
                placeholder="Nova tarefa..."
                className="flex-grow p-2 border border-input rounded-md text-black focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
            {/* Botão de Adicionar (Button genérico) */}
            <Button size={"icon"} onClick={handleSubmit} disabled={!title.trim()}>
                <PlusIcon className="h-4 w-4"/>
            </Button>
        </div>
    );
};


export default function Home() {

    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (title: string) => {
        // Objeto de criação agora está em conformidade com a interface Task simplificada.
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
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };


    return (
        <div className={"flex justify-center items-center h-screen"}>

            <Card className={"w-[400px] h-[600px] flex flex-col"}>

                <CardHeader>
                    <CardTitle className={"flex text-3xl justify-center items-center"}>
                        TO-DO LIST
                    </CardTitle>
                </CardHeader>

                <CardContent className={"flex flex-col flex-grow p-6 pt-0 space-y-4"}>

                    {/* Input e Botão de Criação */}
                    <TaskInput onAddTask={addTask}/>

                    {/* Área da Lista (READ) */}
                    <div className="flex-grow overflow-y-auto space-y-2 pr-2">

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
                            <p className="text-center text-gray-500 mt-10">Nenhuma tarefa. Crie uma!</p>
                        )}
                    </div>
                </CardContent>

            </Card>
        </div>
    )
}