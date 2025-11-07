"use server"
import {db} from "@/index";
import {task} from "@/db/schema";
import {eq} from "drizzle-orm";

export async function getTasks() {

    const tasks = await db
        .select()
        .from(task)
        .orderBy(task.id);

    if (tasks.length === 0) {
        return [];
    }

    return tasks;
}

export async function createTask(title: string, initialDone: boolean) {

    const newTask = await db
        .insert(task)
        .values({title, initialDone})
        .returning();

    return newTask;
}

export async function updateTask(id: number, update: { title?: unknown, initialDone?: unknown }) {

    const updateData: { title?: string, initialDone?: boolean } = {};

    if (update.title !== undefined) {

        if (typeof update.title !== "string") {
            throw new Error("Tipagem do titulo incorreta")
        }

        const validationTitle = update.title.trim();

        if (validationTitle.length === 0) {
            throw new Error("Título não pode ser vazio");
        }

        if (validationTitle.length > 255) {
            throw new Error("Título deve ter no máximo 255 caracteres");
        }

        updateData.title = validationTitle;

    }

    if (update.initialDone !== undefined) {
        if (typeof update.initialDone !== "boolean") {
            throw new Error("rapaz, o stado tem ser um bool");
        }

        updateData.initialDone = update.initialDone;

    }

    if (Object.keys(updateData).length === 0) {
        throw new Error("Nenhum campo para ser modificado");
    }

    const updateTask = await db
        .update(task)
        .set(updateData)
        .where(eq(task.id, id))
        .returning();

    return updateTask;

}

export async function deleteTask(id: number) {

    const existing = await db
        .select().from(task).where(eq(task.id, id));

    if (existing.length === 0) {
        throw new Error("rapaz, task não encontrada")
    }

    const deleteTask = await db
        .delete(task)
        .where(eq(task.id, id))
        .returning();

    return deleteTask;
}