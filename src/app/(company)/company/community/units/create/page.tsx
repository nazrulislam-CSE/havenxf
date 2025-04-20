'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function CreateUnit() {
        const pathname = usePathname();
        const isActive = pathname === '/company/community/units/create';
    

    const [formData, setFormData] = useState({
        block_id: '',
        unit_type: '',
        unit_number: '',
        floor_number: '',
        furnishing_status: '',
        size_total: '',
        suite_area: '',
        common_area: '',
        balcony: 'no',
        balcony_area: '',
        parking_number: '',
        intercom_number: '',
        number_of_pets: '',
        unit_status: 'Registered',
        dues_paid_by: 'Owner',
        dewa_connection: '',
        gas_connection: '',
        chiller_connection: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission here
        console.log(formData);
    };


    return (
        <main className="app_container">
            <div className="px-4 pt-6 max-w-3xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Add New Unit</h2>
                    <button
                        onClick={() => router.push('/company/community/units/create')}
                        className="default_button text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                        Back
                    </button>
                </div>
                <form
            action="https://havenexbackend.bkolpo.com/units"
            method="POST"
            className="default_form"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
        >
            <input type="hidden" name="_token" value="BAe8pOhaO9K8TPlvyd6JREIYtAKu6H4hqEnC9Pqj" />
            <input type="hidden" name="community_id" value="2" />

            <div className="grid gap-8 mb-6 grid-cols-2">
                <div>
                    <label htmlFor="block_id" className="form_label">Block Name</label>
                    <select
                        name="block_id"
                        id="block_id"
                        className="form_field"
                        value={formData.block_id}
                        onChange={handleChange}
                    >
                        <option value="">-- Select Block --</option>
                        <option value="2">A</option>
                        <option value="3">B</option>
                        <option value="4">C</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="unit_type" className="form_label">Unit Type</label>
                    <select
                        name="unit_type"
                        id="unit_type"
                        className="form_field"
                        value={formData.unit_type}
                        onChange={handleChange}
                    >
                        <option value="Studio">Studio</option>
                        <option value="1 BR">1 BR</option>
                        <option value="2 BR">2 BR</option>
                        <option value="2 BR Duplex">2 BR Duplex</option>
                        <option value="3 BR">3 BR</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="unit_number" className="form_label">Unit Number</label>
                    <input
                        type="text"
                        name="unit_number"
                        id="unit_number"
                        className="form_field"
                        value={formData.unit_number}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="floor_number" className="form_label">Floor Number</label>
                    <input
                        type="number"
                        name="floor_number"
                        id="floor_number"
                        className="form_field"
                        value={formData.floor_number}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="furnishing_status" className="form_label">Furnishing Status</label>
                    <select
                        name="furnishing_status"
                        id="furnishing_status"
                        className="form_field"
                        value={formData.furnishing_status}
                        onChange={handleChange}
                    >
                        <option value="">-- Select Status --</option>
                        <option value="Furnished">Furnished</option>
                        <option value="Unfurnished">Unfurnished</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="size_total" className="form_label">Builtup Area (in sqft)</label>
                    <input
                        type="number"
                        step="0.01"
                        name="size_total"
                        id="size_total"
                        className="form_field"
                        value={formData.size_total}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="suite_area" className="form_label">Suite Area (in sqft)</label>
                    <input
                        type="number"
                        step="0.01"
                        name="suite_area"
                        id="suite_area"
                        className="form_field"
                        value={formData.suite_area}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="common_area" className="form_label">Common Area (in sqft)</label>
                    <input
                        type="number"
                        step="0.01"
                        name="common_area"
                        id="common_area"
                        className="form_field"
                        value={formData.common_area}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="balcony" className="form_label">Balcony</label>
                    <select
                        name="balcony"
                        id="balcony"
                        className="form_field"
                        value={formData.balcony}
                        onChange={handleChange}
                        required
                    >
                        <option value="no" selected>No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="balcony_area" className="form_label">Balcony Area (in sqft)</label>
                    <input
                        type="number"
                        step="0.01"
                        name="balcony_area"
                        id="balcony_area"
                        className="form_field"
                        value={formData.balcony_area}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="parking_number" className="form_label">Parking Number</label>
                    <input
                        type="text"
                        name="parking_number"
                        id="parking_number"
                        className="form_field"
                        value={formData.parking_number}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="intercom_number" className="form_label">Intercom Number</label>
                    <input
                        type="text"
                        name="intercom_number"
                        id="intercom_number"
                        className="form_field"
                        value={formData.intercom_number}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="number_of_pets" className="form_label">Number of Pets</label>
                    <input
                        type="number"
                        name="number_of_pets"
                        id="number_of_pets"
                        className="form_field"
                        value={formData.number_of_pets}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="unit_status" className="form_label">Unit Status</label>
                    <select
                        name="unit_status"
                        id="unit_status"
                        className="form_field"
                        value={formData.unit_status}
                        onChange={handleChange}
                        required
                    >
                        <option value="Registered" selected>Registered</option>
                        <option value="Booked">Booked</option>
                        <option value="Not Sold">Not Sold</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="dues_paid_by" className="form_label">Dues Paid by</label>
                    <select
                        name="dues_paid_by"
                        id="dues_paid_by"
                        className="form_field"
                        value={formData.dues_paid_by}
                        onChange={handleChange}
                    >
                        <option value="Owner" selected>Owner</option>
                        <option value="Tenant">Tenant</option>
                        <option value="Builder">Builder</option>
                        <option value="Noone">No One</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="dewa_connection" className="form_label">Dewa Connection Number</label>
                    <input
                        type="text"
                        name="dewa_connection"
                        id="dewa_connection"
                        className="form_field"
                        value={formData.dewa_connection}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="gas_connection" className="form_label">Gas Connection Number</label>
                    <input
                        type="text"
                        name="gas_connection"
                        id="gas_connection"
                        className="form_field"
                        value={formData.gas_connection}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="chiller_connection" className="form_label">Chiller Connection Number</label>
                    <input
                        type="text"
                        name="chiller_connection"
                        id="chiller_connection"
                        className="form_field"
                        value={formData.chiller_connection}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="flex items-center gap-x-3">
                <button type="submit" className="default_button w-auto">
                    Add Unit
                </button>
                <a href="https://havenexbackend.bkolpo.com/units" className="default_button --cancel">
                    Cancel
                </a>
            </div>
        </form>
            </div>
        </main>
    );
}
