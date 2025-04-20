'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link'; 

export default function Category() {
    const pathname = usePathname();
    const isActive = pathname === '/setting/vendor/categories/create';

    const categories = [
        { id: 1, name: 'Auditor', description: 'Auditor for financial audits and reviews' },
        { id: 2, name: 'Supplier', description: 'Supplier of raw materials or goods' },
        { id: 3, name: 'Manufacturer', description: 'Manufacturer of products or goods' },
        { id: 4, name: 'Wholesaler', description: 'Wholesaler of bulk goods or products' },
        { id: 5, name: 'Distributor', description: 'Distributor of products to retailers or customers' },
        { id: 6, name: 'Service Provider', description: 'Vendor offering a service (e.g., consulting, IT support)' },
        { id: 7, name: 'Retailer', description: 'Retailer selling goods directly to consumers' },
        { id: 8, name: 'Contractor', description: 'Contractor for construction or repair work' },
        { id: 9, name: 'Freight Carrier', description: 'Provider of transportation or logistics services' },
        { id: 10, name: 'Technician', description: 'Vendor providing technical services or maintenance' }
    ];
    

    return (
        <main className="app_container">
            <div className="px-4 pt-6 overflow-hidden">
                {/* Heading and Button */}
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-gray-800">Vendor Categories</h4>
                    <Link
                        href="/setting/vendor/categories/create"
                        className={`default_button flex items-center gap-2 px-4 py-2 rounded-md shadow font-medium transition
                            ${isActive ? 'bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white focus:outline-none focus:ring-0`}
                    >
                        <span className="text-lg font-bold">+</span>
                        <span>Add Category</span>
                    </Link>
                </div>

                {/* Table */}
                <div className="overflow-x-auto bg-white rounded-md shadow">
                    <table className="min-w-full table-auto border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">ID</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Category Name</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Description</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category) => (
                                <tr key={category.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border-b text-sm text-gray-600">{category.id}</td>
                                    <td className="px-4 py-2 border-b text-sm text-gray-600">{category.name}</td>
                                    <td className="px-4 py-2 border-b text-sm text-gray-600">{category.description}</td>
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
