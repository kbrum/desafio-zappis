"use server"
import {db} from "@/index";
import {task} from "@/db/schema";
import {eq} from "drizzle-orm";
import jwt from "jsonwebtoken";
import {cookiesFecth} from "@/actions/cookieActions";


export async function getTasks() {

    const cookie = await cookiesFecth()

    const validateToken = jwt.verify(cookie, process.env.JWT_SECRET!) as { userId: number }

    if (typeof validateToken === "string") {
        throw new Error("token invalid")
    }

    if (typeof validateToken === null) {
        throw new Error("token invalid")
    }

    const tasks = await db
        .select()
        .from(task)
        .where(eq(task.userId, validateToken.userId))
        .orderBy(task.id);

    if (tasks.length === 0) {
        return [];
    }

    return tasks;
}

export async function createTaskAction(title: string, initialDone: boolean) {

    const cookie = await cookiesFecth()

    const validateToken = jwt.verify(cookie, process.env.JWT_SECRET!) as { userId: number }

    if (typeof validateToken === "string") {
        throw new Error("token invalid")
    }

    if (typeof validateToken === null) {
        throw new Error("token invalid")
    }

    const newTask = await db
        .insert(task)
        .values({title, initialDone, userId: validateToken.userId})
        .returning();

    return newTask;
}

export async function updateTaskAction(id: number, update: { title?: unknown, initialDone?: unknown }) {

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
            throw new Error("O stado tem ser um bool");
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

export async function deleteTaskAction(id: number) {

    const existing = await db
        .select().from(task).where(eq(task.id, id));

    if (existing.length === 0) {
        throw new Error("Task não encontrada")
    }

    const deleteTask = await db
        .delete(task)
        .where(eq(task.id, id))
        .returning();

    return deleteTask;
}