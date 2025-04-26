import Teams from "@/app/ui/teams";
import NavItems from "@/app/ui/nav-items";


export default function NavigationMain() {
    return (
        <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <NavItems/>
                <Teams/>
            </ul>
        </nav>
    )
}