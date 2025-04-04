const people = [
    {name: 'Gene Hackman', age: '95', status: 'Deceased', worth: '5', earned: '5', role: 'Member'},
    // More people...
]

export default function CelebTable() {
    return (
        <div className="p-10 m-10">
            <div className="bg-gray-900">
                <div className="mx-auto max-w-7xl">
                    <div className="bg-gray-900 py-10">
                        <div className="px-4 sm:px-6 lg:px-8">
                            <div className="sm:flex sm:items-center">
                                <div className="sm:flex-auto">
                                    <h1 className="text-base font-semibold text-white">Celebrities</h1>
                                    <p className="mt-2 text-sm text-gray-300">
                                        A list of your celebrities. This table will be locked from editing once the
                                        action starts!
                                    </p>
                                </div>
                                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                    <button
                                        type="button"
                                        className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                    >
                                        Add Celeb
                                    </button>
                                </div>
                            </div>
                            <div className="mt-8 flow-root">
                                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                        <table className="min-w-full divide-y divide-gray-700">
                                            <thead>
                                            <tr>
                                                <th scope="col"
                                                    className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-white sm:pl-0">
                                                    Name
                                                </th>
                                                <th scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                    Age
                                                </th>
                                                <th scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                    Death Status
                                                </th>
                                                <th scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                    Point Worth
                                                </th>
                                                <th scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                    Points Earned
                                                </th>
                                                <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-0">
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-800">
                                            {people.map((person) => (
                                                <tr key={person.name}>
                                                    <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-white sm:pl-0">
                                                        {person.name}
                                                    </td>
                                                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-300">{person.age}</td>
                                                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-300">{person.status}</td>
                                                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-300">{person.worth}</td>
                                                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-300">{person.earned}</td>
                                                    <td className="relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                                                        <a href="#" className="text-indigo-400 hover:text-indigo-300">
                                                            Edit<span className="sr-only">, {person.name}</span>
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
