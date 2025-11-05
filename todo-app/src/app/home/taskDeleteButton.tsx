"use client"

export default function TaskDeleteButton() {

    const handleClick = () => {}

    return (
        <div>
            <button
                className="border-black border-2 rounded-full bg-red-600 hover:bg-red-700 active:bg-red-800 w-8 h-8 flex justify-center items-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.1664V10.8336H24V13.1664H0Z" fill="black"/>
                </svg>
            </button>
        </div>
    )
}

