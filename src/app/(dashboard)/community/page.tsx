
export default function Community() {
    return (
        <main className="app_container">
            <div className="px-4 pt-6 overflow-hidden">
                <div className="heading_section">
                    <h4 className="heading --small">
                        Community Directory
                    </h4>

                    <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                        <a href="https://havenexbackend.bkolpo.com/community/create" className="default_button flex items-center">
                            <i className="material-icons text-base font-bold">add</i>
                            Add New Community
                        </a>
                    </div>
                </div>

                <section className="mt-6">
                    <div className="mx-auto">
                        <div className="default_box_shadow">
                            <div className="overflow-x-auto">
                                <table className="default_table datatable capitalize">
                                    <thead className="header">
                                        <tr>
                                            <th>Company Name</th>
                                            <th>Community Name</th>
                                            <th>Area Name</th>
                                            <th>Community Type</th>
                                            <th>Total Units</th>
                                            <th>Unit Type</th>
                                            <th>City</th>
                                            <th>Country</th>
                                            <th>Builder Name</th>
                                            <th>Construction Status</th>
                                            <th>Construction Year</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Shining Property Management</td>
                                            <td>Plaza Residences 1</td>
                                            <td>Jumeirah Village Circle</td>
                                            <td>Apartments,Villas</td>
                                            <td>700</td>
                                            <td>Studio,1 BR,2 BR,2 BR Duplex,3 BR</td>
                                            <td>Dubai</td>
                                            <td>United Arab Emirates</td>
                                            <td>Danube</td>
                                            <td>in-progress</td>
                                            <td>2010</td>
                                            <td>
                                                <button id="dropdownComment1Button" data-dropdown-toggle="communityPopup2" className="" type="button">
                                                    <i className="material-icons">more_vert</i>
                                                    <span className="sr-only">Comment settings</span>
                                                </button>
                                                
                                                <div id="communityPopup2" className="z-60 bg-white divide-y divide-gray-100 rounded shadow w-36 dark:bg-gray-700 dark:divide-gray-600 hidden" bis_skin_checked="1" style={{position: 'absolute', inset: 'auto auto 0px 0px', margin: '0px', transform: 'translate3d(2272.67px, 28px, 0px)'}} aria-hidden="true" data-popper-placement="top" data-popper-reference-hidden="" data-popper-escaped="">
                                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                                                        <li>
                                                            <a href="https://havenexbackend.bkolpo.com/community/2/edit" className="block px-4 py-2 hover:bg-gray-100">Edit</a>
                                                        </li>
                                                        <li>
                                                            <form action="https://havenexbackend.bkolpo.com/community/2" method="POST" style={{display:'inline'}} >
                                                                <input type="hidden" name="_token" value="ZWjvDV9UoA1yDXI4FMENhwe1yDhYg9mMXTdvS7lG" />             
                                                                 <input type="hidden" name="_method" value="DELETE"/>                                                    
                                                                <button type="submit" className="block px-4 py-2 hover:bg-gray-100">Delete</button>
                                                                </form>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Shining Property Management</td>
                                                    <td>Oxygen</td>
                                                    <td>Jumeirah Village Circle</td>
                                                    <td>Villas</td>
                                                    <td>100</td>
                                                    <td>3 BR,4 BR</td>
                                                    <td>Dubai</td>
                                                    <td>United Arab Emirates</td>
                                                    <td>Akkaas</td>
                                                    <td>completed</td>
                                                    <td>2020</td>
                                                    <td>
                                                        <button id="dropdownComment1Button" data-dropdown-toggle="communityPopup3" className="" type="button">
                                                            <i className="material-icons">more_vert</i>
                                                            <span className="sr-only">Comment settings</span>
                                                        </button>
                                                        
                                                        <div id="communityPopup3" className="z-60 bg-white divide-y divide-gray-100 rounded shadow w-36 dark:bg-gray-700 dark:divide-gray-600 hidden"  style={{position: 'absolute', inset: 'auto auto 0px 0px', margin: '0px', transform: 'translate3d(2272.67px, 82px, 0px)'}} aria-hidden="true" data-popper-placement="top" data-popper-reference-hidden="" data-popper-escaped="">
                                                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                                                                <li>
                                                                    <a href="https://havenexbackend.bkolpo.com/community/3/edit" className="block px-4 py-2 hover:bg-gray-100">Edit</a>
                                                                </li>
                                                                <li>
                                                                    <form action="https://havenexbackend.bkolpo.com/community/3" method="POST" style={{display:'inline'}}>
                                                                        <input type="hidden" name="_token" value="ZWjvDV9UoA1yDXI4FMENhwe1yDhYg9mMXTdvS7lG"/>             
                                                                                                               <input type="hidden" name="_method" value="DELETE"/>                                                    
                                                                        <button type="submit" className="block px-4 py-2 hover:bg-gray-100">Delete</button>
                                                                        </form>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Shining Property Management</td>
                                                            <td>Plaza Residences 2</td>
                                                            <td>Dubai Marina</td>
                                                            <td>Villas</td>
                                                            <td>10</td>
                                                            <td>5 BR</td>
                                                            <td>Dubai</td>
                                                            <td>United Arab Emirates</td>
                                                            <td></td>
                                                            <td>completed</td>
                                                            <td>2025</td>
                                                            <td>
                                                                <button id="dropdownComment1Button" data-dropdown-toggle="communityPopup4" className="" type="button">
                                                                    <i className="material-icons">more_vert</i>
                                                                    <span className="sr-only">Comment settings</span>
                                                                </button>
                                                                
                                                                <div id="communityPopup4" className="z-60 bg-white divide-y divide-gray-100 rounded shadow w-36 dark:bg-gray-700 dark:divide-gray-600 hidden"  style={{position: 'absolute', inset: 'auto auto 0px 0px', margin: '0px', transform: 'translate3d(2272.67px, 136px, 0px)'}} aria-hidden="true" data-popper-placement="top" data-popper-reference-hidden="" data-popper-escaped="">
                                                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                                                                        <li>
                                                                            <a href="https://havenexbackend.bkolpo.com/community/4/edit" className="block px-4 py-2 hover:bg-gray-100">Edit</a>
                                                                        </li>
                                                                        <li>
                                                                            <form action="https://havenexbackend.bkolpo.com/community/4" method="POST" style={{display:'inline'}}>
                                                                                <input type="hidden" name="_token" value="ZWjvDV9UoA1yDXI4FMENhwe1yDhYg9mMXTdvS7lG" />
                                                                                <input type="hidden" name="_method" value="DELETE"/>
                                                                                <button type="submit" className="block px-4 py-2 hover:bg-gray-100">Delete</button>
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

                                )

                    }