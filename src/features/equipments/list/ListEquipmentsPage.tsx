"use client"
import { EquipmentTable } from "@/components/equipments/EquipmentTable"
import { Card } from "@/components/ui/card"
import { CreateEquipment } from "@/features/equipments/create/CreateEquipment";


export function ListEquipmentsPage() {


    return (
        <div className="w-2/3">
            <div className="flex flex-col">

                <Card className="px-4 py-2 mt-4">
                    <CreateEquipment />
                </Card>


                <div>
                    <EquipmentTable />
                </div>
            </div>
        </div>
    )
}
