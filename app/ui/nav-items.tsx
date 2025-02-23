import {
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon
} from "@heroicons/react/24/outline";
import Item from "@/app/ui/item";
const navigation = [
    {name: 'Dashboard', href: '#', icon: HomeIcon, current: true},
    {name: 'Team', href: '#', icon: UsersIcon, current: false},
    {name: 'Projects', href: '#', icon: FolderIcon, current: false},
    {name: 'Calendar', href: '#', icon: CalendarIcon, current: false},
    {name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false},
    {name: 'Reports', href: '#', icon: ChartPieIcon, current: false},
]

export default function NavItems() {
    return (
        <li>
            <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                    <Item navItem={item}/>
                ))}
            </ul>
        </li>
    )
}