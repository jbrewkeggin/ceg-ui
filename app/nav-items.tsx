import NavItem from "@/app/nav-item";
const navigation = [
    // {name: 'All Teams', href: '#', icon: HomeIcon, current: true},
    // {name: 'Team', href: '#', icon: UsersIcon, current: false},
    // {name: 'Projects', href: '#', icon: FolderIcon, current: false},
    // {name: 'Calendar', href: '#', icon: CalendarIcon, current: false},
    // {name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false},
    // {name: 'Reports', href: '#', icon: ChartPieIcon, current: false},
]

export default function NavItems() {

    return (
        <li>
            <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                    // const listItems = numbers.map((number) =>
                    // // Correct! Key should be specified inside the array.
                    // <ListItem key={number.toString()} value={number} />

                    <NavItem key={item.name} navItem={item}/>
                ))}

            </ul>
        </li>
    )
}