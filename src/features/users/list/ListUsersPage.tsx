"use client"
import { Card } from "@/components/ui/card"
import { CreateUser } from "../create/CreateUser";
import { UsersTable } from "@/components/users/UsersTable";


export function ListUsersPage() {


    return (
        <div className="w-2/3">
            <div className="flex flex-col">

                <Card className="px-4 py-2 mt-4">
                    <CreateUser />
                </Card>
                <div>
                    <UsersTable />
                </div>
            </div>
        </div>
    )
}
