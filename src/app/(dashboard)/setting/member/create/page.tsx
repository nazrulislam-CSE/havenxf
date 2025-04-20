'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateMember() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted:', formData);

        // Simulate saving
        setTimeout(() => {
            router.push('/setting/member'); // Navigate back to the unit list
        }, 500);
    };

    return (
        <main className="app_container">
            <div className="px-4 pt-6 max-w-3xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Add Member Type</h2>
                    <button
                        onClick={() => router.push('/setting/member')}
                        className="default_button text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                        Back
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-lg w-full">
                    <div className='mb-4'>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Member Type Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="Enter member name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 mt-2">Description (Optional)</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="Enter description"
                            rows={3}
                            required
                        />
                    </div>
                    <div className="flex justify-end mt-4">
                        <button
                            type="submit"
                            className="default_button w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                        >
                            Add Member Type
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
