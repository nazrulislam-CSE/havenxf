'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link'; 

export default function Unit() {
    const pathname = usePathname();
    const isActive = pathname === '/setting/unit/create';

    const units = [
        { id: 1, name: 'Kilogram', description: 'Weight unit' },
        { id: 2, name: 'Liter', description: 'Volume unit' },
        { id: 3, name: 'Meter', description: 'Length unit' },
        { id: 4, name: 'Piece', description: 'Individual count' },
        { id: 5, name: 'Dozen', description: '12 pieces' },
        { id: 6, name: 'Box', description: 'Container unit' },
        { id: 7, name: 'Packet', description: 'Small packaging unit' },
        { id: 8, name: 'Gram', description: 'Small weight unit' },
        { id: 9, name: 'Milliliter', description: 'Small volume unit' },
        { id: 10, name: 'Inch', description: 'Length unit' },
    ];

    return (
        <main className="app_container">
            <div className="px-4 pt-6 overflow-hidden">
                {/* Heading and Button */}
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-gray-800">Unit Types</h4>
                    <Link
                        href="/setting/unit/create"
                        className={`default_button flex items-center gap-2 px-4 py-2 rounded-md shadow font-medium transition
                            ${isActive ? 'bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white focus:outline-none focus:ring-0`}
                    >
                        <span className="text-lg font-bold">+</span>
                        <span>Add Unit Type</span>
                    </Link>
                </div>

                {/* Table */}
                <div className="overflow-x-auto bg-white rounded-md shadow">
                    <table className="min-w-full table-auto border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">ID</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Unit Name</th>
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
