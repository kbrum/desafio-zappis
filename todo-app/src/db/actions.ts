"use server"
import {db} from "@/index";
import {task} from "@/db/schema";

export async function getTasks() {

    const tasks = await db.select().from(task).orderBy(task.createdAt);

    return tasks;
}

export async function createTask(title: string, initialDone: boolean) {

    const newTask = await db.insert(task).values({title, initialDone}).returning();

}