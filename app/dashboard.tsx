'use client'

import {useEffect, useState} from 'react'
import {Dialog, DialogBackdrop, DialogPanel, TransitionChild} from '@headlessui/react'
import {
    Bars3Icon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import CegImage from "@/app/ceg-image";
import TableStriped from "@/app/table-striped";
import Leaderboard from "@/app/leaderboard";

// <FontAwesomeIcon icon="fa-solid fa-skull-crossbones" />,
const navigation = [
    {name: 'Dashboard', href: '#', icon: HomeIcon, current: true},
    {name: 'Leaderboard', href: '#', icon: UsersIcon, current: false},
    // {name: 'Death Feed', href: '#', icon:  faHouse ,current: false},
    // {name: 'Projects', href: '#', icon: FolderIcon, current: false},
    // {name: 'Calendar', href: '#', icon: CalendarIcon, current: false},
    // {name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false},
    // {name: 'Reports', href: '#', icon: ChartPieIcon, current: false},
]
// { title }: { title: string }
// right now it's any[]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [teams, setTeams] = useState([]);
    const [teamInfo, setTeamInfo] = useState<{
        id?: number;
        name?: string;
        rank?: number;
        point_total?: number;
        celebrities: any[];
    }>({ celebrities: [] });

    const [view, setView] = useState<'dashboard' | 'leaderboard'>('dashboard');

    /** Warning - setting state re-renders a component. **/
    // Effects let you run some code after rendering
    useEffect(() => {
        fetch('/api/v1/1/teams')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setTeams(data);
            });
    }, []);
    function getTeam(team: string) {
        const url = '/api/v1/1/teams/' + team;


        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setSidebarOpen(false);
                setView('dashboard');
                setTeamInfo(data);
            });
    }
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            {/* This is the dropdown menu for mobile and tablet screens.  SetSidebarOpen is a function that sets the state of the sidebarOpen variable, defined below */}
            <div>
                <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                    />

                    <div className="fixed inset-0 flex">
                        <DialogPanel
                            transition
                            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
                        >
                            <TransitionChild>
                                <div
                                    className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                                    <button type="button" onClick={() => setSidebarOpen(false)}
                                            className="-m-2.5 p-2.5">
                                        <span className="sr-only">Close sidebar</span>
                                        <XMarkIcon aria-hidden="true" className="size-6 text-white"/>
                                    </button>
                                </div>
                            </TransitionChild>

                            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                                <div className="flex h-16 shrink-0 items-center">
                                    <CegImage/>
                                    <h1 className="m-4 text-[32px]">CEG</h1>
                                    <button type="button" onClick={() => setSidebarOpen(false)}
                                            className="ml-auto -m-2.5 p-2.5 text-gray-700 lg:hidden">
                                        <span className="sr-only">Close sidebar</span>
                                        <XMarkIcon aria-hidden="true" className="size-6 text-white"/>
                                    </button>
                                </div>
                                <nav className="flex flex-1 flex-col">
                                    {/* The Dashboard and Leaderboard items */}
                                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                        <li>
                                            <ul role="list" className="-mx-2 space-y-1">
                                                {navigation.map((item) => (

                                                    <li key={item.name}>
                                                        <a
                                                            href={item.href}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                if(item.name === 'Leaderboard') {
                                                                    setView('leaderboard');
                                                                } else {
                                                                    setView('dashboard');
                                                                }
                                                                setSidebarOpen(false);
                                                            }}
                                                            className={classNames(
                                                                item.current
                                                                    ? 'bg-gray-50 text-indigo-600'
                                                                    : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                                                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                            )}
                                                        >
                                                            <item.icon
                                                                aria-hidden="true"
                                                                className={classNames(
                                                                    item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                                                    'size-6 shrink-0',
                                                                )}
                                                            />
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        {/* The Team Names List is hidden on smaller screens*/}
                                        <li>
                                            <div className="text-xs/6 font-semibold text-gray-400">Your teams</div>
                                            <ul role="list" className="-mx-2 mt-2 space-y-1">
                                                {teams.map((team) => (
                                                    <li key={team.user_id} onClick={() => getTeam(team.user_id)}>
                                                        <a
                                                            href={team.href}
                                                            className={classNames(
                                                                team.current
                                                                    ? 'bg-gray-50 text-indigo-600'
                                                                    : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                                                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                            )}
                                                        >
                                                        <span
                                                            className={classNames(
                                                                team.current
                                                                    ? 'border-indigo-600 text-indigo-600'
                                                                    : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                                                'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                                                            )}
                                                        >
                                                        {team.name[7]}
                                                        </span>
                                                            <span className="truncate">{team.name}</span>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>


                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">

                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
                        <div className="flex h-16 shrink-0 items-center">
                            <CegImage/>
                            <h1 className="m-4 text-[32px]">CEG</h1>
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {navigation.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        if(item.name === 'Leaderboard') {
                                                            setView('leaderboard');
                                                        } else {
                                                            setView('dashboard');
                                                        }
                                                        console.log(view.toString())
                                                    }}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-gray-50 text-indigo-600'
                                                            : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                    )}

                                                >
                                                    <item.icon
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                                            'size-6 shrink-0',
                                                        )}
                                                    />
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li>
                                    <div className="text-xs/6 font-semibold text-gray-400">CEG Teams</div>
                                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                                        {teams.map((team) => (
                                            <li key={team.user_id} onClick={() => getTeam(team.user_id)}>
                                                <a
                                                    href={team.href}
                                                    className={classNames(
                                                        team.current
                                                            ? 'bg-gray-50 text-indigo-600'
                                                            : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                    )}
                                                >
                          <span
                              className={classNames(
                                  team.current
                                      ? 'border-indigo-600 text-indigo-600'
                                      : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                  'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                              )}
                          >
                            {team.name[7]}
                          </span>
                                                    <span className="truncate">{team.name}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="-mx-6 mt-auto">
                                    <a
                                        href="#"
                                        className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        <img
                                            alt=""
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            className="size-8 rounded-full bg-gray-50"
                                        />
                                        <span className="sr-only">Your profile</span>
                                        <span aria-hidden="true"></span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* This is where the hamburger menu is hidden on smaller screens */}
                <div
                    className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-xs sm:px-6 lg:hidden">
                    <button type="button" onClick={() => setSidebarOpen(true)}
                            className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon aria-hidden="true" className="size-6"/>
                    </button>
                    <div className="flex-1 text-sm/6 font-semibold text-gray-900">Dashboard</div>
                    <a href="#">
                        <span className="sr-only">Your profile</span>
                        <img
                            alt="Profile Picture"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            className="size-8 rounded-full bg-gray-50"
                        />
                    </a>
                </div>

                {view === 'dashboard' ? (
                    <>
                        <main className="lg:pl-72">
                            <div className="xl:pl-96">
                                <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
                                    <TableStriped teamInfo={teamInfo} />
                                </div>
                            </div>
                        </main>

                        <aside
                            className="fixed inset-y-0 left-72 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
                            {/* Secondary column (hidden on smaller screens) */}

                            <div className="border-b border-gray-200 pb-5">
                                <div className="-mt-2 -ml-2 flex flex-wrap items-baseline">
                                    <h3 className="mt-2 ml-2 text-base font-semibold text-gray-900 text-[45px]">{teamInfo?.name ?? 'Select a team'}</h3>
                                    <p className="mt-1 ml-2 truncate text-sm text-gray-500 text-[25px]">Stats</p>
                                </div>
                            </div>
                            <div className="flex flex-col text-left text-gray-900 text-[25px]">
                                <h1 className="text-[45px]">SCORE: </h1>
                                <div className="flex flex-col text-[65px] text-green-900 text-center">{teamInfo?.point_total ?? '–'}</div>
                            </div>
                            <div className="flex flex-col text-left text-gray-900 text-[25px]">
                                <h1 className="text-[45px]">RANK: </h1>
                                <div className="flex flex-col text-[65px] text-green-900 text-center">{teamInfo?.rank ?? '–'}</div>
                            </div>
                        </aside>
                    </>
                ) : (
                    <main className="lg:pl-72">
                        <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
                            <Leaderboard />
                        </div>
                    </main>
                )}
            </div>
        </>
    )
}
