'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link'; 

export default function Amenity() {
    const pathname = usePathname();
    const isActive = pathname === '/setting/amenity/create';

    const amenitys = [
        { id: 1, name: 'Activity Room', description: 'Room for various activities' },
        { id: 2, name: 'Swimming Pool', description: 'Indoor and outdoor pool' },
        { id: 3, name: 'Gym', description: 'Fully equipped fitness center' },
        { id: 4, name: 'Spa', description: 'Relaxing spa services' },
        { id: 5, name: 'Sauna', description: 'Hot sauna for relaxation' },
        { id: 6, name: 'Parking', description: 'Secure parking space' },
        { id: 7, name: 'Library', description: 'Quiet space for reading' },
        { id: 8, name: 'Coffee Shop', description: 'On-site coffee and snacks' },
        { id: 9, name: 'Conference Room', description: 'Room for meetings and conferences' },
        { id: 10, name: 'Playground', description: 'Outdoor area for children' }
    ];
    

    return (
        <main className="app_container">
            <div className="px-4 pt-6 overflow-hidden">
                {/* Heading and Button */}
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-gray-800">Amenity List</h4>
                    <Link
                        href="/setting/amenity/create"
                        className={`default_button flex items-center gap-2 px-4 py-2 rounded-md shadow font-medium transition
                            ${isActive ? 'bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white focus:outline-none focus:ring-0`}
                    >
                        <span className="text-lg font-bold">+</span>
                        <span>Add New Amenity</span>
                    </Link>
                </div>

                {/* Table */}
                <div className="overflow-x-auto bg-white rounded-md shadow">
                    <table className="min-w-full table-auto border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">ID</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Amenity Name</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Description</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {amenitys.map((amenity) => (
                                <tr key={amenity.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border-b text-sm text-gray-600">{amenity.id}</td>
                                    <td className="px-4 py-2 border-b text-sm text-gray-600">{amenity.name}</td>
                                    <td className="px-4 py-2 border-b text-sm text-gray-600">{amenity.description}</td>
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
