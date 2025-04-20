

export default function Sidebar() {
    return (
        <>
        <aside id="sidebar" className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden w-64 h-full pt-[70px] font-normal duration-75 lg:flex transition-width" aria-label="Sidebar">
                    <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto" data-simplebar>
                            <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                <ul className="sidebar_nav">
                                    <li>
                                        <form action="#" method="GET" className="lg:hidden">
                                            <label htmlFor="mobile-search" className="sr-only">Search</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd"
                                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                            clipRule="evenodd"></path>
                                                    </svg>
                                                </div>
                                                <input type="text" name="email" id="mobile-search"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                    placeholder="Search"/>
                                            </div>
                                        </form>
                                    </li>
                                    <li>
                                        <a href="/dashboard" className="link">
                                            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="icon">
                                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                            </svg>
                                            <span className="ml-3" >Dashboard</span>
                                        </a>
                                    </li>
                                    <li>
                                        <button type="button" className="link" aria-controls="company_dropdown" data-collapse-toggle="company_dropdown">
                                            <svg className="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z">
                                                </path>
                                            </svg>
                                            <span className="flex-1 ml-3 text-left whitespace-nowrap" >Companies</span>
                                            <svg  className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                            </svg>
                                        </button>
                                        <ul id="company_dropdown" className="sidebar_dropdown hidden">
                                            <li>
                                                <a href="https://havenexbackend.bkolpo.com/companies" className="dropdown_link">List</a>
                                            </li>
                                            <li>
                                                <a href="https://havenexbackend.bkolpo.com/companies/create" className="dropdown_link">Add Company</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button type="button" className="link" aria-controls="community_dropdown" data-collapse-toggle="community_dropdown">
                                            <svg className="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z">
                                                </path>
                                            </svg>
                                            <span className="flex-1 ml-3 text-left whitespace-nowrap" >Community</span>
                                            <svg  className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                            </svg>
                                        </button>
                                        <ul id="community_dropdown" className="sidebar_dropdown hidden">
                                            <li>
                                                <a href="https://havenexbackend.bkolpo.com/community" className="dropdown_link">Listing</a>
                                            </li>

                                        </ul>
                                    </li>
                                    <li>
                                        <button type="button" className="link" aria-controls="directory_dropdown" data-collapse-toggle="directory_dropdown">
                                            <svg className="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path fillRule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="flex-1 ml-3 text-left whitespace-nowrap" >Directory</span>
                                            <svg  className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                            </svg>
                                        </button>
                                        <ul id="directory_dropdown" className="sidebar_dropdown hidden">
                                            <li>
                                                <a href="https://havenexbackend.bkolpo.com/users" className="dropdown_link">Users</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button type="button" className="link" aria-controls="helpdesk_dropdown" data-collapse-toggle="helpdesk_dropdown">
                                            <svg className="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                                            </svg>
                                            <span className="flex-1 ml-3 text-left whitespace-nowrap" >Helpdesk</span>
                                            <svg  className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                            </svg>
                                        </button>
                                        <ul id="helpdesk_dropdown" className="sidebar_dropdown hidden">
                                            <li>
                                                <a href="/helpdesk/complaintListing.php" className="dropdown_link">Complaint Box</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <button type="button" className="link" aria-controls="events_dropdown" data-collapse-toggle="events_dropdown">
                                            <svg className="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                                            </svg>
                                            <span className="flex-1 ml-3 text-left whitespace-nowrap" >Events</span>
                                            <svg  className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                            </svg>
                                        </button>
                                        <ul id="events_dropdown" className="sidebar_dropdown hidden">
                                            <li>
                                                <a href="/events/listing.php" className="dropdown_link">Event List</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <button type="button" className="link" aria-controls="setting_dropdown" data-collapse-toggle="setting_dropdown">
                                            <svg className="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path fillRule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="flex-1 ml-3 text-left whitespace-nowrap" >Setting</span>
                                            <svg  className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                            </svg>
                                        </button>
                                        <ul id="setting_dropdown" className="sidebar_dropdown hidden">
                                            <li>
                                                <a href="https://havenexbackend.bkolpo.com/unit_types" className="dropdown_link">Unit Types</a>
                                            </li>
                                            <li>
                                                <a href="https://havenexbackend.bkolpo.com/member_types" className="dropdown_link">Member Types</a>
                                            </li>
                                            <li>
                                                <a href="https://havenexbackend.bkolpo.com/staff_types" className="dropdown_link">Staff Type</a>
                                            </li>
                                            <li>
                                                <a href="https://havenexbackend.bkolpo.com/amenity_templates" className="dropdown_link">Amenities</a>
                                            </li>
                                            <li>
                                                <a href="https://havenexbackend.bkolpo.com/complain_categories" className="dropdown_link">Complain Category</a>
                                            </li>
                                            <li>
                                                <a href="https://havenexbackend.bkolpo.com/vendor_categories" className="dropdown_link">Vendor Category</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <button type="button" className="link" aria-controls="setting_dropdown" data-collapse-toggle="setting_dropdown">
                                            <svg className="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path fillRule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="flex-1 ml-3 text-left whitespace-nowrap" >Announcements</span>
                                            <svg  className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                            </svg>
                                        </button>
                                        <ul id="setting_dropdown" className="sidebar_dropdown hidden">
                                            <li>
                                                <a href="https://havenexbackend.bkolpo.com/announcements" className="dropdown_link">Listing</a>
                                            </li>
                                            <li>
                                                <a href="https://havenexbackend.bkolpo.com/announcements/create" className="dropdown_link">Add New</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </aside>
        </>
    )
}