import {useEffect, useState} from 'react'
export default function Leaderboard() {
    const[teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('/api/v1/1/leaderboard') // or /teams sorted
            .then(res => res.json())
            .then(setTeams);
    }, []);
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
            <table className="w-full table-auto border-collapse">
                <thead>
                <tr className="bg-gray-100 text-left">
                    <th className="px-4 py-2">Rank</th>
                    <th className="px-4 py-2">Team</th>
                    <th className="px-4 py-2">Points</th>
                </tr>
                </thead>
                <tbody>
                {teams.map(team => (
                    <tr key={team.name} className="border-t">
                        <td className="px-4 py-2">{team.rank}</td>
                        <td className="px-4 py-2">{team.name}</td>
                        <td className="px-4 py-2">{team.point_total}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}