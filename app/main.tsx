'use client'
import SidebarRoot from "@/app/sidebar-root";
import ContentRoot from "@/app/content-root";
import DefaultContent from "@/app/default-content";
import { useState, useEffect } from 'react';
import HeaderRoot from "@/app/header-root";

function isEmpty(obj) {
    for (const prop in obj) {
        if (Object.hasOwn(obj, prop)) {
            return false;
        }
    }

    return true;
}

export default function Main() {
    const [teamInfo, setTeamInfo] = useState({});
    let contentPage;
    function getTeam(team: string) {
        const url = 'http://127.0.0.1:3000/api/v1/1/teams/' + team;
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setTeamInfo(data);
            });

    }

    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:3000/api/v1/1/teams')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setTeams(data);
            });
    }, []);
    if(!isEmpty(teamInfo)) {
        contentPage = <ContentRoot teamInfo={teamInfo} />
    } else {
        contentPage = <DefaultContent/>
    }
    return (

        <div>
            <SidebarRoot teams={teams} getTeam={getTeam} />
            <div className="lg:pl-72">
                <HeaderRoot/>
            </div>
            {contentPage}
        </div>
    )
}
