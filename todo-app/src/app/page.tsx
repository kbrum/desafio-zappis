import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {PlusIcon} from "lucide-react";

export default function Home() {

    return (
        <div className={"flex justify-center items-center h-screen"}>

            <Card className={"w-[400px] h-[600px}"}>

                <CardHeader>
                    <CardTitle className={"flex text-3xl justify-center items-center"}>
                        TESTE
                    </CardTitle>
                </CardHeader>

                <CardContent className={"flex-col justify-between"}>
                    <div className={"flex justify-end"}>
                        <Button size={"icon"}>
                            <PlusIcon/>
                        </Button>
                    </div>
                </CardContent>

            </Card>
        </div>
    )
}