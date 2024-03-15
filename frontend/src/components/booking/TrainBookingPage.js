import React, { useState } from "react";

const TrainBookingPage = () => {
  // Define state variables for departing and arriving stations, and dates
  const [departingStation, setDepartingStation] = useState("");
  const [arrivingStation, setArrivingStation] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission logic, such as sending data to backend or showing confirmation message
  };

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl text-blue-500 p-8 font-bold mt-4 mb-4 text-center">
        Search Your Train
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="departingStation"
              className="block text-sm font-medium text-gray-700"
            >
              Departing Station
            </label>
            <input
              type="text"
              id="departingStation"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={departingStation}
              onChange={(e) => setDepartingStation(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="arrivingStation"
              className="block text-sm font-medium text-gray-700"
            >
              Arriving Station
            </label>
            <input
              type="text"
              id="arrivingStation"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={arrivingStation}
              onChange={(e) => setArrivingStation(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Select Your Date
          </label>
          <input
            type="date"
            id="date"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default TrainBookingPage;
