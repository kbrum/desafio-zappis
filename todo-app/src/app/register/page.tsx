"use client"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import React, {useState} from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

const UserRegister = () => {

    const [name, setName] = useState('');

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');


    const handleNameSubmit = () => {
        if (name.trim()) {
            setName('');
        }
    };

    const handleUsernameSubmit = () => {
        if (username.trim()) {
            setUsername('');
        }
    }

    const handlePasswordSubmit = () => {
        if (password.trim()) {
            setPassword('');
        }
    }

    const handleSubmit = () => {
        if (name.trim() && username.trim() && password.trim()) {
            setName('');
            setUsername('');
            setPassword('');
        }
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
                        if (e.key === 'Enter') handleNameSubmit();
                    }}
                    placeholder="Name"
                    className="text-center"
                />

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

            <div className="flex justify-center">
                <Button
                    size={"lg"}
                    className={"cursor-pointer justify-center"}
                    onClick={handleSubmit}
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