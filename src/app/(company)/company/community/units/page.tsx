import Link from 'next/link';

export default function Units() {
    // Sample data for 10 units
    const unitData = [
        { blockName: 'Block A', unitType: '1BHK', unitNumber: '101', floorNumber: 1, occupiedBy: 'John Doe', registeredName: 'John', unitStatus: 'Occupied' },
        { blockName: 'Block B', unitType: '2BHK', unitNumber: '202', floorNumber: 2, occupiedBy: 'Jane Smith', registeredName: 'Jane', unitStatus: 'Occupied' },
        { blockName: 'Block A', unitType: 'Studio', unitNumber: '103', floorNumber: 1, occupiedBy: 'Mike Johnson', registeredName: 'Mike', unitStatus: 'Vacant' },
        { blockName: 'Block C', unitType: '3BHK', unitNumber: '301', floorNumber: 3, occupiedBy: 'Sarah Lee', registeredName: 'Sarah', unitStatus: 'Occupied' },
        { blockName: 'Block B', unitType: '2BHK', unitNumber: '204', floorNumber: 2, occupiedBy: 'Chris Brown', registeredName: 'Chris', unitStatus: 'Vacant' },
        { blockName: 'Block A', unitType: '1BHK', unitNumber: '105', floorNumber: 1, occupiedBy: 'Emily White', registeredName: 'Emily', unitStatus: 'Occupied' },
        { blockName: 'Block D', unitType: '3BHK', unitNumber: '402', floorNumber: 4, occupiedBy: 'David Green', registeredName: 'David', unitStatus: 'Occupied' },
        { blockName: 'Block C', unitType: 'Studio', unitNumber: '302', floorNumber: 3, occupiedBy: 'Laura Black', registeredName: 'Laura', unitStatus: 'Vacant' },
        { blockName: 'Block D', unitType: '1BHK', unitNumber: '501', floorNumber: 5, occupiedBy: 'Tom Clark', registeredName: 'Tom', unitStatus: 'Occupied' },
        { blockName: 'Block A', unitType: '2BHK', unitNumber: '107', floorNumber: 1, occupiedBy: 'Anna Brown', registeredName: 'Anna', unitStatus: 'Vacant' }
    ];

    return (
        <div className="px-4 pt-6 overflow-hidden">
            <div className="heading_section">
                <h4 className="heading --small">
                    Units List
                </h4>

                <a href="https://havenexbackend.bkolpo.com/blocks/create">
                    <a className="default_button --icon">Add Units List</a>
                </a>
            </div>

            <div className="mx-auto">
                <div className="default_box_shadow">
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto">
                            <thead>
                                <tr className="border-b">
                                    <th className="px-4 py-2">Block Name</th>
                                    <th className="px-4 py-2">Unit Type</th>
                                    <th className="px-4 py-2">Unit Number</th>
                                    <th className="px-4 py-2">Floor Number</th>
                                    <th className="px-4 py-2">Occupied By</th>
                                    <th className="px-4 py-2">Registered Name</th>
                                    <th className="px-4 py-2">Unit Status</th>
                                    <th className="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {unitData.map((unit, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="px-4 py-2">{unit.blockName}</td>
                                        <td className="px-4 py-2">{unit.unitType}</td>
                                        <td className="px-4 py-2">{unit.unitNumber}</td>
                                        <td className="px-4 py-2">{unit.floorNumber}</td>
                                        <td className="px-4 py-2">{unit.occupiedBy}</td>
                                        <td className="px-4 py-2">{unit.registeredName}</td>
                                        <td className="px-4 py-2">{unit.unitStatus}</td>
                                        <td className="px-4 py-2">
                                            <button className="text-blue-500 hover:text-blue-700">Edit</button>
                                            <button className="ml-2 text-red-500 hover:text-red-700">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
