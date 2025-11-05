"use client"
import Task from "@/app/home/task";
import TaskCreateButton from "@/app/home/taskCreateButton";
import Rectangle from "@/app/utils/rectangle";
import TaskDeleteButton from "@/app/home/taskDeleteButton";

export default function Home() {
    return (
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="fixed top-[13%] flex items-center justify-center">

                <h1 className="text-black text-5xl ">TO-DO LIST</h1>
                t
            </div>
            <Rectangle>
                8
                <div className="mb-auto mt-auto flex-col flex items-center justify-center">
                    <Task/>
                </div>

                <div className="flex space-x-2 items-center justify-center fixed bottom-[20%] right-[40%]">
                    <TaskCreateButton/>
                    <TaskDeleteButton/>
                </div>

            </Rectangle>
        </div>
    )
}