import React, { useState } from 'react';
import '../../index.css';
import { ButtonLarge, ButtonSmall } from '../../components/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Flight = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-blue-custom p-20 shadow-lg rounded">
          <h2 className="block text-bg-white-700 text-center text-white bg-white-700 font-bold mb-12">FLIGHT</h2>
        </div>
        <div className="max-w-sm rounded-md border-white lg:max-w-full -mt-20 mr-20 ml-20 bg-white px-20 py-10 shadow-lg">

          <div className="w-full max-w-lg mb-5">
            <ButtonLarge custom="py-2 px-1 mr-12" background="primary" disabled={false} children="Round Trip" />
            <ButtonLarge custom="m-12" background="primary" disabled={false} children="One Way" />
          </div>
          <div className="w-full inline-flex">

            <div className="flex items-center border border-gray-600 rounded-md">
              <i className="py-1 px-2 fas fa-plane h-6 w-6 text-gray-500"></i>
              <input
                type="text"
                placeholder="From"
                className='w-full text-gray-700 mr-3 py-1 px-2'
              />
            </div>
            <ButtonSmall background="secondary" disabled={false}
              children={<i className='py-1 px-1 fas fa-exchange-alt h-6 w-6 text-white'></i>} />
            <div className="flex items-center border border-gray-600 rounded-md">
              <i className="py-1 px-1 fas fa-plane h-6 w-6 text-gray-500"></i>
              <input
                type="text"
                className="w-full text-gray-700 mr-3 py-1 px-2"
                placeholder="To"
              />
            </div>
          </div>
          <div className="w-full inline-flex">
            <div className="w-full md:w-1/3 px-1 mb-2">
              <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Date
              </label>
              <div className="flex items-center border border-gray-600 rounded-md">
                <i className='py-1 px-1 fas fa-calendar h-6 w-6 text-gray-500'></i>
                <DatePicker className='py-1'
                  selectsRange={true}
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(update) => {
                    setDateRange(update);
                  }}
                  isClearable={true}
                />
              </div>

            </div>
            <div className="w-full md:w-1/3 px-1 mb-6">
              <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                No. Of Passenger
              </label>
              <div className="flex items-center border border-gray-600 rounded-md ">
                <i className='px-1 py-1 fas fa-user h-6 w-6 text-gray-500'></i>
                <select
                  className="w-full text-gray-700 mr-3 py-1 px-2  "
                >
                  <option value={0}> 1 Adult , 0 Child , 0 Infant</option>
                </select>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-1 mb-6">
              <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Seat Class
              </label>
              <div className="flex items-center border border-gray-600 rounded-md">
                <i className='px-1 py-1 m-auto fas fa-star h-6 w-6 text-gray-500'></i>
                <select
                  className="rounded w-full text-gray-700 mr-3 py-1 px-2"
                >
                  <option value={0}>Economy</option>
                  <option value={1}>Bussiness</option>

                </select>
              </div>
            </div>
          </div>
          <ButtonLarge
            custom="float-right -mt-10"
            background="secondary" disabled={false} children={<i className="fas fa-search" aria-hidden="true"></i>} childrenString='Search Flight' />
        </div>

      </div >

    </>
  )
}
export default Flight