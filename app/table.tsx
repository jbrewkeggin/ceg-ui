export default function Table({teamInfo}) {
    const celebs = teamInfo.celebrities;
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold text-gray-900 text-lg">Celebrities</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Celebrity Data and Point Information.
                    </p>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                            <tr className="divide-x divide-gray-200">
                                <th scope="col" className="py-3.5 pr-4 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                    First Name
                                </th>
                                <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Last Name
                                </th>
                                <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Age
                                </th>
                                <th scope="col" className="py-3.5 pr-4 pl-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                                    Death Status
                                </th>
                                <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Birthday
                                </th>
                                <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Point Worth
                                </th>
                                <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Points Earned
                                </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                            {celebs.map((celeb) => (
                                <tr key={celeb.id} className="divide-x divide-gray-200">
                                    <td className="py-4 pr-4 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                                        {celeb.first_name}
                                    </td>
                                    <td className="py-4 pr-4 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                                        {celeb.last_name}
                                    </td>
                                    <td className="py-4 pr-4 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                                        {celeb.age}
                                    </td>
                                    <td className="py-4 pr-4 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                                        {celeb.status}
                                    </td>
                                    <td className="py-4 pr-4 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                                        {celeb.birthday}
                                    </td>
                                    <td className="py-4 pr-4 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                                        {celeb.point_worth}
                                    </td>
                                    <td className="py-4 pr-4 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                                        {celeb.points_earned}
                                    </td>
                                    {/*<td className="p-4 text-sm whitespace-nowrap text-gray-500">{person.title}</td>*/}
                                    {/*<td className="p-4 text-sm whitespace-nowrap text-gray-500">{person.email}</td>*/}
                                    {/*<td className="py-4 pr-4 pl-4 text-sm whitespace-nowrap text-gray-500 sm:pr-0">{person.role}</td>*/}
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
