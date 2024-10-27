"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Home, Users, Calendar, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { FaTools } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
import { RiInboxArchiveFill } from "react-icons/ri";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom"

const menuItems = [
    { icon: BsBoxArrowInUpRight, label: "Retirada de Equipamentos", url: "/get-equipments" },
    { icon: RiInboxArchiveFill, label: "Dar Baixa nos Equipamentos", url: "/return-equipments" },
    { icon: FaTools, label: "Cadastro Equipamentos", url: "/equipments" },
    { icon: FaUsers, label: "Cadastro Usuarios", url: "/users" },
    { icon: TbReport, label: "Relatórios", url: "/reports" },
]

export default function Menu() {
    const [isExpanded, setIsExpanded] = React.useState(false)
    const navigate = useNavigate();

    return (
        <TooltipProvider>
            <motion.div
                className="fixed left-0 top-0 h-screen bg-background border-r shadow-lg flex flex-col"
                initial={{ width: "100px" }}
                animate={{ width: isExpanded ? "350px" : "100px" }}
                transition={{ duration: 0.3 }}
            >
                <div className="px-2">
                    <Button
                        size="icon"
                        className="my-4 w-full px-2"
                        onClick={() => setIsExpanded(!isExpanded)}
                        aria-label={isExpanded ? "Contrair menu" : "Expandir menu"}
                    >
                        {isExpanded ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                    </Button>

                </div>
                <nav className="flex flex-col space-y-2 p-2">
                    {menuItems.map((item) => (
                        <Tooltip key={item.label} delayDuration={300}>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="outline"
                                    className={`${isExpanded ? "justify-start px-4" : "px-2"}`}
                                    onClick={() => console.log(`Clicou em ${item.label}`)}
                                >
                                    <item.icon className="h-8 w-8 mr-2 scale-150" />
                                    {isExpanded && <span className="">{item.label}</span>}
                                </Button>
                            </TooltipTrigger>
                            {!isExpanded && (
                                <TooltipContent side="right">
                                    <p>{item.label}</p>
                                </TooltipContent>
                            )}
                        </Tooltip>
                    ))}
                </nav>
            </motion.div>
        </TooltipProvider>
    )
}