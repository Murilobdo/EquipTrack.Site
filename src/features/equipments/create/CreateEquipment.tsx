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
import { IoAddSharp } from "react-icons/io5"

export function CreateEquipment() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    Adicionar Equipamento <IoAddSharp className="scale-150" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader className="flex justify-center w-full">
                    <DialogTitle>Novo Equipamento</DialogTitle>
                    <DialogDescription>
                        Preencha todos os campos obrigatórios.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="name" className="text-left">
                            Nome do Equipamento
                        </Label>
                        <Input id="name" placeholder="" className="col-span-3" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="category" className="text-left">
                            Categoria
                        </Label>
                        <Input id="category" placeholder="Catraca, Roteador, Notebook, etc..." className="col-span-3" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="code" className="text-left">
                            Número de Serie
                        </Label>
                        <Input id="code" placeholder="" className="col-span-3" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="status" className="text-left">
                            Estado Inicial
                        </Label>
                        <Input id="status" placeholder="Novo, Usado, Velho" className="col-span-3" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="observation" className="text-left">
                            Observações
                        </Label>
                        <Textarea placeholder="Cuidados que deve ter com o equipamento..." rows={5} />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Adicionar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
