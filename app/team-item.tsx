export default function TeamItem({team, getTeam}) {
    team.initial = team.name[7]; // First initial of Last Name
    // team
    // id : 1
    // name : "Team D.Fitch"
    // user_id : 1

    // Clicking team #1 should fetch from /api/v1/{leagueID}/teams/{teamID}

    // Should prompt a change on the main page to display table component
    // Link should call getTeam() and getUser JS
    // responses need to be fed to another component -> ContentRoot and passed into UserInfo and CelebTable

    // The Team Info and Celebrities will Change when a new team is clicked
    // Is that dynamic?  Will there a be a new route to each? Like a page for each team? Or a Page with dynamic components on it?
    // First Page will be Text telling you to click one of the teams
    // Second Page contains Dynamic Team/User info

    // Click Link, Pass in Team ID to the Teams Page
    return (
        <li key={team} onClick={() => getTeam(team.user_id)}
            className='flex h-[48px] grow items-center justify-center gap-2 rounded-md text-gray-400 bg-gray-800 p-3 text-sm font-medium hover:bg-gray-800 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3'
        >
                <span
                    className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                {team.initial}
                </span>
            <span className="truncate">{team.name}</span>
        </li>

    )
}