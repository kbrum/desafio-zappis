"use client"

export default function TaskEditButton() {

    const handleClick = () => {
    }

    return (
        <div>
            <button
                className="border-black border-2 rounded-full bg-blue-400 hover:bg-blue-500 active:bg-blue-600 w-8 h-8 flex justify-center items-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M19.06 3.59L20.41 4.94C21.2 5.72 21.2 6.99 20.41 7.77L7.18 21H3V16.82L13.4 6.41L16.23 3.59C17.01 2.81 18.28 2.81 19.06 3.59ZM5 19L6.41 19.06L16.23 9.23L14.82 7.82L5 17.64V19Z"
                          fill="black"/>
                </svg>
            </button>
        </div>
    )
}