'use client'

import cegpic from '../../public/CEG2025.jpg'
import NavigationMain from "@/app/ui/navigation-main";
import Image from 'next/image';
import {useState} from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
} from '@headlessui/react'
import {
    Bars3Icon,
    BellIcon,
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {ChevronDownIcon, MagnifyingGlassIcon} from '@heroicons/react/20/solid'


const navigation = [
    {name: 'Dashboard', href: '#', icon: HomeIcon, current: true},
    {name: 'Team', href: '#', icon: UsersIcon, current: false},
    {name: 'Projects', href: '#', icon: FolderIcon, current: false},
    {name: 'Calendar', href: '#', icon: CalendarIcon, current: false},
    {name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false},
    {name: 'Reports', href: '#', icon: ChartPieIcon, current: false},
]
const teams = [
    {id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false},
    {id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false},
    {id: 3, name: 'Workcation', href: '#', initial: 'W', current: false},
]
const userNavigation = [
    {name: 'Your profile', href: '#'},
    {name: 'Sign out', href: '#'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [sidebarOpen, setSidebarOpen] = useState(true)

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
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
                                    <button type="button" onClick={() => setSidebarOpen(true)}
                                            className="-m-2.5 p-2.5">
                                        <span className="sr-only">Close sidebar</span>
                                        <XMarkIcon aria-hidden="true" className="size-6 text-white"/>
                                    </button>
                                </div>
                            </TransitionChild>
                            {/* Sidebar component, swap this element with another sidebar if you like */}
                            <div
                                className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                                <div className="flex h-16 shrink-0 items-center">
                                    <img
                                        alt="Your Company"
                                        src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                        className="h-8 w-auto"
                                    />
                                </div>
                                <nav className="flex flex-1 flex-col">
                                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                        <li>
                                            <ul role="list" className="-mx-2 space-y-1">
                                                {navigation.map((item) => (
                                                    <li key={item.name}>
                                                        <a
                                                            href={item.href}
                                                            className={classNames(
                                                                item.current
                                                                    ? 'bg-gray-800 text-white'
                                                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                            )}
                                                        >
                                                            <item.icon aria-hidden="true" className="size-6 shrink-0"/>
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="text-xs/6 font-semibold text-gray-400">Your teams</div>
                                            <ul role="list" className="-mx-2 mt-2 space-y-1">
                                                {teams.map((team) => (
                                                    <li key={team.name}>
                                                        <a
                                                            href={team.href}
                                                            className={classNames(
                                                                team.current
                                                                    ? 'bg-gray-800 text-white'
                                                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                            )}
                                                        >
                              <span
                                  className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                {team.initial}
                              </span>
                                                            <span className="truncate">{team.name}</span>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li className="mt-auto">
                                            <a
                                                href="#"
                                                className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white"
                                            >
                                                <Cog6ToothIcon aria-hidden="true" className="size-6 shrink-0"/>
                                                Settings
                                            </a>
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
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
                        <div className="flex h-16 shrink-0 items-center">
                            <Image
                                alt="Your Company"
                                src={cegpic}
                                width={50}
                                height={50}
                                className="w-auto"
                            />
                        </div>
                        <NavigationMain/>
                    </div>
                </div>

                <div className="lg:pl-72">
                    <div
                        className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8">
                        <button type="button" onClick={() => setSidebarOpen(true)}
                                className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon aria-hidden="true" className="size-6"/>
                        </button>

                        {/* Separator */}
                        <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden"/>

                        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                            <form action="#" method="GET" className="grid flex-1 grid-cols-1">
                                <input
                                    name="search"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    className="col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-hidden placeholder:text-gray-400 sm:text-sm/6"
                                />
                                <MagnifyingGlassIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
                                />
                            </form>
                            <div className="flex items-center gap-x-4 lg:gap-x-6">
                                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon aria-hidden="true" className="size-6"/>
                                </button>

                                {/* Separator */}
                                <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"/>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative">
                                    <MenuButton className="-m-1.5 flex items-center p-1.5">
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            alt=""
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            className="size-8 rounded-full bg-gray-50"
                                        />
                                        <span className="hidden lg:flex lg:items-center">
                      <span aria-hidden="true" className="ml-4 text-sm/6 font-semibold text-gray-900">
                        Tom Cook
                      </span>
                      <ChevronDownIcon aria-hidden="true" className="ml-2 size-5 text-gray-400"/>
                    </span>
                                    </MenuButton>
                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 ring-1 shadow-lg ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                    >
                                        {/*{userNavigation.map((item) => (*/}
                                        {/*    <MenuItem key={item.name}>*/}
                                        {/*        <a*/}
                                        {/*            href={item.href}*/}
                                        {/*            className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"*/}
                                        {/*        >*/}
                                        {/*            {item.name}*/}
                                        {/*        </a>*/}
                                        {/*    </MenuItem>*/}
                                        {/*))}*/}
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <main className="py-10">
                        <div className="flex px-4 sm:px-6 lg:px-8">
                            {/* Your content */}
                            <div className="px-4 sm:px-6 lg:px-8">
                                <div className="sm:flex sm:items-center">
                                    <div className="sm:flex-auto">
                                        <h1 className="text-base font-semibold text-gray-900">Users</h1>
                                        <p className="mt-2 text-sm text-gray-700">
                                            A list of all the users in your account including their name, title, email
                                            and role.
                                        </p>
                                    </div>
                                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                        <button
                                            type="button"
                                            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Add user
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-8 flow-root">
                                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                            <table className="min-w-full divide-y divide-gray-300">
                                                <thead>
                                                <tr>
                                                    <th scope="col"
                                                        className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                                        Name
                                                    </th>
                                                    <th scope="col"
                                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                        Title
                                                    </th>
                                                    <th scope="col"
                                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                        Email
                                                    </th>
                                                    <th scope="col"
                                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                        Role
                                                    </th>
                                                    <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-3">
                                                        <span className="sr-only">Edit</span>
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody className="bg-white">
                                                {/*{people.map((person) => (*/}
                                                {/*    <tr key={person.email} className="even:bg-gray-50">*/}
                                                {/*        <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-3">*/}
                                                {/*            {person.name}*/}
                                                {/*        </td>*/}
                                                {/*        <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.title}</td>*/}
                                                {/*        <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.email}</td>*/}
                                                {/*        <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.role}</td>*/}
                                                {/*        <td className="relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-3">*/}
                                                {/*            <a href="#"*/}
                                                {/*               className="text-indigo-600 hover:text-indigo-900">*/}
                                                {/*                Edit<span className="sr-only">, {person.name}</span>*/}
                                                {/*            </a>*/}
                                                {/*        </td>*/}
                                                {/*    </tr>*/}
                                                {/*))}*/}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
