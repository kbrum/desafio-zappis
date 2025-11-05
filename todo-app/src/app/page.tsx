import ListCheckbox from "@/app/home/checkbox";
import ToDoCreateButton from "@/app/home/toDoCreateButton";
import Rectangle from "@/app/utils/rectangle";

export default function Home() {
    return (
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="absolute top-38 flex items-center justify-center">

                <h1 className="text-black text-5xl">TO-DO list</h1>

            </div>
            <Rectangle>

                <div className="mb-auto mt-auto flex flex-col items-center justify-center">
                    <ListCheckbox/>
                </div>

                <div className="mb-3 flex items-center justify-center">
                    <ToDoCreateButton/>
                </div>

            </Rectangle>
        </div>
    )
}