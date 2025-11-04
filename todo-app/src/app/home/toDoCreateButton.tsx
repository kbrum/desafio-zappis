"use client"
import {useRouter} from "next/navigation";

// rota pra criar uma task na lista
function ToDoCreateButton() {
    const router = useRouter();

    // ação quando o botão for clicado
    const handleClick = () => {
        router.push("/creation"); // redireciona para a rota /creation
    }

    return (
        <div className="flex items-center justify-center">
            <button onClick={handleClick} className="text-black hover:bg-gray-600 bg-gray-400 rounded-md p-2">
                Create task
            </button>
        </div>
    )
}

export default ToDoCreateButton;