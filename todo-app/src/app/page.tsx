import {cookiesFecth} from "@/actions/cookieActions";
import Todo from "@/app/todo";

export default async function page() {

    await cookiesFecth()

    return (
            <Todo/>
    )

}