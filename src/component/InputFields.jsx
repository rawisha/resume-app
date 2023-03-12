import React from "react";
import InputFieldsExtra from "./InputFieldsExtra";
function InputFields() {
  return (
    <div className="flex justify-center flex-col items-left ">
      <div id="section-title ">
        <h1 className="text-3xl mb-3 font-medium">Kontakt Uppgifter</h1>
      </div>

      <div className="flex justify-center flex-row items-center">
        <div className="flex flex-col gap-2 mr-28">
          <label htmlFor="jobtitle" className="font-light">
            Jobbtitel
          </label>
          <input
            type="text"
            id="jobtitle"
            placeholder="t.ex. lärare"
            className="shadow appearance-none border h-12 bg-gray-100 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />

          <label htmlFor="firstname" className="font-light">
            Förnamn
          </label>
          <input
            type="text"
            id="firstname"
            className="shadow appearance-none border h-12 bg-gray-100 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />

          <label htmlFor="email" className="font-light">
            E-post
          </label>
          <input
            type="text"
            id="email"
            className="shadow appearance-none border h-12 bg-gray-100 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />

          <label htmlFor="country" className="font-light">
            Land
          </label>
          <input
            type="text"
            id="country"
            className="shadow appearance-none border h-12 bg-gray-100 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />

          <label htmlFor="address" className="font-light">
            Address
          </label>
          <input
            type="text"
            id="address"
            placeholder=""
            className="shadow appearance-none border h-12 bg-gray-100 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />

          <label htmlFor="driverlicense" className="font-light">
            Körkort
          </label>
          <input
            type="text"
            id="driverlicense"
            className="shadow appearance-none border h-12 bg-gray-100 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />

          <label htmlFor="bornIn" className="font-light">
            Födelseort
          </label>
          <input
            type="text"
            id="bornIn"
            className="shadow appearance-none border h-12 bg-gray-100 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex flex-col gap-y-2 ">
          <label
            htmlFor="picture"
            className="flex flex-row cursor-pointer border-gray-100"
          >
            <div className="flex flex-row justify-center items-center gap-2 ">
              <p className="border w-[70px] flex justify-center items-center h-[70px]">
                Ladda Up
              </p>
              <p className="font-light">Ladda Up</p>
            </div>
            <input type="file" id="picture" className="hidden" />
          </label>

          <label htmlFor="lastname" className="font-light">
            Efternamn
          </label>
          <input
            type="text"
            id="lastname"
            className="shadow appearance-none border h-12 bg-gray-100 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label htmlFor="email" className="font-light">
            Telefon
          </label>
          <input
            type="text"
            id="phone"
            className="shadow appearance-none border h-12 bg-gray-100 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label htmlFor="city" className="font-light">
            Stad
          </label>
          <input
            type="text"
            id="city"
            className="shadow appearance-none border h-12 bg-gray-100 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label htmlFor="zipcode" className="font-light">
            Postnummer
          </label>
          <input
            type="text"
            id="zipcode"
            className="shadow appearance-none border h-12 bg-gray-100 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />

          <label htmlFor="countryFrom" className="font-light">
            Nationalitet
          </label>
          <input
            type="text"
            id="countryFrom"
            className="shadow appearance-none border h-12 bg-gray-100 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label htmlFor="date" className="font-light">
            Födelsedatum
          </label>
          <input
            type="text"
            id="date"
            className="shadow appearance-none border h-12 bg-gray-100 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
    </div>
  );
}

export default InputFields;
