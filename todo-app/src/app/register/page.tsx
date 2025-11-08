"use client"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import React, {useState} from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {registerUserAction} from "@/db/userActions";

const UserRegister = () => {

    const [name, setName] = useState('');

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');


    const handleSubmit = () => {
        if (name.trim()) {
            setName('');
        }

        if (username.trim()) {
            setUsername('');
        }

        if (password.trim()) {
            setPassword('');
        }

        if (name.trim() && username.trim() && password.trim()) {
            setName('');
            setUsername('');
            setPassword('');


        }

    };

    const registerUser = async () => {
        registerUserAction(username, name, password)
        handleSubmit()
    }

    return (
        <div className="flex-col space-y-10 justify-center items-center">
            <div className="flex-col space-y-4">
                <label className="text-lg text-center">Name</label>
                <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSubmit();
                    }}
                    placeholder="Name"
                />

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
                    onClick={registerUser}
                >
                    Register
                </Button>
            </div>
        </div>
    );
};

export default function Register() {

    return (
        <div className={"flex justify-center items-center h-screen"}>
            <Card className={"w-[500px] h-[450px] flex flex-col"}>
                <CardHeader className={"flex-row flex gap-4 justify-center"}>
                    <CardTitle>
                        <h1 className={"text-4xl "}>Register</h1>
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <UserRegister/>
                </CardContent>
            </Card>
        </div>
    )
}