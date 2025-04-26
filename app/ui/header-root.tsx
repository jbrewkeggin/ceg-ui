'use client'
import {Bars3Icon, BellIcon} from "@heroicons/react/24/outline";
import {ChevronDownIcon, MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import {Menu, MenuButton, MenuItems} from "@headlessui/react";
import {useState} from "react";
import Search from "@/app/ui/search";
import Alert from "@/app/ui/alert";
import Profile from "@/app/ui/profile";
import Title from "@/app/ui/title";

export default function HeaderRoot() {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    return (
        /* sticky will keep header relative positioned until parents fall off the screen. Then it's fixed */
        /* shrink if needed */
        /* border bottom width 1px */
        /* horizontal padding of 4 */

        <div
            className="sticky top-0 z-0 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 drop-shadow-xl sm:gap-x-6 sm:px-6 lg:px-8">
            {/* Optional 3 bar hamburger menu for opening closing sidebar */}
            <button type="button" onClick={() => setSidebarOpen(true)}
                    className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon aria-hidden="true" className="size-6"/>
            </button>

            {/* Separator */}
            <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden"/>
            {/* flex items grow and shrink. flex-1 allows to shrink and grow as needed.  Ignoring initial size */}
            {/* allow items to fill containers cross axis despite align items value */}
            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">

                <Title/>
                {/*<Title/>*/}
                <div className="flex items-center gap-x-4 lg:gap-x-6">
                    <Alert/>

                    {/* Separator */}
                    <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"/>

                    {/* Profile dropdown */}
                    <Profile/>
                </div>
            </div>
        </div>
    )
}