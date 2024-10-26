

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function LoginPage() {
    return (
        <div className="flex justify-center items-center h-full">
            <Card className="w-[400px]">
                <CardHeader className="text-center">
                    <CardTitle>Rastreio de Equipamentos</CardTitle>
                    <CardDescription>Tagus Tec Eventos</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="login">Login</Label>
                                <Input id="login" placeholder="Insira o seu login ou E-mail" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="login">Senha</Label>
                                <Input id="login" placeholder="****" />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button className="w-full">Entrar</Button>
                </CardFooter>
            </Card>
        </div>
    )
}