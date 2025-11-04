import ListCheckbox from "@/app/home/checkbox";
import ToDoCreateButton from "@/app/home/toDoCreateButton";

export default function Home() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="flex flex-col items-center justify-start h-[500px] w-[350px] background-color: bg-white">

                <div className="flex items-center justify-center">
                    <h1 className="text-black">TO-DO list</h1>
                </div>

                <div className="mb-auto flex flex-col items-center justify-center">
                    <ListCheckbox/>
                </div>

                <div className="mb-3 flex items-center justify-center">
                    <ToDoCreateButton/>
                </div>
            </div>
        </div>
    )
}