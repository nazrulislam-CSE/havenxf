'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link'; 

export default function Staff() {
    const pathname = usePathname();
    const isActive = pathname === '/setting/staff/create';

    const staffs = [
        { id: 1, name: 'Nazrul', description: 'Nazrul' },
        { id: 2, name: 'John Doe', description: 'Manager' },
        { id: 3, name: 'Jane Smith', description: 'Assistant Manager' },
        { id: 4, name: 'Alice Brown', description: 'HR Specialist' },
        { id: 5, name: 'Bob Johnson', description: 'Developer' },
        { id: 6, name: 'Charlie White', description: 'Designer' },
        { id: 7, name: 'David Lee', description: 'Sales Executive' },
        { id: 8, name: 'Eva Green', description: 'Marketing Lead' },
        { id: 9, name: 'Frank Harris', description: 'Operations Head' },
        { id: 10, name: 'Grace Wilson', description: 'Support Specialist' }
    ];
    

    return (
        <main className="app_container">
            <div className="px-4 pt-6 overflow-hidden">
                {/* Heading and Button */}
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-gray-800">Staff Types</h4>
                    <Link
                        href="/setting/staff/create"
                        className={`default_button flex items-center gap-2 px-4 py-2 rounded-md shadow font-medium transition
                            ${isActive ? 'bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white focus:outline-none focus:ring-0`}
                    >
                        <span className="text-lg font-bold">+</span>
                        <span>Add Staff Member</span>
                    </Link>
                </div>

                {/* Table */}
                <div className="overflow-x-auto bg-white rounded-md shadow">
                    <table className="min-w-full table-auto border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">ID</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Staff Name</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Description</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {staffs.map((staff) => (
                                <tr key={staff.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border-b text-sm text-gray-600">{staff.id}</td>
                                    <td className="px-4 py-2 border-b text-sm text-gray-600">{staff.name}</td>
                                    <td className="px-4 py-2 border-b text-sm text-gray-600">{staff.description}</td>
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
