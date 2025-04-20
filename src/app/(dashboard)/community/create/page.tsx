

export default function CreateCommunity() {
    return (
        <main className="app_container">
            <div className="px-4 pt-6 overflow-hidden">
                <div className="default_box">
                    <h4 className="heading --small --border_bottom mb-6">
                        Add Community
                    </h4>

                    <form action="https://havenexbackend.bkolpo.com/community" method="POST" className="default_form" >
                        <input type="hidden" name="_token" value="ZWjvDV9UoA1yDXI4FMENhwe1yDhYg9mMXTdvS7lG" />
                        <div className="grid gap-8 mb-6 grid-cols-2">
                            <div>
                                <label htmlFor="community_name" className="form_label">Community Name</label>
                                <input type="text" className="form_field" id="community_name" name="community_name" />
                            </div>

                            <div>
                                <label htmlFor="company_id" className="form_label">Select Company</label>
                                <select name="company_id" id="company_id" className="form_field" >
                                    <option value="">-- Select Company --</option>
                                    <option value="d115e87b-4e0a-410b-9edc-41f85fca7876">Shining Property Management</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="community_type" className="form_label">Community Type</label>
                                <select name="community_type[]" id="community_type" className="chosen-select form_field" data-placeholder="Select Community Type" style={{ display: 'none' }}>
                                    <option value="Apartments">Apartments</option>
                                    <option value="Villas">Villas</option>
                                    <option value="Townhouses">Townhouses</option>
                                </select>
                                <div className="chosen-container chosen-container-multi" title="" id="community_type_chosen" style={{ width: '100%' }}>
                                    <ul className="chosen-choices">
                                        <li className="search-field">
                                            <input className="chosen-search-input default" type="text"  style={{ width: '172.583px' }} />
                                        </li>
                                    </ul>
                                    <div className="chosen-drop">
                                        <ul className="chosen-results"></ul>
                                    </div></div>
                            </div>

                            <div>
                                <label htmlFor="area_name" className="form_label">Area Name</label>
                                <input type="text" className="form_field" id="area_name" name="area_name" />
                            </div>

                            <div>
                                <label htmlFor="unit_type" className="form_label">Unit Type</label>
                                <select name="unit_type[]" id="unit_type" className="chosen-select form_field" data-placeholder="Select Unit Type"  style={{display: 'none'}}>
                                    <option value="Studio">Studio</option>
                                    <option value="1 BR">1 BR</option>
                                    <option value="2 BR">2 BR</option>
                                    <option value="2 BR + Study">2 BR + Study</option>
                                    <option value="2 BR Duplex">2 BR Duplex</option>
                                    <option value="3 BR">3 BR</option>
                                    <option value="3 BR Duplex">3 BR Duplex</option>
                                    <option value="4 BR">4 BR</option>
                                    <option value="4 BR Duplex">4 BR Duplex</option>
                                    <option value="5 BR">5 BR</option>
                                    <option value="5 BR Duplex">5 BR Duplex</option>
                                    <option value="Penthouse">Penthouse</option>
                                </select><div className="chosen-container chosen-container-multi" title="" id="unit_type_chosen" style={{ width: '100%' }}><ul className="chosen-choices">
                                    <li className="search-field">
                                        <input className="chosen-search-input default" type="text"  style={{ width: '126.688px' }} />
                                    </li>
                                </ul>
                                    <div className="chosen-drop">
                                        <ul className="chosen-results"></ul>
                                    </div></div>
                            </div>

                            <div>
                                <label htmlFor="total_units" className="form_label">Total Units</label>
                                <input type="number" className="form_field" id="total_units" name="total_units" />
                            </div>

                            <div>
                                <label htmlFor="project_address" className="form_label">Project Address</label>
                                <input type="text" className="form_field" id="project_address" name="project_address" />
                            </div>

                            <div>
                                <label htmlFor="state" className="form_label">State</label>
                                <input type="text" className="form_field" id="state" name="state" />
                            </div>

                            <div>
                                <label htmlFor="city" className="form_label">City</label>
                                <input type="text" className="form_field" id="city" name="city" />
                            </div>

                            <div>
                                <label htmlFor="email" className="form_label">Select Country</label>
                                <select className="countryList form_field" name="country">
                                    <option value="">-- Select Country --</option>
                                    <option value="Afghanistan">Afghanistan</option><option value="Åland Islands">Åland Islands</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antarctica">Antarctica</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island">Bouvet Island</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory">British Indian Ocean Territory</option><option value="British Virgin Islands">British Virgin Islands</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Caribbean Netherlands">Caribbean Netherlands</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Czechia">Czechia</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="DR Congo">DR Congo</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Eswatini">Eswatini</option><option value="Ethiopia">Ethiopia</option><option value="Falkland Islands">Falkland Islands</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern and Antarctic Lands">French Southern and Antarctic Lands</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Ivory Coast">Ivory Coast</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Kosovo">Kosovo</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Laos</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macau">Macau</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Mexico">Mexico</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="North Korea">North Korea</option><option value="North Macedonia">North Macedonia</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestine">Palestine</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Islands">Pitcairn Islands</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Republic of the Congo">Republic of the Congo</option><option value="Réunion">Réunion</option><option value="Romania">Romania</option><option value="Russia">Russia</option><option value="Rwanda">Rwanda</option><option value="Saint Barthélemy">Saint Barthélemy</option><option value="Saint Helena, Ascension and Tristan da Cunha">Saint Helena, Ascension and Tristan da Cunha</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Martin">Saint Martin</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="São Tomé and Príncipe">São Tomé and Príncipe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten">Sint Maarten</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia">South Georgia</option><option value="South Korea">South Korea</option><option value="South Sudan">South Sudan</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Timor-Leste">Timor-Leste</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="United States">United States</option><option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option><option value="United States Virgin Islands">United States Virgin Islands</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Vatican City">Vatican City</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option></select>
                            </div>

                            <div>
                                <label htmlFor="zip_code" className="form_label">Zip Code</label>
                                <input type="text" className="form_field" id="zip_code" name="zip_code" />
                            </div>

                            <div>
                                <label htmlFor="builder_name" className="form_label">Builder Name</label>
                                <input type="text" className="form_field" id="builder_name" name="builder_name" />
                            </div>

                            <div>
                                <label htmlFor="construction_status" className="form_label">Construction Status</label>
                                <select name="construction_status" id="construction_status" className="form_field">
                                    <option value="completed">Completed</option>
                                    <option value="in-progress">In Progress</option>
                                    <option value="yet-to-start">Yet To Start</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="construction_year" className="form_label">Construction Year</label>
                                <input type="number" className="form_field" id="construction_year" name="construction_year" />
                            </div>

                            <div>
                                <label htmlFor="plot_number" className="form_label">Plot Number</label>
                                <input type="text" className="form_field" id="plot_number" name="plot_number" />
                            </div>

                            <div>
                                <label htmlFor="map_address" className="form_label">Map Address</label>
                                <input type="text" className="form_field" id="map_address" name="map_address" />
                            </div>

                            <div>
                                <label htmlFor="community_picture" className="form_label">Community Picture</label>
                                <input type="file" className="form_field" id="community_picture" name="community_picture" />
                                <p className="mt-2 text-xs text-gray-500">SVG, PNG, or JPG (MAX. 800x400px).</p>
                            </div>

                            <div>
                                <label htmlFor="community_logo" className="form_label">Community Logo</label>
                                <input type="file" className="form_field" id="community_logo" name="community_logo" />
                                <p className="mt-2 text-xs text-gray-500">SVG, PNG, or JPG (MAX. 800x400px).</p>
                            </div>

                            <div>
                                <label htmlFor="management_logo" className="form_label">Management Logo</label>
                                <input type="file" className="form_field" id="management_logo" name="management_logo" />
                                <p className="mt-2 text-xs text-gray-500">SVG, PNG, or JPG (MAX. 800x400px).</p>
                            </div>

                            <div>
                                <label htmlFor="description" className="form_label">Description</label>
                                <input type="text" className="form_field" id="description" name="description" />
                            </div>
                        </div>

                        <div className="flex items-center gap-x-3">
                            <button type="submit" className="default_button w-auto">Add Community</button>
                            <a href="https://havenexbackend.bkolpo.com/community" className="default_button --cancel">Cancel</a>
                        </div>
                    </form>

                </div>
            </div></main>
    )
}