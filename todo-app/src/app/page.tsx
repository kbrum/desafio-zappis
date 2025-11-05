import ListCheckbox from "@/app/home/checkbox";
import TaskCreateButton from "@/app/home/taskCreateButton";
import Rectangle from "@/app/utils/rectangle";
import TaskDeleteButton from "@/app/home/taskDeleteButton";
import TaskEditButton from "@/app/home/taskEditButton";

export default function Home() {
    return (
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="fixed top-[13%] flex items-center justify-center">

                <h1 className="text-black text-5xl ">TO-DO list</h1>

            </div>
            <Rectangle>

                <div className="mb-auto mt-auto flex flex-col items-center justify-center">
                    <ListCheckbox/>
                </div>

                <div className="flex items-center justify-center">
                    <TaskCreateButton/>
                    <TaskEditButton/>
                    <TaskDeleteButton/>
                </div>

            </Rectangle>
        </div>
    )
}