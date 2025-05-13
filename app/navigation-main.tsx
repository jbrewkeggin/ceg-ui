import Teams from "@/app/teams";
import NavItems from "@/app/nav-items";


export default function NavigationMain({teams, getTeam}) {
    return (
        <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <NavItems/>
                <Teams teams={teams} getTeam={getTeam} />
            </ul>
        </nav>
    )
}