import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto px-4" id="services">
      {/* Book Ticket */}
      <div className="mt-10">
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-4xl underline-offset-4">Services</h3>
          <div className="h-1/2 w-40 bg-blue-500" />
        </div>
        <div className="flex justify-around mt-8">
          <div className="flex flex-col w-96 gap-4">
            <h1 className="font-bold text-blue-500 text-4xl">
              Book Your Ticket
            </h1>
            <p className="text-lg">
              Enable users to effortlessly book their tickets for trains or
              flights through a user-friendly interface. This service ensures
              seamless and hassle-free booking experiences, allowing users to
              quickly secure their travel arrangements with ease and
              convenience.
            </p>
            <p className="text-gray-500 text-lg">
              "We endeavor to allocate you the optimal seat for your journey,
              ensuring your comfort and satisfaction."
            </p>
            <div className="flex gap-4">
              <div className="bg-blue-500 hover:bg-blue-600 flex items-center justify-center cursor-pointer py-4 text-lg text-white font-bold">
                <Link to="/">For Train</Link>
                <img src="./img/arrow.jpg" alt="Arrow" className="w-8 ml-2" />
              </div>
              <div className="bg-blue-500 hover:bg-blue-600 flex items-center justify-center cursor-pointer py-4 text-lg text-white font-bold">
                For Flight
                <img src="./img/arrow.jpg" alt="Arrow" className="w-8 ml-2" />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <img src="/p2p.png" className="w-96 border-2" alt="" />
          </div>
        </div>
      </div>

      {/* Sell Ticket */}
      <div className="mt-10">
        <div className="flex justify-around">
          <div className="flex items-center">
            <img src="/ifb.png" className="w-96 border-2" alt="" />
          </div>
          <div className="flex flex-col w-96 gap-4">
            <h1 className="font-bold text-blue-500 text-4xl">
              Sell Your Ticket
            </h1>
            <p className="text-lg">
              Catering to user convenience, this service allows individuals to
              transfer their tickets to those positioned at the forefront of the
              waiting list. This strategic feature not only alleviates database
              congestion but also provides prompt solutions for both the seller
              and the recipient, fostering an efficient and satisfactory user
              experience.
            </p>
            <p className="text-gray-500 text-lg">
              "Our aim is to revolutionize the ticket booking experience by
              providing seamless, efficient, and fair solutions for travelers in
              need."
            </p>
            <div className="flex gap-4">
              <div className="bg-blue-500 hover:bg-blue-600 flex items-center justify-center cursor-pointer py-4 text-lg text-white font-bold">
                <img src="./img/arrowleft.jpg" alt="Arrow" className="w-8" />
                For Train
              </div>
              <div className="bg-blue-500 hover:bg-blue-600 flex items-center justify-center cursor-pointer py-4 text-lg text-white font-bold">
                <img src="./img/arrowleft.jpg" alt="Arrow" className="w-8" />
                For Flight
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rent */}
      <div className="mt-10">
        <div className="flex justify-around">
          <div className="flex flex-col w-96 gap-4">
            <h1 className="font-bold text-3xl">Upcoming</h1>
            <h1 className="font-bold text-blue-500 text-4xl">
              Vehicle Rental Exchange
            </h1>
            <p className="text-lg">
              Facilitate a platform for travelers to temporarily rent out their
              vehicles to incoming visitors at airports. By submitting valid
              identification, such as a passport, owners can securely lend their
              vehicles, offering a convenient transportation solution for
              incoming travelers exploring nearby areas.
            </p>
            <p className="text-gray-500 text-lg">
              "Our aim is to streamline travel by enabling secure vehicle
              rentals between travelers, optimizing resource usage, and
              elevating the overall travel experience."
            </p>
          </div>
          <div>
            <img
              src="/transferchain_web.5c25714d.png"
              className="w-96"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
