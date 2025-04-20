'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link'; 

export default function Member() {
    const pathname = usePathname();
    const isActive = pathname === '/setting/member/create';

    const units = [
        { id: 1, name: 'Co-Owner', description: 'Co-Owner' },
        { id: 2, name: 'Family of Owner', description: 'Family of Owner' },
        { id: 3, name: 'Registered Owner', description: 'Registered Owner' },
        { id: 4, name: 'Tenant', description: 'Tenant' },
        { id: 5, name: 'Family of Tenant', description: 'Family of Tenant' },
    ];

    return (
        <main className="app_container">
            <div className="px-4 pt-6 overflow-hidden">
                {/* Heading and Button */}
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-gray-800">Member Types</h4>
                    <Link
                        href="/setting/member/create"
                        className={`default_button flex items-center gap-2 px-4 py-2 rounded-md shadow font-medium transition
                            ${isActive ? 'bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white focus:outline-none focus:ring-0`}
                    >
                        <span className="text-lg font-bold">+</span>
                        <span>Add Member Type</span>
                    </Link>
                </div>

                {/* Table */}
                <div className="overflow-x-auto bg-white rounded-md shadow">
                    <table className="min-w-full table-auto border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">ID</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Member Type</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Description</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {units.map((unit) => (
                                <tr key={unit.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border-b text-sm text-gray-600">{unit.id}</td>
                                    <td className="px-4 py-2 border-b text-sm text-gray-600">{unit.name}</td>
                                    <td className="px-4 py-2 border-b text-sm text-gray-600">{unit.description}</td>
                                    <td className="px-4 py-2 border-b text-sm text-gray-600">
                                        <div className="flex items-center gap-4">
                                            <button className="text-blue-600 hover:underline text-sm">Edit</button>
                                            <button className="text-red-600 hover:underline text-sm">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}
