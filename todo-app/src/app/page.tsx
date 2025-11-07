"use client"
import React, {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {PlusIcon} from "lucide-react";
import {Task} from "../../types";
import TaskComponent from "@/components/ui/taskComponent";
import {Input} from "@/components/ui/input";
import {createTaskAction, deleteTaskAction, getTasks, updateTaskAction} from "@/db/taskActions";


const TaskInput = ({onAddTask}: { onAddTask: (title: string) => void }) => {

    const [title, setTitle] = useState('');

    const handleSubmit = () => {
        if (title.trim()) {
            onAddTask(title.trim());
            setTitle(''); // Limpa o campo
        }
    };

    return (
        <div className="flex space-x-2">

            <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSubmit();
                }}
                placeholder="nova tarefa"
                className="text-center align-baseline"
            />

            <Button className={"cursor-pointer"} size={"icon"} onClick={handleSubmit} disabled={!title.trim()}>
                <PlusIcon className="h-4 w-4"/>
            </Button>

        </div>
    );
};


export default function Home() {

    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {

        const loadTasks = async () => {
            try {
                const dbTasks = await getTasks();

                const loadedTasks: Task[] = dbTasks.map(task => ({
                    id: task.id,
                    title: task.title,
                    done: task.initialDone
                }));

                setTasks(loadedTasks);

            } catch (error) {
                console.error("Erro ao carregar as tasks:", error);
            }
        };

        loadTasks();

    }, []);

    const addTask = async (title: string) => {
        try {
            const newTasks = await createTaskAction(title, false).then();

            const dbTask = newTasks[0];

            const localTask: Task = {
                id: dbTask.id,
                title: dbTask.title,
                done: dbTask.initialDone
            };

            setTasks(prevTasks => [localTask, ...prevTasks]);

        } catch (error) {
            console.error("Erro ao criar a task:", error);
        }
    };

    const toggleTask = async (id: number, isChecked: boolean) => {

        const originalTasks = [...tasks];

        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? {...task, done: isChecked} : task
            )
        );

        try {
            await updateTaskAction(id, {initialDone: isChecked});
        } catch (error) {
            console.error("Erro ao atualizar o status da task:", error);
            setTasks(originalTasks);
        }
    };

    const updateTaskTitle = async (id: number, newTitle: string) => {
        const originalTasks = [...tasks];

        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? {...task, title: newTitle} : task
            )
        );

        try {
            await updateTaskAction(id, {title: newTitle});
        } catch (error) {
            console.error("Erro ao atualizar o título da task:", error);
            setTasks(originalTasks);
        }
    };

    const deleteTask = async (id: number) => {

        // faz um copia do array de tasks
        const originalTasks = [...tasks];

        //
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));

        try {
            await deleteTaskAction(id);
        } catch (error) {
            console.error("Erro ao deletar a task:", error);
            setTasks(originalTasks);
        }
    };


    return (
        <div className={"flex justify-center items-center h-screen"}>

            <Card className={"w-[400px] h-[600px] flex flex-col"}>
                <CardHeader className={"flex-col gap-4"}>
                    <CardTitle className={"flex text-4xl justify-center items-center"}>
                        TO-DO LIST
                    </CardTitle>

                    <TaskInput onAddTask={addTask}/>
                </CardHeader>

                <CardContent className={"flex overflow-auto flex-col flex-grow p-6 pt-0 space-y-3"}>
                    <div className="flex-grow space-y-2 pr-2">

                        {tasks.map(task => (
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