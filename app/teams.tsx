import TeamItem from "@/app/team-item";

export default function Teams({teams, getTeam}) {
    // const data = await fetch("http://127.0.0.1:3000/api/v1/1/teams");
    // const teams = await data.json();
    // Returns list of:
    // id : 1
    // name : "Team D.Fitch"
    // user_id : 1

    return (
        <li>
            <div ><h1 className="text-xs/6 font-semibold text-gray-400">All teams</h1></div>
            <ul role="list" className="-mx-2 mt-2 space-y-1">
                {teams.map((team) => (
                    <TeamItem key={team.name} team={team} getTeam={getTeam} />
                ))}
            </ul>
        </li>
    )
}