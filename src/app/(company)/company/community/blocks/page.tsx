
import Link from 'next/link';

export default function BlockDirectory() {

    return (
        <div className="px-4 pt-6 overflow-hidden">
            <div className="heading_section">
                <h4 className="heading --small">
                    Block Directory
                </h4>

                <a href="https://havenexbackend.bkolpo.com/blocks/create">
                    <a className="default_button --icon">Add Block</a>
                </a>
            </div>

            <div className="mx-auto">
                <div className="default_box_shadow">
                    <div className="overflow-x-auto">
                        <table className="default_table datatable capitalize">
                            <thead className="header">
                                <tr>
                                    <th>
                                        Block Name
                                        <i className="material-icons text-base">unfold_more</i>
                                    </th>
                                    <th>
                                        Number of Apartments
                                        <i className="material-icons text-base">unfold_more</i>
                                    </th>
                                    <th>
                                        Number of Shops
                                        <i className="material-icons text-base">unfold_more</i>
                                    </th>
                                    <th>
                                        Actions
                                        <i className="material-icons text-base">unfold_more</i>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
