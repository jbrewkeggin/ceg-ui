import TeamItem from "@/app/ui/team-item";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const teams = [
    {id: 1, name: 'TheRealFitch', href: '#', initial: 'H', current: false},
    {id: 2, name: 'JBrewKeggin', href: '#', initial: 'T', current: false},
    {id: 3, name: 'Fulton', href: '#', initial: 'W', current: false},
    {id: 3, name: 'DRocRock', href: '#', initial: 'W', current: false},
    {id: 3, name: 'Kendozak', href: '#', initial: 'W', current: false},
    {id: 3, name: 'Tank', href: '#', initial: 'W', current: false},
    {id: 3, name: 'SnakeBite', href: '#', initial: 'W', current: false},
]

export default async function Teams() {
    console.log("Fetch!")
    const data = await fetch("http://127.0.0.1:3000/api/v1/1/teams")

    const teams = await data.json()
    console.log(teams)
    return (
        <li>
            <div className="text-xs/6 font-semibold text-gray-400">Your teams</div>
            <ul role="list" className="-mx-2 mt-2 space-y-1">
                {teams.map((team) => (
                    <TeamItem key={team.name} team={team}/>
                ))}
            </ul>
        </li>
    )
}