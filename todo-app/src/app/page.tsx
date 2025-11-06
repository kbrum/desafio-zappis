"use client"
import React, {useState} from "react";
// Importamos os tipos e componentes conforme a nova estrutura do seu projeto
import {Task} from "../../types";
import TaskComponent from "@/components/ui/taskComponent";
import {Card} from "@/components/ui/card";

// --- Componente de Entrada para Criar Tarefas (TaskInput) ---
// Isola o estado e a lógica do input para manter o componente Home limpo
const TaskInput = ({onAddTask}: { onAddTask: (title: string) => void }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = () => {
        if (title.trim()) {
            onAddTask(title.trim());
            setTitle(''); // Limpa o input após a criação (UX)
        }
    };

    return (
        <div className="mb-4">
            {/* Input para digitar a tarefa */}
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSubmit(); // Salva com Enter (Agilidade/UX)
                }}
                placeholder="Nova tarefa..."
                // Estilos para o input (Clean Code: separei o Input da lista)
                className="w-full p-2 border-black border-2 rounded-md mb-4 text-black focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />

            {/* Os botões de ação fixos no Card */}
            <div className="flex space-x-2 items-center justify-center fixed bottom-10 right-10">
                <TaskCreateButton onClick={handleSubmit}/>
                {/* O botão Delete global pode ser usado aqui para limpar TUDO ou tarefas concluídas */}
                <TaskDeleteButton onClick={() => console.log('Delete All/Completed Tapped')}/>
            </div>
        </div>
    );
};


// --- Componente Principal (Home) com a Lógica de Estado ---
export default function Home() {

    // 1. Estado Central (READ)
    const [tasks, setTasks] = useState<Task[]>([
        // Tarefas de exemplo
        {id: Date.now(), title: "Refatorar o Task component", done: false},
        {id: Date.now() + 1, title: "Estudar Next.js e TypeScript", done: true},
    ]);

    // 2. Lógica CRUD - Handlers de Estado

    // CREATE
    const addTask = (title: string) => {
        const newTask: Task = {
            id: Date.now(),
            title,
            done: false,
        };
        setTasks(prevTasks => [newTask, ...prevTasks]); // Imutabilidade: Adiciona no topo
    };

    // UPDATE - Alternar Conclusão
    const toggleTask = (id: number, isChecked: boolean) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? {...task, done: isChecked} : task // Imutabilidade
            )
        );
    };

    // UPDATE - Atualizar Título
    const updateTaskTitle = (id: number, newTitle: string) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? {...task, title: newTitle} : task // Imutabilidade
            )
        );
    };

    // DELETE
    const deleteTask = (id: number) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id)); // Imutabilidade
    };


    // --- 3. Renderização do Componente Principal ---
    return (
        <div className="relative w-full h-screen flex flex-col items-center justify-center">

            <div className="fixed top-[13%] flex items-center justify-center mb-8">
                <h1 className="text-black text-5xl ">TO-DO LIST</h1>
            </div>

            <Card>
                {/* Container para o input e a lista, com scroll */}
                <div className="flex-col h-full overflow-y-auto">

                    {/* Renderiza o input de Criação (CREATE) */}
                    <TaskInput onAddTask={addTask}/>

                    {/* Lista de Tarefas (READ e mapeamento dos Handlers) */}
                    {tasks.map(task => (
                        <TaskComponent // Usamos TaskComponent para evitar conflito
                            key={task.id}
                            id={task.id}
                            title={task.title || ''}
                            initialDone={task.done || false}
                            onToggle={toggleTask}
                            onUpdateTitle={updateTaskTitle}
                            onDelete={deleteTask}
                        />
                    ))}

                    {tasks.length === 0 && (
                        <p className="text-center text-gray-500 mt-10">Nenhuma tarefa. Crie uma!</p>
                    )}
                </div>
            </Card>


        </div>
    )
}