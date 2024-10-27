import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FaUserPlus } from "react-icons/fa";

export function CreateUser() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    Adicionar Usuário <FaUserPlus className="scale-125" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader className="flex justify-center w-full">
                    <DialogTitle>Novo Usuário</DialogTitle>
                    <DialogDescription>
                        Preencha todos os campos obrigatórios.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="name" className="text-left">
                            Nome do Usuário
                        </Label>
                        <Input id="name" placeholder="" className="col-span-3" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email" className="text-left">
                            E-mail
                        </Label>
                        <Input id="email" type="email" placeholder="" className="col-span-3" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="password" className="text-left">
                            Senha
                        </Label>
                        <Input id="password" placeholder="" className="col-span-3" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="status" className="text-left">
                            Perfil de Acesso
                        </Label>
                        <Input id="status" placeholder="Colaborador, Supervisor, Administrador" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Adicionar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
