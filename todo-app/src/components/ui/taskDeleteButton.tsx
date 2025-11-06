"use client"

interface TaskDeleteButtonProps {
    onClick: () => void;
}

export default function TaskDeleteButton({onClick}: TaskDeleteButtonProps) {

    return (
        <div>
            <button
                onClick={onClick}
                className="border-black border-2 rounded-full bg-red-600 hover:bg-red-700 active:bg-red-800 w-6 h-6 flex justify-center items-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 13.1664V10.8336H24V13.1664H0Z" fill="white"/>
                </svg>
            </button>
        </div>
    )
}

