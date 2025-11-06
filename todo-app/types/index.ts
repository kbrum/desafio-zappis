// respresenta uma task
export interface Task {
    id: number;
    title: string;
    done: boolean;

}

// campos usados para criar uma task
export interface NewTask {
    title: string;
}


export interface UpdateTask {
    id: number;
    title?: string;
    done?: boolean;
}