import React from "react";

function InputFieldsExtra() {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col gap-2 mr-28">
        <label htmlFor="address" className="w-auto">
          Address
        </label>
        <input
          type="text"
          id="address"
          placeholder=""
          className="shadow appearance-none border h-14 bg-gray-100 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />

        <label htmlFor="driverlicense" className="w-auto">
          Körkort
        </label>
        <input
          type="text"
          id="driverlicense"
          className="shadow appearance-none border h-14 bg-gray-100 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />

        <label htmlFor="bornIn">Födelseort</label>
        <input
          type="text"
          id="bornIn"
          className="shadow appearance-none borde bg-gray-100 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="flex flex-col gap-2 ">
        <label htmlFor="zipcode">Postnummer</label>
        <input
          type="text"
          id="zipcode"
          className="shadow appearance-none border h-14 bg-gray-100 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />

        <label htmlFor="countryFrom">Nationalitet</label>
        <input
          type="text"
          id="countryFrom"
          className="shadow appearance-none border h-14 bg-gray-100 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label htmlFor="date">Födelsedaturm</label>
        <input
          type="date"
          id="date"
          className="shadow appearance-none border h-14 bg-gray-100 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  );
}

export default InputFieldsExtra;
