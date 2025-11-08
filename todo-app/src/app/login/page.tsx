"use client"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import {loginUserAction} from "@/db/userActions";
import {toast} from "sonner";

const UserRegister = () => {

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        if (username.trim()) {
            setUsername('');
        }

        if (password.trim()) {
            setPassword('');
        }

        if (username.trim() && password.trim()) {
            setUsername('');
            setPassword('');
        }
    };

    const loginUser = async () => {
        try {
            await loginUserAction(username, password)
            toast("Login Success")
        } catch (e) {
            toast("Login Error")
        }
    }

    return (
        <div className="flex-col space-y-5 justify-center items-center mb-5">
            <div className="flex-col space-y-4">
                <label className="text-lg text-center">Username</label>
                <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSubmit();
                    }}
                    placeholder="Username"
                />

                <label className="text-lg text-center">Password</label>
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSubmit();
                    }}
                    placeholder="Password"
                />
            </div>

            <div className="flex justify-center">
                <Button
                    size={"lg"}
                    className={"cursor-pointer justify-center"}
                    onClick={loginUser}
                >
                    Login
                </Button>
            </div>
        </div>
    );
    5
};

export default function Login() {


    return (
        <div className={"flex justify-center items-center h-screen"}>
            <Card className={"w-[500px] h-[350px] flex flex-col"}>
                <CardHeader className={"flex-row flex gap-4 justify-center"}>
                    <CardTitle>
                        <h1 className={"text-4xl"}>Login</h1>
                    </CardTitle>
                </CardHeader>

                <CardContent className={"flex-col"}>
                    <UserRegister/>

                    <div className={"flex justify-center"}>
                        <p className={"text-sm"}>
                            Não tem conta? <a href={"/register"} className={"text-blue-500"}>Registre-se</a>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}