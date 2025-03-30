import {Bars3Icon, BellIcon} from "@heroicons/react/24/outline";
import {ChevronDownIcon, MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import {Menu, MenuButton, MenuItems} from "@headlessui/react";
import {useState} from "react";
import HeaderRoot from "@/app/ui/header-root";
import CelebTable from "@/app/ui/celeb-table";


export default function ContentRoot() {


    return (
        <div className="lg:pl-72">

            <HeaderRoot/>
            <CelebTable/>
            {/*<main className="py-10">*/}
            {/*    <div className="flex px-4 sm:px-6 lg:px-8">*/}
            {/*        /!* Your content *!/*/}
            {/*        <div className="px-4 sm:px-6 lg:px-8">*/}
            {/*            <div className="sm:flex sm:items-center">*/}
            {/*                <div className="sm:flex-auto">*/}
            {/*                    <h1 className="text-base font-semibold text-gray-900">Users</h1>*/}
            {/*                    <p className="mt-2 text-sm text-gray-700">*/}
            {/*                        A list of all the users in your account including their name, title, email*/}
            {/*                        and role.*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">*/}
            {/*                    <button*/}
            {/*                        type="button"*/}
            {/*                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"*/}
            {/*                    >*/}
            {/*                        Add user*/}
            {/*                    </button>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="mt-8 flow-root">*/}
            {/*                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">*/}
            {/*                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">*/}
            {/*                        <table className="min-w-full divide-y divide-gray-300">*/}
            {/*                            <thead>*/}
            {/*                            <tr>*/}
            {/*                                <th scope="col"*/}
            {/*                                    className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-3">*/}
            {/*                                    Name*/}
            {/*                                </th>*/}
            {/*                                <th scope="col"*/}
            {/*                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">*/}
            {/*                                    Title*/}
            {/*                                </th>*/}
            {/*                                <th scope="col"*/}
            {/*                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">*/}
            {/*                                    Email*/}
            {/*                                </th>*/}
            {/*                                <th scope="col"*/}
            {/*                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">*/}
            {/*                                    Role*/}
            {/*                                </th>*/}
            {/*                                <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-3">*/}
            {/*                                    <span className="sr-only">Edit</span>*/}
            {/*                                </th>*/}
            {/*                            </tr>*/}
            {/*                            </thead>*/}
            {/*                            <tbody className="bg-white">*/}
            {/*                            /!*{people.map((person) => (*!/*/}
            {/*                            /!*    <tr key={person.email} className="even:bg-gray-50">*!/*/}
            {/*                            /!*        <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-3">*!/*/}
            {/*                            /!*            {person.name}*!/*/}
            {/*                            /!*        </td>*!/*/}
            {/*                            /!*        <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.title}</td>*!/*/}
            {/*                            /!*        <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.email}</td>*!/*/}
            {/*                            /!*        <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.role}</td>*!/*/}
            {/*                            /!*        <td className="relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-3">*!/*/}
            {/*                            /!*            <a href="#"*!/*/}
            {/*                            /!*               className="text-indigo-600 hover:text-indigo-900">*!/*/}
            {/*                            /!*                Edit<span className="sr-only">, {person.name}</span>*!/*/}
            {/*                            /!*            </a>*!/*/}
            {/*                            /!*        </td>*!/*/}
            {/*                            /!*    </tr>*!/*/}
            {/*                            /!*))}*!/*/}
            {/*                            </tbody>*/}
            {/*                        </table>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</main>*/}
        </div>
    )
}