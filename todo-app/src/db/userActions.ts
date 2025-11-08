"use server"
import bcrypt from 'bcryptjs';
import {db} from "@/index";
import {user} from "@/db/schema";
import {eq} from "drizzle-orm";

export async function registerUserAction(username: string, name: string, password: string) {

    const saltRounds = 10;

    const hashPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await db
        .insert(user)
        .values({username, name, password: hashPassword})
        .returning();
}

export async function loginUserAction(inputUsername: string, inputPassword: string) {

    const hashedPassword = user.password.toString();

    const isPasswordCorrect: boolean = await bcrypt.compare(
        inputPassword,
        hashedPassword
    );

    if (isPasswordCorrect) {
        
    }
}