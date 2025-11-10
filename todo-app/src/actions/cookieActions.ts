"use server"
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export async function cookiesFecth() {

    const cookie = await cookies()

    const value = cookie.get("session")

    if (!value) {
        return redirect("/login")
    }

    return value.value;

}

export async function cookiesDelete() {

    const cookie = await cookies()

    cookie.delete("session")

    redirect("/login")

}

