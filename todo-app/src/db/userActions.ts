"use server"
import bcrypt from 'bcryptjs';
import {db} from "@/index";
import {user} from "@/db/schema";
import {eq} from "drizzle-orm";
import jwt from 'jsonwebtoken';
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {cookiesFecth} from "@/actions/cookieActions";

export async function registerUserAction(username: string, name: string, password: string) {

    const saltRounds = 10;

    const hashPassword = await bcrypt.hash(password, saltRounds);

    await db
    .insert(user)
    .values({username, name, password: hashPassword})
    .returning();

    await loginUserAction(username, password)
}

export async function loginUserAction(inputUsername: string, inputPassword: string) {

    const [userExists] = await db.select().from(user).where(eq(user.username, inputUsername));

    if (!userExists) {
        throw new Error("credentials incorrect")
    }

    const isPasswordCorrect: boolean = await bcrypt.compare(
        inputPassword,
        userExists.password,
    );

    if (!isPasswordCorrect) {
        throw new Error("credentials incorrect")
    }

    const token = jwt.sign({userId: userExists.id}, process.env.JWT_SECRET!, {expiresIn: "1h"});

    const cookie = await cookies()
    cookie.set("session", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: '/',
        sameSite: "strict",
        maxAge: 60 * 60,
    })

    redirect("/")

    return {sucess: true};

}