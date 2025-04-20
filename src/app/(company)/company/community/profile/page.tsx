import React from "react";

const EditCommunity = () => {
  return (
    <div className="px-4 pt-6 overflow-hidden">
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h4 className="text-lg font-semibold border-b pb-2 mb-6">
          Edit Community
        </h4>
        <form
          action="https://havenexbackend.bkolpo.com/community/2"
          method="POST"
          className="space-y-6"
          encType="multipart/form-data"
        >
          <input type="hidden" name="_token" value="BAe8pOhaO9K8TPlvyd6JREIYtAKu6H4hqEnC9Pqj" />
          <input type="hidden" name="_method" value="PUT" />

          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            {/* Community Name */}
            <div>
            <label htmlFor="community_name" className="block text-sm font-medium text-gray-700 mb-1">
                Community Name
            </label>
            <input
                type="text"
                id="community_name"
                name="community_name"
                defaultValue="Plaza Residences 1"
                className="w-full border border-gray-300 rounded px-3 py-2"
            />
            </div>

            {/* Community Type */}
            <div>
            <label htmlFor="community_type" className="block text-sm font-medium text-gray-700 mb-1">
                Community Type
            </label>
            <input
                type="text"
                id="community_type"
                name="community_type"
                defaultValue="Apartments, Villas"
                className="w-full border border-gray-300 rounded px-3 py-2"
            />
            </div>


            {/* Area Name */}
            <div>
              <label htmlFor="area_name" className="block text-sm font-medium text-gray-700 mb-1">
                Area Name
              </label>
              <input
                type="text"
                id="area_name"
                name="area_name"
                defaultValue="Jumeirah Village Circle"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

           {/* Unit Type */}
            <div>
            <label htmlFor="unit_type" className="block text-sm font-medium text-gray-700 mb-1">
                Unit Type
            </label>
            <input
                type="text"
                id="unit_type"
                name="unit_type"
                defaultValue="Studio, 1 BR, 2 BR, 2 BR Duplex, 3 BR"
                className="w-full border border-gray-300 rounded px-3 py-2"
            />
            </div>

            {/* Total Units */}
            <div>
            <label htmlFor="total_units" className="block text-sm font-medium text-gray-700 mb-1">
                Total Units
            </label>
            <input
                type="number"
                id="total_units"
                name="total_units"
                defaultValue="700"
                className="w-full border border-gray-300 rounded px-3 py-2"
            />
            </div>


            {/* Project Address */}
            <div>
              <label htmlFor="project_address" className="block text-sm font-medium text-gray-700 mb-1">
                Project Address
              </label>
              <input
                type="text"
                id="project_address"
                name="project_address"
                defaultValue="Jumeirah Village Circle"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            {/* State */}
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                defaultValue="Dubai"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                defaultValue="Dubai"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <select
                id="country"
                name="country"
                className="w-full border border-gray-300 rounded px-3 py-2"
                defaultValue="United Arab Emirates"
              >
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                {/* Add more options as needed */}
              </select>
            </div>

            {/* Zip Code */}
            <div>
              <label htmlFor="zip_code" className="block text-sm font-medium text-gray-700 mb-1">
                Zip Code
              </label>
              <input
                type="text"
                id="zip_code"
                name="zip_code"
                defaultValue="000000"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            {/* Builder Name */}
            <div>
              <label htmlFor="builder_name" className="block text-sm font-medium text-gray-700 mb-1">
                Builder Name
              </label>
              <input
                type="text"
                id="builder_name"
                name="builder_name"
                defaultValue="Danube"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            {/* Construction Status */}
            <div>
              <label htmlFor="construction_status" className="block text-sm font-medium text-gray-700 mb-1">
                Construction Status
              </label>
              <select
                id="construction_status"
                name="construction_status"
                className="w-full border border-gray-300 rounded px-3 py-2"
                defaultValue="in-progress"
              >
                <option value="completed">Completed</option>
                <option value="in-progress">In Progress</option>
                <option value="yet-to-start">Yet To Start</option>
              </select>
            </div>

            {/* Construction Year */}
            <div>
              <label htmlFor="construction_year" className="block text-sm font-medium text-gray-700 mb-1">
                Construction Year
              </label>
              <input
                type="number"
                id="construction_year"
                name="construction_year"
                defaultValue="2010"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            {/* Plot Number */}
            <div>
              <label htmlFor="plot_number" className="block text-sm font-medium text-gray-700 mb-1">
                Plot Number
              </label>
              <input
                type="text"
                id="plot_number"
                name="plot_number"
                defaultValue="1231231"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            {/* Map Address */}
            <div>
              <label htmlFor="map_address" className="block text-sm font-medium text-gray-700 mb-1">
                Map Address
              </label>
              <input
                type="text"
                id="map_address"
                name="map_address"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            {/* Community Picture */}
            <div>
              <label htmlFor="community_picture" className="block text-sm font-medium text-gray-700 mb-1">
                Community Picture
              </label>
              <input
                type="file"
                id="community_picture"
                name="community_picture"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <div className="mt-2 text-sm flex items-center gap-4">
                <p>
                  Current Picture:{" "}
                  <a
                    href="https://havenexbackend.bkolpo.com/storage/communities/zZwtNJk1LtoMSQzYlVkkwgx1rjURtLFILZN33yfT.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline text-sm"
                  >
                    View
                  </a>
                </p>
                <p className="text-xs text-gray-500">SVG, PNG, or JPG (MAX. 800x400px).</p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="default_button w-auto bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Update Community
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCommunity;
