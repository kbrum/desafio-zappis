"use server"
import {db} from "@/index";
import {task} from "@/db/schema";
import {eq} from "drizzle-orm";

export async function getTasks() {

    const tasks = await db.select().from(task).orderBy(task.createdAt);

    return tasks;
}

export async function createTask(title: string, initialDone: boolean) {

    const newTask = await db.insert(task).values({title, initialDone}).returning();

    return newTask;
}

export async function updateTask(id: number, title: string, initialDone: boolean) {

}

export async function deleteTask(id: number) {

    const deleteTask = await db.delete(task).where(eq(task.id, id)).returning();

    return deleteTask;
}