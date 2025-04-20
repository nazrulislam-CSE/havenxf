
export default function Directory() {
    return (
        <main className="app_container">
            <div className="px-4 pt-6 overflow-hidden">
                <div className="heading_section">
                    <h4 className="heading --small">
                        Registered Company Users
                    </h4>
                </div>
                <section className="mt-6">
                    <div className="mx-auto">
                        <div className="default_box_shadow">
                            <div className="overflow-x-auto">
                                <table className="default_table datatable">
                                    <thead className="header">
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Status</th>
                                            <th>Role</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2</td>
                                            <td>Muhammad Zia</td>
                                            <td>muhdahsan24@gmail.com</td>
                                            <td>active</td>
                                            <td>company_admin</td>
                                            <td>
                                                <a href="https://havenexbackend.bkolpo.com/users/2/edit" className="btn btn-primary btn-sm">Edit</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}