function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Item({navItem}) {
    console.log(navItem);
    return (
        <li key={navItem.name}>
            <a
                href={navItem.href}
                className={classNames(
                    navItem.current
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                    'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                )}
            >
                <navItem.icon aria-hidden="true" className="size-6 shrink-0"/>
                {navItem.name}
            </a>
        </li>
    )
}