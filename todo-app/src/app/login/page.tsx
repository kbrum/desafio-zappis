"use client"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import React, {useState} from "react";
import {Button} from "@/components/ui/button";

const UserRegister = () => {

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const handleUsernameSubmit = () => {
        if (username.trim()) {
            setUsername('');
        }
    };

    const handlePasswordSubmit = () => {
        if (username.trim()) {
            setUsername('');
        }
    };

    const handleSubmit = () => {
        if (username.trim() && password.trim()) {
            setUsername('');
            setPassword('');
        }
    }

    return (
        <div className="flex-col space-y-8 justify-center items-center">
            <div className="flex-col space-y-4">
                <label className="text-lg text-center">Username</label>
                <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleUsernameSubmit();
                    }}
                    placeholder="Username"
                    className="text-center"
                />

                <label className="text-lg text-center">Password</label>
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handlePasswordSubmit();
                    }}
                    placeholder="Password"
                    className="text-center"
                />
            </div>

            <div className="flex justify-center align-bottom">
                <Button
                    size={"lg"}
                    className={"cursor-pointer justify-center"}
                    onClick={handleSubmit}
                >
                    Login
                </Button>
            </div>
        </div>
    );
};

export default function Login() {


    return (
        <div className={"flex justify-center items-center h-screen"}>
            <Card className={"w-[500px] h-[400px] flex flex-col"}>
                <CardHeader className={"flex-row flex gap-4 justify-center"}>
                    <CardTitle>
                        <h1 className={"text-4xl"}>Login</h1>
                    </CardTitle>
                </CardHeader>

                <CardContent className={"flex-col"}>
                    <UserRegister/>

                    <div className={"flex"}>
                        <p className={"text-sm"}>
                            Não tem conta? <a href={"/register"} className={"text-blue-500"}>Registre-se</a>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}