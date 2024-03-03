import React from "react";

const RoomCard = ({ imageUrl, title, price, extraInfo, amenities }) => (
  <div className="flex flex-col aspect-[1.3]  w-6/12 max-md:ml-0 max-md:w-full  ">
    <div className="flex flex-col grow items-start px-14 py-12 w-full text-2xl text-white bg-zinc-800 border-neutral-400 max-md:px-5 max-md:mt-3 max-md:max-w-full">
      <h3 className="text-3xl">{title}</h3>
      <p className="mt-7">{price}</p>
      {amenities.map((amenity, index) => (
        <p key={index} className={`mt-4 text-lg`}>{amenity}</p>
        ))}
      {extraInfo && <p className="mt-8 text-lg">{extraInfo}</p>}
    </div>
  </div>
);

const RoomShowcase = () => {
  const rooms = [
    {
      imageUrl: "https://5.imimg.com/data5/IT/UJ/GLADMIN-22574967/college-student-hostel-facilities-500x500.jpg",
      title: "4 Sharing Rooms",
      price: "Rs. 72000 / student",
      amenities: ["Attached bathroom", "Study Desk", "Chair"],
    },
    {
      imageUrl: "https://5.imimg.com/data5/IT/UJ/GLADMIN-22574967/college-student-hostel-facilities-500x500.jpg",
      title: "4 Sharing Rooms (AC Rooms)",
      price: "Rs. 82000 / student",
      extraInfo: "Extra Rs 10 / per unit after 250 unit",
      amenities: ["Attached bathroom", "Study Desk", "Chair"],
    },
  ];

  return (
    <div className="flex flex-col px-5 pt-12">
      <header className="self-center mt-14 text-4xl font-bold text-black whitespace-nowrap max-md:mt-10">
        Explore Our Rooms
      </header>
      <p className="mt-8 text-lg font-medium text-center text-neutral-500 max-md:max-w-full">
        Welcome to the RK Hostel Rooms – your haven within RK University campus. We offer a variety of comfortable
        and budget-friendly accommodation options to suit your needs. Whether you prefer a private space for focused
        study or a shared dorm for a social atmosphere, we have something for everyone.
      </p>
      {rooms.map((room, index) => (
        <section key={index} className={` my-10 bg-zinc-300/30 ${index%2===0?'rounded-[50px_0px]':'rounded-[0px_50px]'} max-md:mt-10 max-md:max-w-full p-3 overflow-hidden`} >
          <div className={`flex  max-md:flex-col max-md:gap-0 overflow-hidden ${index%2===0?'rounded-[50px_0px]':'rounded-[0px_50px] flex-row-reverse'}`}>
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src={room.imageUrl}
                alt={room.title}
                className="grow w-full aspect-[1.3] max-md:mt-3 max-md:max-w-full"
              />
            </div>
            <RoomCard {...room} />
          </div>
        </section>
      ))}
    </div>
  );
};

export default RoomShowcase;