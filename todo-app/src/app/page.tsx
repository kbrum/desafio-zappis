"use client"
import Task from "@/components/ui/task";
import TaskCreateButton from "@/components/ui/taskCreateButton";
import Card from "@/app/utils/card";

export default function Home() {


    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-1">

            <h1 className="text-black text-5xl ">TO-DO LIST</h1>

            <Card>

                <div className="absolute flex-col flex top-[2%] left-[2%]">
                    <Task/>
                </div>

                <div className="flex absolute space-x-1 top-[2%] right-[2%]">
                    <TaskCreateButton/>
                </div>

            </Card>
        </div>
    )
}