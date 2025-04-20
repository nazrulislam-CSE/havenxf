
export default function Companies() {
    return (
        <main className="app_container">
            <div className="px-4 pt-6 overflow-hidden">

                <div className="heading_section">
                    <h4 className="heading --small">
                        Company Directory
                    </h4>

                    <a href="https://havenexbackend.bkolpo.com/companies/create" className="default_button --icon">
                        <i className="material-icons text-base font-bold">add</i>
                        Add New Company
                    </a>
                </div>

                <section className="mt-6">
                    <div >
                        <div className="default_box_shadow">
                            <div className="overflow-x-auto">
                                <table className="default_table datatable">
                                    <thead className="header">
                                        <tr>
                                            <th>
                                                Company Name
                                                <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"></path>
                                                </svg>
                                            </th>
                                            <th>
                                                Contact Person
                                                <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"></path>
                                                </svg>
                                            </th>
                                            <th>
                                                Phone Number
                                                <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"></path>
                                                </svg>
                                            </th>
                                            <th>
                                                Email Address
                                                <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"></path>
                                                </svg>
                                            </th>
                                            <th>
                                                Action
                                                <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"></path>
                                                </svg>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="title">Shining Property Management</td>
                                            <td>Muhammad Zia</td>
                                            <td>+971547939941</td>
                                            <td>muhdahsan24@gmail.com</td>
                                            <td>
                                                <button id="dropdownComment1Button" data-dropdown-toggle="dropdownCommentd115e87b-4e0a-410b-9edc-41f85fca7876" className="" type="button">
                                                    <i className="material-icons">more_vert</i>
                                                </button>
                                                
                                                <div id="dropdownCommentd115e87b-4e0a-410b-9edc-41f85fca7876" className="z-60 bg-white divide-y divide-gray-100 rounded shadow w-36 dark:bg-gray-700 dark:divide-gray-600 hidden" bis_skin_checked="1" style={{position: 'absolute', inset: 'auto auto 0px 0px', margin: '0px', transform: 'translate3d(1180px, -20px, 0px)'}} aria-hidden="true" data-popper-placement="top">
                                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                                                        <li>
                                                            <a href="https://havenexbackend.bkolpo.com/companies/d115e87b-4e0a-410b-9edc-41f85fca7876/edit" className="block px-4 py-2 hover:bg-gray-100">Edit</a>
                                                        </li>
                                                        <li>
                                                            <form action="https://havenexbackend.bkolpo.com/companies/d115e87b-4e0a-410b-9edc-41f85fca7876" method="POST"  >
                                                                <input type="hidden" name="_token" value="ZWjvDV9UoA1yDXI4FMENhwe1yDhYg9mMXTdvS7lG"/>                                                
                                                                <input type="hidden" name="_method" value="DELETE"/>                                                
                                                                <button type="submit" className="block px-4 py-2 hover:bg-gray-100 w-full">Delete</button>
                                                                </form>
                                                                </li>
                                                            </ul>
                                                        </div>
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
    );
}