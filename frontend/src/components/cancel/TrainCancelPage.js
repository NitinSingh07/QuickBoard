import React, { useState } from "react";

const TrainCancelPage = () => {
  const [bookingId, setBookingId] = useState("");

  const handleCancel = (e) => {
    e.preventDefault();
    // Here you can implement the cancellation logic, such as sending a request to the backend
    console.log(`Cancellation request for booking ID: ${bookingId}`);
  };

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl text-red-500 p-8 font-bold mt-4 mb-4 text-center">
        Cancel Train Ticket
      </h1>
      <form onSubmit={handleCancel} className="space-y-4">
        <div>
          <label
            htmlFor="bookingId"
            className="block text-sm font-medium text-gray-700"
          >
            Booking ID
          </label>
          <input
            type="text"
            id="bookingId"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={bookingId}
            onChange={(e) => setBookingId(e.target.value)}
          />
        </div>
        <div className="space-x-4">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Cancel Ticket
          </button>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Sell Your Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default TrainCancelPage;
