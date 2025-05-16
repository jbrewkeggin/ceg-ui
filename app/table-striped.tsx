// { title }: { title: string }
export default function TableStriped({teamInfo}) {
    const celebs = teamInfo.celebrities;
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold text-gray-900">Celebrities</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the celebrities on your team and their points.
                    </p>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                            <tr>
                                <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                    First Name
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Last Name
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Age
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Birthday
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Status
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Point Worth
                                </th>
                                <th scope="col" className="px-3 py-3.5 pl-3 pl-4 text-left text-sm font-semibold text-gray-900">
                                    Points Earned
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white">
                            {celebs.map((person) => (
                                <tr key={person.id} className="even:bg-gray-50">
                                    <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-3">
                                        {person.first_name}
                                    </td>
                                    <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-3">{person.last_name}</td>
                                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.age}</td>
                                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.birthday}</td>
                                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.status}</td>
                                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.point_worth}</td>
                                    <td className="px-3 py-4 pr-3 pl-4 text-sm whitespace-nowrap text-gray-500">{person.points_earned}</td>

                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}