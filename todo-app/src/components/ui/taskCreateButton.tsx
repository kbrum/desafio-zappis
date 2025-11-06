"use client"

// rota pra criar uma task na lista
interface TaskCreateButtonProps {
    onClick: () => void
}

export default function TaskCreateButton({onClick}: TaskCreateButtonProps) {

    // ação quando o botão for clicado
    const handleClick = () => {
    }

    return (
        <div>
            <button
                className="border-black border-2 rounded-full bg-[#FFA6F6] hover:bg-[#fa8cef] active:bg-[#f774ea] w-8 h-8 flex justify-center items-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="flex" d="M10.8425 24V0H13.1575V24H10.8425ZM0 13.1664V10.8336H24V13.1664H0Z"
                          fill="black"/>
                </svg>
            </button>
        </div>
    )
}

