

type Props = {
    component: any;
}
export function PublicLayout(props: Props) {
    return (
        <div className="w-full h-full">
            {props.component}
        </div>
    )
}