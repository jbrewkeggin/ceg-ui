import {BellIcon} from "@heroicons/react/24/outline";

export default function Alert() {
    return (
        <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="size-6"/>
        </button>
    )
}