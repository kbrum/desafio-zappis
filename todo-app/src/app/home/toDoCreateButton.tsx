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
            <button onClick={handleClick}
                    className="absolute bottom-6 text-black h-12 cursor-pointer border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md">
                Criar Task
            </button>
        </div>
    )
}

export default ToDoCreateButton;