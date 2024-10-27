import Menu from "@/components/shared/Menu";


type Props = {
    component: any;
}
export function PrivateLayout(props: Props) {
    return (
        <div className="w-full h-full">
            <Menu />
            <div className="flex justify-center items-start">
                {props.component}
            </div>
        </div>
    )
}